# System: Abhishikth — OS Dashboard ⚡

A high-performance, gamified personal operating system, academic manager, and career roadmap dashboard designed for **Abhishikth** (Artificial Intelligence & Engineering · Amrita Vishwa Vidyapeetham, Chennai).

Built as a lightweight, zero-dependency, single-file progressive web application (PWA) with client-side state encryption, GitHub Gist cloud synchronization, and offline-first capabilities.

---

## 📑 Table of Contents
1. [System Architecture Overview](#system-architecture-overview)
2. [Complete Feature Breakdown](#complete-feature-breakdown)
   - [1. HQ (Command Center)](#1-hq-command-center)
   - [2. GRIND (Technical Execution)](#2-grind-technical-execution)
   - [3. INTEL (Quant Funnel & Strategy)](#3-intel-quant-funnel--strategy)
   - [4. CAREER (Applications & Assets)](#4-career-applications--assets)
   - [5. HEALTH (Sustained Performance)](#5-health-sustained-performance)
   - [6. Gamification & System Terminal](#6-gamification--system-terminal)
   - [7. Security & Privacy](#7-security--privacy)
3. [Cloud Sync: Phone ↔ Laptop Syncing Guide](#cloud-sync-phone--laptop-syncing-guide)
   - [How the Cloud Sync Works](#how-the-cloud-sync-works)
   - [Why Your Phone and Laptop Are Not Syncing](#why-your-phone-and-laptop-are-not-syncing)
   - [Step-by-Step Fix to Connect Phone and Laptop](#step-by-step-fix-to-connect-phone-and-laptop)
   - [Manual Backups & Failsafes](#manual-backups--failsafes)
4. [How to Update Schedules, Subjects & Code Fixes](#how-to-update-schedules-subjects--code-fixes)
   - [1. Updating Daily Timetable and Schedule](#1-updating-daily-timetable-and-schedule)
   - [2. Updating Subjects, Credits, and Syllabus](#2-updating-subjects-credits-and-syllabus)
   - [3. Updating Quant Targets and Projects](#3-updating-quant-targets-and-projects)
   - [4. Applying Code Fixes and Service Worker Cache Busting](#4-applying-code-fixes-and-service-worker-cache-busting)
   - [5. State Migration Pattern (`hydrateState`)](#5-state-migration-pattern-hydratestate)
5. [Starting Next Development Phase](#starting-next-development-phase)

---

## 🏛 System Architecture Overview

The entire system is architected to run anywhere with zero hosting overhead:
- **Frontend / Monolith**: Single HTML/JS/CSS file (`index.html`) containing the UI layout, business logic, state machines, and styling.
- **Client Storage**: `localStorage` as primary fast store, backed up by `indexedDB` (`abhi_os_db`).
- **Cloud Backend**: Serverless via **GitHub Gists API**. A single private GitHub Gist stores `state.json`, `resume.json`, and `prefs.json`.
- **PWA / Service Worker**: `sw.js` handles offline asset caching (`os-dashboard-v11`), background checks, push notification handlers, and periodic sync.
- **Installable**: Full mobile and desktop PWA support via `manifest.json`.

---

## 🌟 Complete Feature Breakdown

### 1. HQ (Command Center)
- **⚡ Today Dashboard**:
  - Live clock with seconds, date, semester badge, and dynamic rank badge (E-Rank through S-Rank / Monarch).
  - Active class / slot indicator showing remaining minutes and current subject.
  - Daily quest checklist (morning run, Codeforces problem, LeetCode, textbook reading, C++ systems code, recall notes).
  - XP progress bar and daily goal progress tracking.
- **⏰ Daily Matrix (Timetable)**:
  - Complete Monday–Sunday timetable tailored to Semester 3 AIE.
  - Direct integration with period timings (P1–P8: 08:25 AM to 04:10 PM) and evening deep-work study blocks.
  - One-click task completion checkboxes with real-time XP awarding.
  - "Schedule Exemption Mode" toggle for study holidays and special schedules.
- **📊 Weekly Audit**:
  - Weekly review system for logging attendance, study hours, problem solve count, and qualitative retrospective.
  - Audit history archive with performance metrics and mentor synchronization checklist.
- **🗺 Systems Roadmap**:
  - 4-phase strategic career progression:
    - **Phase 1**: Systems Internals & C++ Pivot (Months 1–6 · Sem 3). Focus: C++17/20, POSIX, custom web server, CS50 AI.
    - **Phase 2**: Algorithmic Complexity & Edge-AI Optimization (Months 7–12 · Sem 4). Focus: DP, TensorRT, low-latency order-matching engine.
    - **Phase 3**: Hardware-Level Concurrency & Advanced Finance (Months 13–18 · Sem 5). Focus: Cache lines, lock-free queues, shared memory IPC.
    - **Phase 4**: Quant Funnel Execution (Months 19+ · Sem 6). Focus: Graviton / Tower / QuadEye / WorldQuant OA loops.
- **📚 Semester 3 Academic Manager**:
  - Subject cards with priority classifications (`Critical`, `High`, `Medium`, `Routine`).
  - Course codes (22AIE201, 22AIE202, 22AIE203, 22AIE204, 22MAT220, etc.).
  - Recommended textbooks and core exam strategies.
- **📅 Academic Calendar**:
  - Semester milestone timeline: Midterms, End-sems, Hackathons, Project submission deadlines.
  - Custom calendar event creation and countdown timers.

---

### 2. GRIND (Technical Execution)
- **🧩 DSA Track**:
  - Problem logging counter: Easy, Medium, Hard breakdown.
  - LeetCode & Codeforces submission history with timestamps, difficulty tags, and solution notes.
  - Codeforces rating tracker aiming for Specialist (1600+) and Candidate Master (1900+).
- **🛠 Projects Hub**:
  - Project management cards with progress bars and task lists:
    1. **System: Engineer**: Flutter gamification application (Solo Leveling inspired).
    2. **Satyam News**: Media platform with ePaper backend in PostgreSQL.
    3. **AeroSynapse**: High-performance DeepStream + TensorRT computer vision pipeline running at 150+ FPS.
- **⚔️ Missions**:
  - **Daily Missions**: Focused daily micro-targets (e.g., Solve 1 Codeforces problem, write C++ systems code, read 1 OS chapter).
  - **Long-term Missions**: Crucial career milestones with hard deadlines (e.g., Ship C++ matching engine, hit 1600+ CF rating, submit 10 WorldQuant BRAIN alphas).

---

### 3. INTEL (Quant Funnel & Strategy)
- **🎯 Quant Funnel**:
  - Breakdown of high-frequency trading (HFT) and quantitative finance firms:
    - *Dream / Reach*: Jane Street, Citadel / Citadel Securities, Optiver, Two Sigma, HRT.
    - *Strong Target*: Jump Trading, D. E. Shaw, IMC, Akuna, SIG, Tower Research.
    - *India Entry (Primary focus)*: Graviton Research Capital (₹80L–1.2 Cr), WorldQuant BRAIN (₹20–50 LPA), Tower Research India (₹50–90 LPA), QuadEye (₹75L–1.2 Cr), Millennium.
    - *Floor / Fallback*: Flipkart / Swiggy low-latency infra (₹18–40 LPA), Fintech infra (PhonePe, Razorpay, Cred).
  - Skills gap analysis: "Already in stack" vs "The actual quant bar" vs "Close by Sem 6".
- **🎮 Gaming Budget & Balance**:
  - Structured mental maintenance policy (4 hours/week budget, strictly earned on Friday and Sunday evenings).
  - Strict non-negotiable rules: gaming only allowed after all daily LeetCode/Codeforces and study blocks are 100% complete.
- **📝 Engineering Notes**:
  - Tabbed markdown-style notepad organized by core subjects: AI, Operating Systems, DSA 2, Math 3, Computer Networks, and Misc Ideas.
  - Instant auto-save to local and cloud storage.

---

### 4. CAREER (Applications & Assets)
- **💼 Applications Tracker**:
  - Kanban / Status board for internship and job pipelines (`Drafting`, `Applied`, `OA / Test`, `Interviewing`, `Offer`, `Rejected`).
  - Pre-seeded with Graviton, WorldQuant, Tower Research India, QuadEye, and D. E. Shaw.
- **💳 Personal Budget**:
  - Categorized monthly expense tracking: Food, Transport, Entertainment, Study, Trips, Outings, Monthly, and Misc.
  - Balance overview, expense logging, and spending warnings.
- **✈️ Trips Manager**:
  - Trip planner for travel and conferences: itineraries, packing lists, checklists, and budget allocation.
- **📄 Interactive Resume**:
  - Built-in, clean, ATS-friendly resume builder pre-populated with technical skills, projects, and education.
  - Supports live editing and instant browser PDF export.

---

### 5. HEALTH (Sustained Performance)
- **🤸 Daily Routine**:
  - Circadian rhythm and habit tracking: 05:30 AM 2.5 km running block, hydration, deep study slots, wind-down routine.
- **🩺 Physical Metrics**:
  - Logs for running distances, weights, sleep duration, and physical fitness milestones.
- **🧠 Mental State & Burnout Guard**:
  - Daily subjective reflection, stress tracking, cognitive load monitor, and focus ratings.

---

### 6. Gamification & System Terminal
- **Hunter Ranking System**:
  - Solo Leveling theme: Progression through E-Rank, D-Rank, C-Rank, B-Rank, A-Rank, S-Rank, and Monarch.
  - Real-time XP calculation based on completed tasks, DSA solves, and project commits.
  - **Streak Multiplier**: Daily streak counter with fire animation; boosts XP gain for consistent daily execution.
  - **Prestige Mechanism**: Allows resetting rank after hitting level caps in exchange for permanent account multipliers.
- **HUD System Console (Terminal)**:
  - Command-line prompt at the bottom of the sidebar.
  - Supports quick commands: `/help`, logging DSA, toggling sound effects, viewing stats, and switching color themes.
- **Pomodoro Timer & Ambient SFX**:
  - Integrated Pomodoro focus timer with customizable work/break intervals and synthesised sine-wave chimes.
  - Audio toggle for subtle gamified UI sound effects.

---

### 7. Security & Privacy
- **AES-GCM 256-bit + PBKDF2 PIN Lock**:
  - Optional security PIN encrypts the entire state blob (`localStorage.getItem('abhi_os_enc')`) with 140,000 PBKDF2 iterations.
  - Prevents anyone from inspecting personal notes, career pipelines, or financial logs without the PIN.

---

## ☁️ Cloud Sync: Phone ↔ Laptop Syncing Guide

### How the Cloud Sync Works
The app does **not** rely on a third-party hosted database server. Instead, it utilizes **GitHub's Gist API** as a private, secure cloud data store:
1. When you trigger **"Push to Cloud"**, the app takes your current state (`state.json`), your resume (`resume.json`), and preferences (`prefs.json`), and uploads them to a private GitHub Gist in your GitHub account using your **Personal Access Token (PAT)**.
2. When you trigger **"Pull from Cloud"** (or when the app starts with Auto-Sync enabled), it fetches the latest `state.json` from that exact Gist ID.
3. If the remote cloud data is newer than your device data, the local app updates and refreshes with your latest changes.

---

### Why Your Phone and Laptop Are Not Syncing
If your phone and laptop have different data or are not syncing with each other, it is almost always caused by one of these **5 common reasons**:

1. **Different Gist IDs on Phone vs Laptop (Most Common)**:
   - When you click "Push to Cloud" on your laptop with an empty Gist ID field, GitHub generates a *new* Gist ID (e.g. `a1b2c3d4...`).
   - If you later open your phone and click "Push to Cloud" with an empty Gist ID field, GitHub generates a **second, completely different Gist**!
   - Result: Your laptop is pushing to Gist #1, while your phone is pushing to Gist #2. They are isolated and will never sync.
2. **Missing Token or Gist ID on the Phone**:
   - Because `localStorage` is unique to each device's browser, entering your GitHub Token on your laptop does **not** automatically make it available on your phone.
   - You must manually input your GitHub Token and Gist ID once on your phone in **Settings ⚙️**.
3. **Session Discard on Mobile PWA ("Remember Token" unchecked)**:
   - Mobile browsers (especially iOS Safari and Android Chrome PWAs) clear `sessionStorage` whenever the PWA is closed.
   - If "Remember Token" was not enabled, the token was deleted on app close, causing auto-sync to silently fail on subsequent launches.
4. **"Enable Auto Sync" Is Unchecked**:
   - If "Enable Auto Sync" is unchecked on either the phone or laptop, the app will not push or pull automatically when changes are made.
5. **Personal Access Token Expired or Lacks 'gist' Scope**:
   - GitHub PATs expire unless configured otherwise. If the token lacks the `gist` permission, GitHub returns `401 Unauthorized` or `404 Not Found` when trying to update.

---

### Step-by-Step Fix to Connect Phone and Laptop

Follow this exact 2-minute procedure to link both devices to the same cloud state:

#### Step 1: Prepare Your GitHub Personal Access Token (PAT)
1. Go to [GitHub Settings → Developer Settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens).
2. Click **Generate new token (classic)**.
3. Name it `OS-Dashboard-Sync`.
4. Expiration: Select **No expiration** (or 1 year).
5. Under scopes, check **`gist`** (Create gists).
6. Click **Generate token** and copy the string (starts with `ghp_...`).

#### Step 2: Establish the Primary Gist on Your Laptop (or Device with Latest Data)
1. Open the dashboard on your laptop.
2. Open **Settings ⚙️** (top navigation bar).
3. Under **1. Private Cloud Sync (GitHub Gist)**:
   - Paste your GitHub PAT into **GitHub Token**.
   - Check **Enable Auto Sync**.
   - Check **Remember Token on this device**.
   - **Leave the Gist ID field blank**.
4. Click **Push to Cloud**.
5. Wait for the green notification: `Cloud Sync Successful! ☁️`.
6. Look at the **Gist ID** field — it will now be populated with an alphanumeric string (e.g., `8f7b3a9c02d1e4...`).
7. **Copy this Gist ID** (send it to your phone via WhatsApp, Notes, or email).
8. Click **Save Settings**.

#### Step 3: Link Your Phone
1. Open the dashboard in your phone's browser or installed PWA.
2. Open **Settings ⚙️**.
3. In **GitHub Token**, paste the exact same `ghp_...` token from Step 1.
4. In **Gist ID**, paste the **exact same Gist ID** copied from your laptop in Step 2.
5. Check **Enable Auto Sync** and check **Remember Token**.
6. Click **Save Settings**.
7. Now click **Pull from Cloud**.
8. The phone will display `State updated from cloud! Reloading...` and reload with your complete, up-to-date laptop data!

> [!TIP]
> **Daily Routine for Seamless Sync**:
> With "Enable Auto Sync" turned on, changes you make on one device will automatically push to the Gist within 3 seconds. When you open the second device, it pulls the latest Gist automatically on launch. If you just made edits on your phone and immediately switch to your laptop, simply click the **Cloud Sync (Pull)** icon or open Settings and click **Pull from Cloud**.

---

### Manual Backups & Failsafes
If you are ever in an area with poor internet connectivity or want to migrate data without GitHub:
- **Backup Data (JSON)**: Go to Settings → Click **Backup Data (JSON)** to download a complete export of your history, LeetCode logs, and XP.
- **Restore Data (JSON)**: Click **Restore Data (JSON)** and select your `.json` file to restore your entire state instantly.
- **Pre-Sync Snapshot**: Every time a cloud pull overwrites your local state, the system automatically creates a local snapshot. If a sync ever replaces local data you needed, click **↩️ Restore Pre-Sync Snapshot** in Settings.

---

## 🛠 How to Update Schedules, Subjects & Code Fixes

All dashboard configurations and default data structures are embedded cleanly in `index.html`. You can customize and maintain your app with the following patterns:

### 1. Updating Daily Timetable and Schedule
Find the `DEFAULT_SCHEDULE` object in `index.html` (approx. line 3898). Each day of the week (`Monday` through `Sunday`) contains an array of slot objects:

```javascript
{
  t: '08:25–09:15',                               // Slot time string
  n: '22AIE204 Computer Networks',               // Subject / Title
  d: 'P1 — Computer Networks lecture',           // Description
  tags: ['blue'],                                // Color tag: 'blue', 'green', 'red', 'yellow', 'mauve'
  xp: 15,                                        // XP awarded on completion
  id: 'mon-0'                                    // Unique slot ID
}
```

To adjust lecture timings, swap classes, or add new study blocks:
1. Edit the timing `t`, name `n`, or description `d` directly in `index.html`.
2. Ensure each slot has a unique `id` (e.g. `mon-7`, `fri-4`).

---

### 2. Updating Subjects, Credits, and Syllabus
Find `DEFAULT_SUBJECTS` in `index.html` (approx. line 4060):

```javascript
{
  name: 'Operating Systems',
  code: '22AIE202 — processes, scheduling, memory, synchronization',
  pri: 'Critical',                               // 'Critical' | 'High' | 'Medium' | 'Routine'
  pclass: 'pri-c',                               // CSS class: 'pri-c', 'pri-h', 'pri-m', 'pri-l'
  res: 'Silberschatz (Dinosaur Book) + CodeVault YouTube',
  res2: 'Trace scheduling + memory on paper — Graviton / Tower / HRT test this'
}
```

When progressing to Semester 4 or new electives, replace or update these items to match your new course catalog.

---

### 3. Updating Quant Targets and Projects
- **HFT / Quant Funnel**: Configured in `DEFAULT_TARGETS` (approx. line 4115). Modify CTC bands, office locations, required skillsets, or add newly discovered quant firms.
- **Active Projects**: Configured in `DEFAULT_PROJECTS` (approx. line 4072). Add progress percentages, status tags, and checklists for personal builds.
- **Applications Board**: Configured in `DEFAULT_APPLICATIONS` (approx. line 4301). Tracks active application stages for Graviton, Tower, QuadEye, WorldQuant, etc.

---

### 4. Applying Code Fixes and Service Worker Cache Busting
When you modify `index.html`, browsers and mobile PWAs may continue serving the old version from cache unless the service worker cache is incremented.

Always update `sw.js` when pushing code changes:
1. Open `sw.js`.
2. Increment `CACHE_NAME` on line 1:
   ```javascript
   // Change from:
   const CACHE_NAME = 'os-dashboard-v11';
   // To:
   const CACHE_NAME = 'os-dashboard-v12';
   ```
3. When the dashboard is reopened, the Service Worker will detect the change, download the new `index.html`, claim clients, and immediately activate the updated code.

---

### 5. State Migration Pattern (`hydrateState`)
The app uses an in-place hydration pattern in `index.html` (`hydrateState()`, approx. line 4353).
If you introduce a brand-new state property (e.g. `S.newFeature = ...`), always supply a fallback in `hydrateState()`:

```javascript
function hydrateState() {
  if (!S.profile) S.profile = Object.assign({}, DEFAULT_PROFILE);
  if (!S.schedule) S.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));
  // Add your new field fallback here:
  if (!S.myNewFeature) S.myNewFeature = [];
  ...
}
```
This ensures existing user profiles in `localStorage` do not crash when new features are deployed.

---

## 🚀 Starting Next Development Phase

When continuing in a new conversation, the workspace is fully documented and structured:
- **Current Core File**: `index.html` (Complete UI, state logic, and styles)
- **Offline / PWA Engine**: `sw.js` & `manifest.json`
- **Application Icons**: `icons/icon-192.png`, `icons/icon-512.png`

You can prompt your next agent with specific tasks such as:
- *"Update the Semester 3 schedule with my new timetable changes."*
- *"Add a new Quant firm card or revamp the DSA tracker."*
- *"Refactor the Gist auto-sync logic or add offline conflict merges."*

All state definitions, sync behaviors, and feature sets are ready for seamless extension.
