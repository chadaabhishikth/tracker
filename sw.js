const CACHE_NAME = 'os-dashboard-v11';
const NOTIFY_CACHE = 'abhi-notify-v1';
const SNAPSHOT_URL = './__notify_snapshot__';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap'
];

const ICON = './icons/icon-192.png';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        ASSETS.map((url) => cache.add(url).catch((err) => {
          console.warn('SW skip failed asset', url, err);
        }))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== NOTIFY_CACHE) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate' || e.request.url.includes('manifest.json') || e.request.url.includes('index.html')) {
    e.respondWith(
      fetch(e.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          fetch(e.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(e.request, networkResponse));
            }
          }).catch(() => {});
          return cachedResponse;
        }
        return fetch(e.request);
      })
    );
  }
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'os-daily-check' || event.tag === 'os-notify') {
    event.waitUntil(runBackgroundChecks('periodicsync'));
  }
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'os-notify-check') {
    event.waitUntil(runBackgroundChecks('sync'));
  }
});

self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    let payload = { title: '⚡ System: Abhishikth', body: 'Open your OS Dashboard.' };
    try {
      if (event.data) payload = { ...payload, ...event.data.json() };
    } catch (_) {
      try { payload.body = event.data.text(); } catch (__) {}
    }
    await self.registration.showNotification(payload.title, notificationOptions(payload.body, payload.tag || 'push'));
  })());
});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'SNAPSHOT' && data.state) {
    event.waitUntil(saveSnapshot(data.state));
  } else if (data.type === 'CHECK_NOW') {
    event.waitUntil(runBackgroundChecks('manual'));
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './index.html#today';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if ('focus' in client) {
          client.postMessage({ type: 'NOTIFICATION_CLICK', tag: event.notification.tag });
          return client.focus();
        }
      }
      return self.clients.openWindow(target);
    })
  );
});

function notificationOptions(body, tag) {
  return {
    body,
    icon: ICON,
    badge: ICON,
    tag,
    renotify: true,
    requireInteraction: true,
    vibrate: [160, 80, 160],
    data: { url: './index.html#today', tag },
    actions: [{ action: 'open', title: 'Open dashboard' }]
  };
}

function localISODate(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

async function loadSnapshot() {
  try {
    const cache = await caches.open(NOTIFY_CACHE);
    const res = await cache.match(SNAPSHOT_URL);
    if (!res) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

async function saveSnapshot(state) {
  try {
    const cache = await caches.open(NOTIFY_CACHE);
    await cache.put(SNAPSHOT_URL, new Response(JSON.stringify(state), {
      headers: { 'Content-Type': 'application/json' }
    }));
  } catch (e) {
    console.warn('notify snapshot write failed', e);
  }
}

async function runBackgroundChecks(source) {
  const state = await loadSnapshot();
  if (!state || state.enabled === false) return;

  const now = new Date();
  const today = localISODate(now);
  const hour = now.getHours();
  const notifyHour = Number(state.notifyHour);
  const readyHour = Number.isFinite(notifyHour) ? notifyHour : 21;
  const alerts = [];

  const xpIsToday = state.date === today;
  const xpToday = xpIsToday ? (state.xpToday || 0) : 0;

  if (hour >= readyHour && xpToday === 0 && state.lastDailyNotified !== today) {
    alerts.push({
      key: 'lastDailyNotified',
      tag: 'daily-xp',
      title: '⚡ Streak at risk',
      body: `${state.name || 'Abhishikth'} — no XP logged today. Open the dashboard before midnight.`
    });
  }

  const twentyHours = 20 * 60 * 60 * 1000;
  if (state.lastLog && (Date.now() - state.lastLog) > twentyHours && state.lastInactiveNotified !== today) {
    const hrs = Math.floor((Date.now() - state.lastLog) / 3600000);
    alerts.push({
      key: 'lastInactiveNotified',
      tag: 'inactive-log',
      title: '📈 Nothing logged',
      body: `No tasks, LC, or expenses in ${hrs}h. Keep the grind alive.`
    });
  }

  if ((state.missionsDue || 0) > 0 && hour >= 9 && state.lastMissionNotified !== today) {
    alerts.push({
      key: 'lastMissionNotified',
      tag: 'missions-due',
      title: '⚔️ Missions due',
      body: `${state.missionsDue} long-term mission${state.missionsDue > 1 ? 's' : ''} due within 7 days.`
    });
  }

  if (!alerts.length) return;

  for (const alert of alerts) {
    await self.registration.showNotification(alert.title, notificationOptions(alert.body, alert.tag));
    state[alert.key] = today;
    if (state.ntfyTopic) {
      try {
        await fetch('https://ntfy.sh/' + encodeURIComponent(state.ntfyTopic), {
          method: 'POST',
          headers: { 'Title': alert.title, 'Tags': 'zap,warning', 'Priority': 'high' },
          body: alert.body
        });
      } catch (_) {}
    }
  }
  state.lastCheckSource = source;
  state.lastCheckAt = Date.now();
  await saveSnapshot(state);
}
