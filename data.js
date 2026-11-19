/**
 * System: Abhishikth — OS Dashboard Data Layer
 * Contains default seed state, schedules, courses, projects, and calendar events.
 * Loaded synchronously before application runtime.
 */

// START_DEFAULTS
const DEFAULT_PROFILE = { name: "Abhishikth", branch: "AIE · Amrita Chennai · Room AB-302", sem: "SEM 4" };
const DEFAULT_SCHEDULE = {
  Monday:[
    {t:'05:30–05:45',n:'💧 Wake + Hydration',d:'250–300 ml lightly salted water; no coffee/tea yet',tags:['green'],xp:10,id:'mon-wake'},
    {t:'05:45–06:30',n:'🏃 Morning Run #1 (2.5–3 km) + Pushups',d:'Hybrid Split: Run Day 1/3 · 2.5–3 km run + 30–50 pushups',tags:['green'],xp:25,id:'mon-run'},
    {t:'06:30–07:30',n:'🚿 Shower + AM Dermatology',d:'AM wash, prescribed topical, moisturizer + SPF',tags:['mauve'],xp:15,id:'mon-derm-am'},
    {t:'07:30–08:15',n:'🍳 Breakfast + AM Tablet',d:'Whole-food breakfast, post-meal tablet, head to AB-302',tags:['mauve'],xp:15,id:'mon-bfast'},
    {t:'08:25–10:05',n:'22AIE213 Machine Learning (AI-DISC Lab)',d:'P1 & P2 — Dr. G. Bharathi Mohan / Dr. E. Narayanan · Finish lab work inside window',tags:['red'],xp:25,id:'mon-p1-p2'},
    {t:'10:20–12:00',n:'22AIE212 Design & Analysis of Algorithms (AI-DISC Lab)',d:'P3 & P4 — Dr. E. Narayanan · Master DP/Graphs/Greedy in-lab — zero carry-over',tags:['red'],xp:25,id:'mon-p3-p4'},
    {t:'12:50–13:40',n:'22MAT230 Mathematics for Computing 4',d:'P5 — Room AB-302 · Dr. K. Anitha',tags:['red'],xp:15,id:'mon-p5'},
    {t:'13:40–15:20',n:'22AIE214 Intro to AI Robotics (RACE Lab)',d:'P6 & P7 — Dr. Dev Kunwar Singh Chauhan · Complete robotics lab tasks before walking out',tags:['blue'],xp:25,id:'mon-p6-p7'},
    {t:'15:20–16:10',n:'⚡ P8 Golden Window: Folio Pre-Exam Lock',d:'Compress today ML + DAA + Math 4 notes into Folio MD->PDF before leaving campus',tags:['yellow'],xp:25,id:'mon-p8-folio'},
    {t:'16:10–17:30',n:'🏏 Biological Cooling / Social',d:'Evening cricket, tea with friends, or call home — Cooling Engine',tags:['green'],xp:20,id:'mon-social'},
    {t:'17:30–19:30',n:'🚀 Deep Build Block 1 (2.0h)',d:'Primary product/R&D sprint (AeroSynapse Phase 2 / Alloy Tattvasar)',tags:['red'],xp:35,id:'mon-dw1'},
    {t:'19:30–20:15',n:'🥗 Dinner + Evening Walk',d:'Clean whole-food dinner + short walk',tags:['green'],xp:15,id:'mon-dinner'},
    {t:'20:15–21:30',n:'🧩 Deep Build Block 2: Fundamentals & DSA',d:'DAA / ML problem sets or code cleanup · 1 Codeforces Div2 C/D',tags:['blue'],xp:30,id:'mon-dw2'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Dual-Win Log',d:'Night cream, PM tablet + <60 sec dashboard & Dual-Win log',tags:['mauve'],xp:20,id:'mon-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, pack bag for AB-302, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'mon-sleep'}
  ],
  Tuesday:[
    {t:'05:30–05:45',n:'💧 Wake + Hydration & Mobility',d:'Salted water + 5 min mobility; zero phone scrolling',tags:['green'],xp:10,id:'tue-wake'},
    {t:'05:45–07:15',n:'⚡ Morning Deep Build Block (1.5h Unbroken)',d:'Peak-freshness block: hardest AeroSynapse / IITM / DAA work before campus wakes up',tags:['red'],xp:40,id:'tue-am-deep'},
    {t:'07:15–07:45',n:'🚿 Shower + AM Dermatology',d:'AM wash, prescribed topical, moisturizer + SPF',tags:['mauve'],xp:15,id:'tue-derm-am'},
    {t:'07:45–08:15',n:'🍳 Breakfast + AM Tablet',d:'Whole-food breakfast + post-meal tablet, head to AB-302',tags:['mauve'],xp:15,id:'tue-bfast'},
    {t:'08:25–09:15',n:'22AIE211 Intro to Communication & IoT',d:'P1 — Room AB-302 — Dr. Jinka Venkata Aravind',tags:['blue'],xp:15,id:'tue-p1'},
    {t:'09:15–10:05',n:'22BIO211 Intelligence of Biological Systems 2',d:'P2 — Room AB-302 — Dr. I. R. Oviya',tags:['yellow'],xp:15,id:'tue-p2'},
    {t:'10:20–11:10',n:'23GER230 German for Beginners I',d:'P3 — Room AB-302 — Ms. T. S. Swathi',tags:['yellow'],xp:15,id:'tue-p3'},
    {t:'11:10–12:00',n:'23ADM211 Leadership Lessons from Ramayana',d:'P4 — Room AB-302 — Dr. S. Thiagarajan · Attend & reflect',tags:['green'],xp:10,id:'tue-p4'},
    {t:'12:50–13:40',n:'22AIE213 Machine Learning',d:'P5 — Room AB-302 — Dr. G. Bharathi Mohan',tags:['red'],xp:15,id:'tue-p5'},
    {t:'13:40–15:20',n:'22MAT230 Mathematics for Computing 4 (Tutorial)',d:'P6 & P7 — Dr. K. Anitha / Dr. B. Krithika (Project/Tutorial)',tags:['red'],xp:25,id:'tue-p6-p7'},
    {t:'15:20–16:00',n:'🍎 Pre-Gym Fuel + Quick Folio Review',d:'Light pre-workout fuel + quick 15m review of today\'s notes',tags:['yellow'],xp:15,id:'tue-fuel'},
    {t:'16:00–17:15',n:'🏋️ Afternoon GYM Session #1 (Pull: Back & Biceps)',d:'Hybrid Split: Gym Day 1/3 · Strength & Hypertrophy + post-workout shower',tags:['green'],xp:30,id:'tue-gym'},
    {t:'17:15–18:15',n:'🌿 Recovery Snack + Social Cooling',d:'Protein fuel + unhurried hang with friends / family call — Cooling Engine',tags:['green'],xp:20,id:'tue-social'},
    {t:'18:15–19:30',n:'🚀 Deep Build Block 2 (1h 15m)',d:'Lighter engineering tasks, UI polish, or coursework prep',tags:['blue'],xp:25,id:'tue-dw2'},
    {t:'19:30–20:15',n:'🥗 Dinner + Walk',d:'High-protein whole-food dinner + evening walk',tags:['green'],xp:15,id:'tue-dinner'},
    {t:'20:15–21:30',n:'🧩 Deep Build Block 3: Review & Folio Lock',d:'Concept review, Folio lock, or tomorrow\'s class prep',tags:['blue'],xp:25,id:'tue-dw3'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Dual-Win Log',d:'Night cream, PM tablet + <60 sec dashboard & Dual-Win log',tags:['mauve'],xp:20,id:'tue-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'tue-sleep'}
  ],
  Wednesday:[
    {t:'05:30–05:45',n:'💧 Wake + Hydration',d:'250–300 ml lightly salted water; no coffee/tea yet',tags:['green'],xp:10,id:'wed-wake'},
    {t:'05:45–06:30',n:'🏃 Morning Run #2 (2.5–3 km) + Core',d:'Hybrid Split: Run Day 2/3 · Cardiovascular endurance & core',tags:['green'],xp:25,id:'wed-run'},
    {t:'06:30–07:30',n:'🚿 Shower + AM Dermatology',d:'AM wash, prescribed topical, moisturizer + SPF',tags:['mauve'],xp:15,id:'wed-derm-am'},
    {t:'07:30–08:15',n:'🍳 Breakfast + AM Tablet',d:'Whole-food breakfast + post-meal tablet, head to AB-302',tags:['mauve'],xp:15,id:'wed-bfast'},
    {t:'08:25–09:15',n:'22MAT230 Mathematics for Computing 4',d:'P1 — Room AB-302 — Dr. K. Anitha',tags:['red'],xp:15,id:'wed-p1'},
    {t:'09:15–10:05',n:'22AIE214 Intro to AI Robotics',d:'P2 — Room AB-302 — Dr. Dev Kunwar Singh Chauhan',tags:['blue'],xp:15,id:'wed-p2'},
    {t:'10:20–12:00',n:'CARE Placement Training',d:'P3 & P4 — Dr. J. Umamageswaran · Solve timed DSA/OA problems during session',tags:['green'],xp:20,id:'wed-p3-p4'},
    {t:'12:50–13:40',n:'22AIE212 Design & Analysis of Algorithms',d:'P5 — Room AB-302 — Dr. E. Narayanan',tags:['red'],xp:15,id:'wed-p5'},
    {t:'13:40–15:20',n:'22AIE211 Intro to Comm & IoT (AI-DISC Lab)',d:'P6 & P7 — Dr. Jinka Venkata Aravind / Dr. S. Krishnakumar · Finish in-lab',tags:['blue'],xp:25,id:'wed-p6-p7'},
    {t:'15:20–16:10',n:'⚡ P8 Golden Window: Folio Pre-Exam Lock',d:'Update DAA & Math 4 Folio study sheets before leaving campus',tags:['yellow'],xp:25,id:'wed-p8-folio'},
    {t:'16:10–17:30',n:'🏏 Biological Cooling / Social',d:'Evening cricket, tea with friends, or call home — Cooling Engine',tags:['green'],xp:20,id:'wed-social'},
    {t:'17:30–19:30',n:'🚀 Deep Build Block 1 (2.0h)',d:'AeroSynapse Phase 2 tracking or Alloy Tattvasar IITM pipeline',tags:['red'],xp:35,id:'wed-dw1'},
    {t:'19:30–20:15',n:'🥗 Dinner + Walk',d:'Clean whole-food dinner + short walk',tags:['green'],xp:15,id:'wed-dinner'},
    {t:'20:15–21:30',n:'🧩 Deep Build Block 2: Quant & Algorithms',d:'DAA algorithmic implementation + Codeforces Div2 C/D practice',tags:['blue'],xp:30,id:'wed-dw2'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Dual-Win Log',d:'Night cream, PM tablet + <60 sec dashboard & Dual-Win log',tags:['mauve'],xp:20,id:'wed-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, pack bag, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'wed-sleep'}
  ],
  Thursday:[
    {t:'05:30–05:45',n:'💧 Wake + Hydration & Mobility',d:'Salted water + 5 min mobility; zero phone scrolling',tags:['green'],xp:10,id:'thu-wake'},
    {t:'05:45–07:15',n:'⚡ Morning Deep Build Block (1.5h Unbroken)',d:'Peak-freshness block: hardest AeroSynapse / IITM / DAA work before campus wakes up',tags:['red'],xp:40,id:'thu-am-deep'},
    {t:'07:15–07:45',n:'🚿 Shower + AM Dermatology',d:'AM wash, prescribed topical, moisturizer + SPF',tags:['mauve'],xp:15,id:'thu-derm-am'},
    {t:'07:45–08:15',n:'🍳 Breakfast + AM Tablet',d:'Whole-food breakfast + post-meal tablet, head to AB-302',tags:['mauve'],xp:15,id:'thu-bfast'},
    {t:'08:25–09:15',n:'22AIE213 Machine Learning',d:'P1 — Room AB-302 — Dr. G. Bharathi Mohan',tags:['red'],xp:15,id:'thu-p1'},
    {t:'09:15–12:00',n:'19SSK211 Soft Skills I (APT/VER/SSK Rotation)',d:'P2-P4 — Treat APT as timed Quant speed-math drills',tags:['green'],xp:25,id:'thu-p2-p4'},
    {t:'12:50–13:40',n:'22AIE211 Intro to Communication & IoT',d:'P5 — Room AB-302 — Dr. Jinka Venkata Aravind',tags:['blue'],xp:15,id:'thu-p5'},
    {t:'13:40–15:20',n:'22AIE214 Intro to AI Robotics (RACE Lab)',d:'P6 & P7 — Dr. Dev Kunwar Singh Chauhan · Complete in-lab, zero carry-over',tags:['blue'],xp:25,id:'thu-p6-p7'},
    {t:'15:20–16:00',n:'🍎 Pre-Gym Fuel + Quick Folio Review',d:'Light pre-workout fuel + quick 15m review of today\'s notes',tags:['yellow'],xp:15,id:'thu-fuel'},
    {t:'16:00–17:15',n:'🏋️ Afternoon GYM Session #2 (Push: Chest, Delts & Triceps)',d:'Hybrid Split: Gym Day 2/3 · Strength & Hypertrophy + post-workout shower',tags:['green'],xp:30,id:'thu-gym'},
    {t:'17:15–18:15',n:'🌿 Recovery Snack + Social Cooling',d:'Protein fuel + unhurried hang with friends / family call — Cooling Engine',tags:['green'],xp:20,id:'thu-social'},
    {t:'18:15–19:30',n:'🚀 Deep Build Block 2 (1h 15m)',d:'Lighter engineering tasks, UI polish, or coursework prep',tags:['blue'],xp:25,id:'thu-dw2'},
    {t:'19:30–20:15',n:'🥗 Dinner + Walk',d:'High-protein whole-food dinner + evening walk',tags:['green'],xp:15,id:'thu-dinner'},
    {t:'20:15–21:30',n:'🧩 Deep Build Block 3: Codeforces & Review',d:'Codeforces problem set + C++ systems practice',tags:['blue'],xp:25,id:'thu-dw3'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Dual-Win Log',d:'Night cream, PM tablet + <60 sec dashboard & Dual-Win log',tags:['mauve'],xp:20,id:'thu-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'thu-sleep'}
  ],
  Friday:[
    {t:'05:30–05:45',n:'💧 Wake + Hydration',d:'250–300 ml lightly salted water; no coffee/tea yet',tags:['green'],xp:10,id:'fri-wake'},
    {t:'05:45–06:30',n:'🏃 Morning Run #3 (3.0 km Tempo) + Pushups',d:'Hybrid Split: Run Day 3/3 · Complete weekly running quota + 30–50 pushups',tags:['green'],xp:25,id:'fri-run'},
    {t:'06:30–07:30',n:'🚿 Shower + AM Dermatology',d:'AM wash, prescribed topical, moisturizer + SPF',tags:['mauve'],xp:15,id:'fri-derm-am'},
    {t:'07:30–08:15',n:'🍳 Breakfast + AM Tablet',d:'Whole-food breakfast + post-meal tablet, head to AB-302',tags:['mauve'],xp:15,id:'fri-bfast'},
    {t:'08:25–09:15',n:'22AIE212 Design & Analysis of Algorithms',d:'P1 — Room AB-302 — Dr. E. Narayanan',tags:['red'],xp:15,id:'fri-p1'},
    {t:'09:15–10:05',n:'22AIE214 Intro to AI Robotics',d:'P2 — Room AB-302 — Dr. Dev Kunwar Singh Chauhan',tags:['blue'],xp:15,id:'fri-p2'},
    {t:'10:20–11:10',n:'19ENV300 Environmental Science',d:'P3 — Room AB-302 — Dr. I. R. Oviya · Pass/Fail, complete inside class',tags:['green'],xp:10,id:'fri-p3'},
    {t:'11:10–12:00',n:'22MAT230 Mathematics for Computing 4',d:'P4 — Room AB-302 — Dr. K. Anitha',tags:['red'],xp:15,id:'fri-p4'},
    {t:'12:50–13:40',n:'23GER230 German for Beginners I',d:'P5 — Room AB-302 — Ms. T. S. Swathi',tags:['yellow'],xp:15,id:'fri-p5'},
    {t:'13:40–15:20',n:'22BIO211 Bio Systems 2 (AI-DISC Lab)',d:'P6 & P7 — Dr. I. R. Oviya / Mr. R. Ruban · Finish lab inside lab window',tags:['yellow'],xp:25,id:'fri-p6-p7'},
    {t:'15:20–16:10',n:'⚡ P8 Golden Window: Weekly Academic Wrap',d:'Ensure all 5-day Folio notes compiled — zero weekend academic backlog',tags:['yellow'],xp:30,id:'fri-p8-folio'},
    {t:'16:10–17:30',n:'🏏 Biological Cooling / Social',d:'Evening cricket, tea with friends, or call home — Cooling Engine',tags:['green'],xp:20,id:'fri-social'},
    {t:'17:30–19:30',n:'🚀 Deep Build Block 1 (2.0h)',d:'AeroSynapse Phase 2 or Alloy Tattvasar weekly milestone push',tags:['red'],xp:35,id:'fri-dw1'},
    {t:'19:30–20:15',n:'🥗 Dinner + Walk',d:'Clean whole-food dinner + short walk',tags:['green'],xp:15,id:'fri-dinner'},
    {t:'20:15–21:30',n:'🌿 Friday Night Decompression & Social',d:'Zero-guilt hangout, friends, or movie',tags:['green'],xp:25,id:'fri-recharge'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Dual-Win Log',d:'Night cream, PM tablet + <60 sec dashboard & Dual-Win log',tags:['mauve'],xp:20,id:'fri-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'fri-sleep'}
  ],
  Saturday:[
    {t:'05:30–06:00',n:'💧 Wake + Hydration & Mobility',d:'Salted water + mobility warm-up; zero phone scrolling',tags:['green'],xp:10,id:'sat-wake'},
    {t:'06:00–09:00',n:'🚀 Morning Deep Build Marathon (3.0h)',d:'DeepTech / AeroSynapse model optimization & C++ systems',tags:['red'],xp:50,id:'sat-dw1'},
    {t:'09:00–10:00',n:'🍳 Breakfast + AM Dermatology & Tablet Protocol',d:'Whole-food breakfast, skincare, PM/AM tablet stock check',tags:['mauve'],xp:15,id:'sat-derm-am'},
    {t:'10:00–12:30',n:'🧩 Systems Architecture & DSA / LeetCode / CF',d:'C++ low-latency concurrency & timed competitive programming',tags:['blue'],xp:35,id:'sat-dsa'},
    {t:'12:30–14:00',n:'🥗 Lunch + Rest / Nap',d:'Clean high-protein lunch + 30m CNS recovery rest',tags:['green'],xp:15,id:'sat-lunch'},
    {t:'14:00–15:30',n:'📚 Pre-Exam Unit Check & Math 4 Project',d:'Mark completed Unit Readiness pills across all Sem 4 subjects',tags:['yellow'],xp:25,id:'sat-acad'},
    {t:'16:00–17:15',n:'🏋️ Afternoon GYM Session #3 (Legs & Core)',d:'Hybrid Split: Gym Day 3/3 · Complete 6/6 weekly athletic split!',tags:['green'],xp:30,id:'sat-gym'},
    {t:'17:15–19:30',n:'🌿 Social Cooling, Cricket & Friends Hangout',d:'Unhurried hangout, cricket, long phone catch-up with family or Ameya',tags:['green'],xp:25,id:'sat-social'},
    {t:'19:30–20:30',n:'🥗 Dinner + Walk',d:'High-protein dinner + evening walk',tags:['green'],xp:15,id:'sat-dinner'},
    {t:'20:30–21:30',n:'💻 Lightweight Build / Folio sweep',d:'Review code, cleanup repos, or read technical blogs',tags:['blue'],xp:20,id:'sat-dw2'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Dual-Win Log',d:'Night cream, PM tablet + <60 sec dashboard & Dual-Win log',tags:['mauve'],xp:20,id:'sat-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'sat-sleep'}
  ],
  Sunday:[
    {t:'05:30–06:15',n:'🚶 Wake + Easy Walk & Fresh Air',d:'Salted water + relaxed outdoor walk/stretching (zero running/weights)',tags:['green'],xp:15,id:'sun-wake'},
    {t:'06:15–07:30',n:'🧴 AM Dermatology + Relaxed Breakfast',d:'Slow morning, AM skincare/tablets, unhurried breakfast',tags:['mauve'],xp:15,id:'sun-derm-am'},
    {t:'07:30–09:30',n:'📊 Weekly Audit + Folio Sweep',d:'Clear any leftover Sem 4 notes, check Bunk Shield, plan the week',tags:['yellow'],xp:30,id:'sun-audit'},
    {t:'09:30–12:30',n:'💡 Open Slot (Passion Building or Upsolving)',d:'Optional fun building, reading, or pure downtime',tags:['blue'],xp:25,id:'sun-open'},
    {t:'12:30–14:00',n:'🥗 Lunch + Recovery Nap',d:'Proper lunch + 30–45 min CNS recovery nap',tags:['green'],xp:15,id:'sun-lunch'},
    {t:'14:00–19:30',n:'🌿 Circle & Decompression',d:'Friends, family/wedding calls, cricket, movies, errands',tags:['green'],xp:30,id:'sun-social'},
    {t:'19:30–20:30',n:'🥗 Dinner + Evening Walk',d:'Clean dinner + reset for the week ahead',tags:['green'],xp:15,id:'sun-dinner'},
    {t:'20:30–21:30',n:'🎒 Monday Prep',d:'Pack bag for AI-DISC / RACE labs, review Monday\'s top 3 tasks',tags:['yellow'],xp:20,id:'sun-prep'},
    {t:'21:30–22:00',n:'🌙 PM Dermatology + OS Log',d:'Night cream, PM tablet + <60 sec dashboard log',tags:['mauve'],xp:20,id:'sun-derm-pm'},
    {t:'22:00–22:30',n:'💤 Wind-Down → Lights Out',d:'Grayscale/DND, sleep by 22:30 sharp',tags:['mauve'],xp:15,id:'sun-sleep'}
  ]
};
const DEFAULT_QUESTS = [
  {id:'q-run',text:'Execute your 2.5 km run at 05:30 AM',xp:15},
  {id:'q-cf',text:'Solve 1 Codeforces problem (not LeetCode)',xp:20},
  {id:'q-lc',text:'Log at least 1 Leetcode problem',xp:20},
  {id:'q-read',text:'Read textbook / watch lecture resource',xp:15},
  {id:'q-build',text:'Write or run C++ / systems code today',xp:15},
  {id:'q-notes',text:'Write notes or recall summary',xp:10},
  {id:'q-review',text:'Review one concept from yesterday',xp:10},
];
const DEFAULT_PHASES = [
  {
    n: 1,
    title: 'System Internals & C++ Pivot',
    period: 'Months 1–6 · Sem 3',
    status: '▶ Active',
    learn: [
      'Modern C++ (C++17/20), STL internals, vector/unordered_map/priority_queue memory allocation',
      'POSIX system calls (fork, exec, wait, pipe, mmap), descriptor manipulation, process signals',
      'Custom shell, custom memory graph structures, spatial indexing (Quad-trees, R-trees)',
      'Transport Layer (TCP/UDP mechanisms, sliding window, socket programming)',
      'AI Foundation: CS50’s Introduction to Artificial Intelligence with Python'
    ],
    res: [
      'Silberschatz OS Dinosaur Book + CodeVault YouTube (OS)',
      'Kurose & Ross Computer Networks (CN)',
      'Linux Kernel and POSIX API Documentation',
      'CS50 AI with Python — Harvard (online supplemental course)'
    ],
    stack: ['Modern C++ (C++17/20)', 'POSIX API', 'epoll / select', 'pthread', 'Python / CS50 AI'],
    ms: 'Multi-Threaded HTTP/1.1 Web Server built from scratch in C++ using POSIX sockets, a thread-pool architecture, and non-blocking I/O multiplexing.'
  },
  {
    n: 2,
    title: 'Algorithmic Complexity & Edge-AI Optimization',
    period: 'Months 7–12 · Sem 4',
    status: 'Next up',
    learn: [
      'Dynamic Programming, greedy strategies, network flow, string-matching, graph traversals (Tarjan)',
      'Advanced linear algebra, SVD, LU Decomposition, proximal gradient optimization',
      'Edge AI optimization: ONNX format export, FP32 to INT8 model quantization',
      'NVIDIA TensorRT / Intel OpenVINO runtime performance tracking'
    ],
    res: [
      'CLRS (primary algorithms) + MIT 6.046',
      'Boyd Convex Optimization / linear algebra resources',
      'NVIDIA TensorRT & OpenVINO official docs'
    ],
    stack: ['C++', 'Python', 'ONNX', 'TensorRT', 'OpenVINO'],
    ms: 'Ultra-Low Latency Order-Matching Engine with pre-allocated object pools, achieving zero dynamic memory allocation and O(1) order operations.'
  },
  {
    n: 3,
    title: 'Hardware-Level Concurrency & Advanced Finance Electives',
    period: 'Months 13–18 · Sem 5',
    status: 'Year 3',
    learn: [
      'CPU Cache alignment (L1, L2, L3), sequential memory layouts, false sharing prevention',
      'Advanced concurrency primitives: std::atomic, memory barriers, sequential consistency vs relaxed ordering',
      'Lock-free data structures (single-producer single-consumer queues)',
      'Time Series Analysis (ARMA, ARIMA, ARCH, GARCH) & concurrent programming optimizations'
    ],
    res: [
      'C++ Concurrency in Action (Williams)',
      'Time Series Analysis (Hamilton) + professional elective textbooks'
    ],
    stack: ['C++', 'std::atomic', 'Linux Shared Memory (shm)', 'Time Series'],
    ms: 'High-Performance Shared-Memory IPC Ring Buffer with atomic read/write markers and acquire-release memory fences.'
  },
  {
    n: 4,
    title: 'Quant Funnel Execution',
    period: 'Months 19+ · Sem 6',
    status: 'Elite layer',
    learn: [
      'Graviton / QuadEye / Tower India OA loops: C++ + Codeforces + probability',
      'WorldQuant BRAIN: ship alphas weekly — most open quant door from Amrita',
      'Resume lead: matching engine first, AeroSynapse second',
      'Keep the floor live: Flipkart/Swiggy infra + fintech if the funnel does not convert'
    ],
    res: [
      'Heard on the Street + Fifty Challenging Problems in Probability',
      'Codeforces gym + Graviton/QuadEye mock OAs',
      'WorldQuant BRAIN docs'
    ],
    stack: ['C++', 'Codeforces', 'Probability', 'Microstructure', 'Python'],
    ms: 'Public low-latency C++ matching engine + 1800 CF + BRAIN alphas + India-entry applications filed.'
  }
];
const DEFAULT_SUBJECTS = [
  {sno:1,code:'22MAT230',name:'Mathematics for Computing 4',faculty:'Dr. K. Anitha (T) / Dr. B. Krithika (Prj)',ltp:'2-1-3',credits:4,contactHours:5,pri:'Critical',pclass:'pri-c',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'4-Credit Heavyweight + Project. Lock notes into Folio during P8 same day. Crucial for Quant & ML foundations.'},
  {sno:2,code:'22AIE212',name:'Design and Analysis of Algorithms',faculty:'Dr. E. Narayanan / Ms. G Thiru Venkata Lakshmi (A)',ltp:'2-0-3',credits:3,contactHours:4,pri:'Critical',pclass:'pri-c',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Direct Quant OA & Codeforces overlap. Master DP, Graphs, Greedy & complexity proofs during Monday P3-P4 AI-DISC lab.'},
  {sno:3,code:'22AIE213',name:'Machine Learning',faculty:'Dr. G. Bharathi Mohan / Dr. E. Narayanan (A)',ltp:'2-0-3',credits:3,contactHours:4,pri:'Critical',pclass:'pri-c',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Class Advisor course (Mon P1-P2 AI-DISC Lab + Tue/Thu lectures). Double-dip course project with active AI R&D.'},
  {sno:4,code:'22AIE214',name:'Introduction to AI Robotics',faculty:'Dr. Dev Kunwar Singh Chauhan',ltp:'2-0-3',credits:3,contactHours:6,pri:'High',pclass:'pri-h',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'6 Contact Hours (Mon P6-P7 & Thu P6-P7 RACE Labs + Wed/Fri P2). Never carry robotics lab work into evening R&D blocks.'},
  {sno:5,code:'22AIE211',name:'Introduction to Communication & IoT',faculty:'Dr. Jinka Venkata Aravind / Dr. S. Krishnakumar (A)',ltp:'2-0-3',credits:3,contactHours:4,pri:'High',pclass:'pri-h',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Wed P6-P7 AI-DISC Lab + Tue/Thu lectures. Finish all IoT lab deliverables inside Wednesday lab hours.'},
  {sno:6,code:'22BIO211',name:'Intelligence of Biological Systems 2',faculty:'Dr. I. R. Oviya / Mr. R. Ruban (A)',ltp:'2-0-3',credits:3,contactHours:3,pri:'Medium',pclass:'pri-m',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Tue P2 + Fri P6-P7 AI-DISC Lab. High-scoring 3-credit booster; summarize into Folio sheets 2 weeks before midterms.'},
  {sno:7,code:'23GER230',name:'German for Beginners I',faculty:'Ms. T. S. Swathi',ltp:'2-0-0',credits:2,contactHours:2,pri:'Medium',pclass:'pri-m',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Tue P3 & Fri P5. Quick 15-minute Folio vocab table review locks an easy 10/10 grade.'},
  {sno:8,code:'19SSK211',name:'Soft Skills I (APT / VER / SSK)',faculty:'Mr. E. V. Kamal Prasad (Apt), Ms. B. Gayathri (Ver), Mr. Saptarshi Chatterjee (SSK)',ltp:'1-0-3',credits:2,contactHours:3,pri:'Routine',pclass:'pri-l',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Thursday P2-P4 continuous block. Treat APT sessions as timed Quant speed-math & probability drills.'},
  {sno:9,code:'CARE-PT',name:'Placement Training (CARE)',faculty:'Dr. J. Umamageswaran',ltp:'0-0-2',credits:2,contactHours:2,pri:'Routine',pclass:'pri-l',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Wednesday P3-P4 block (10:20-12:00). Solve competitive DSA/LeetCode problems directly during lab training.'},
  {sno:10,code:'23ADM211',name:'Leadership Lessons from Ramayana',faculty:'Dr. S. Thiagarajan',ltp:'1-0-0',credits:1,contactHours:1,pri:'Routine',pclass:'pri-l',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Tuesday P4 (11:10-12:00). 1 Credit, zero outside workload - attend, reflect, easy A+.'},
  {sno:11,code:'19ENV300',name:'Environmental Science',faculty:'Dr. I. R. Oviya',ltp:'1-0-0',credits:0,contactHours:1,pri:'Routine',pclass:'pri-l',attended:0,totalHeld:0,unitsReady:[0,0,0,0,0],strategy:'Friday P3 (10:20-11:10). Pass/Fail - complete all requirements inside the 50-minute class window.'},
];

// ============================================================
// SEM 4 / v2.0 SUPPLEMENTAL DATA BLOCKS
// ============================================================
const DEFAULT_TELEMETRY_ENGINE = {
  legacyXp: 17018,
  seasonId: 'SEM_4_2026_27',
  seasonName: 'Season 04 - Sem IV (AB-302)',
  seasonRating: 1500,
  attributes: { rndSystems:88, algoQuant:76, academics:94, vitalityDerm:85, coolingBond:82 },
  limiters: {
    weekdayDeepWorkCapHours: 4.5,
    weekendDeepWorkCapHours: 6.5,
    todayDeepWorkLoggedHours: 0,
    weeklyTrainingTarget: { runs:3, gym:3, rest:1 },
    maxConsecutiveGrindDaysWithoutSocial: 3,
    daysSinceLastSocialLog: 0,
    overheatActive: false,
    examOrFieldOverrideMode: false,
    examOverrideDate: ''
  }
};
const DEFAULT_WINS_VAULT = [
  {id:'win-satyam-20k',category:'Commercial & Financial',title:'First Rs.20,000 Commercial Payout at Age 18',date:'2026',metric:'Rs.20,000 Earned',proof:'Independently engineered, deployed, and delivered the Satyam News & ePaper platform end-to-end.',reflection:'Proved I can build production software that real businesses pay for before turning 19.'},
  {id:'win-aerosynapse-hm',category:'High-Stakes R&D',title:'AeroSynapse Deployed for Home Minister Field Testing',date:'2026',metric:'3 Models (1 Prod-Grade)',proof:'Built 3 computer vision detection models and took 1 production-grade pipeline into live Home Minister field testing.',reflection:'Real-world field deployment under VIP scrutiny taught me more than any textbook benchmark ever could.'},
  {id:'win-iitm-tattvasar',category:'Research Excellence',title:'Alloy Tattvasar - IIT Madras Research Project',date:'2026 (Ongoing)',metric:'IITM Collaboration',proof:'Selected and executing applied AI/engineering research on the Alloy Tattvasar project with IIT Madras.',reflection:'Operating at the intersection of deep academic research and practical system execution.'},
  {id:'win-academic-topper',category:'Academic Dominance',title:'Department Academic Topper (9.37 CGPA)',date:'Sem 1-3',metric:'9.37 CGPA',proof:'Sustained top academic rank (9.50 SGPA Sem 1, 9.24 SGPA Sem 2) while shipping commercial and defense/field R&D.',reflection:'Discipline allows me to excel in university exams without sacrificing real-world engineering.'},
  {id:'win-folio-capstones',category:'Tooling & Systems',title:'Built Folio (MD-to-PDF Engine) & 2 Full Capstones',date:'2025-2026',metric:'3 Core Systems Shipped',proof:'Created Folio to automate study/documentation PDFs and completed 2 rigorous academic capstone projects.',reflection:'When a workflow has friction, I build my own tools to solve it.'},
  {id:'win-identity-anchor',category:'Identity & Character',title:'Emotional & Practical Thinker',date:'Core Identity',metric:'Grounded & Driven',proof:'Deeply invested in family, friendships, self-care, and mental clarity alongside high-output engineering.',reflection:'My emotional depth keeps me human and loyal; my practical thinking keeps me effective.'},
];
const DEFAULT_VITALITY_V2 = {
  trainingSplit: {
    weeklyTarget: { runs:3, gym:3, rest:1 },
    scheduleMap: {
      Monday:    {type:'RUN', label:'Morning Run #1 (2.5-3.0 km) + 40 Pushups', done:false},
      Tuesday:   {type:'GYM', label:'Gym #1 - Pull (Back, Biceps, Rear Delts)', done:false},
      Wednesday: {type:'RUN', label:'Morning Run #2 (2.5-3.0 km) + Core', done:false},
      Thursday:  {type:'GYM', label:'Gym #2 - Push (Chest, Shoulders, Triceps)', done:false},
      Friday:    {type:'RUN', label:'Morning Run #3 (3.0 km Tempo) + Pushups', done:false},
      Saturday:  {type:'GYM', label:'Gym #3 - Legs, Compounds & Conditioning', done:false},
      Sunday:    {type:'REST', label:'Mandatory CNS & Muscular Recovery Day', done:false}
    }
  },
  dermatology: {
    nextConsultDate: '2026-12-15',
    adherenceStreakDays: 0,
    amRoutine: [
      {id:'derm-am-wash',   name:'AM Gentle Cleanser / Face Wash',      type:'Wash',    timing:'07:30 AM',         done:false},
      {id:'derm-am-cream',  name:'Prescribed AM Topical Cream / Gel',    type:'Cream',   timing:'After Wash',       done:false},
      {id:'derm-am-spf',    name:'Moisturizer + Sunscreen (SPF 50)',     type:'Protect', timing:'15m before campus', done:false},
      {id:'derm-am-tablet', name:'Prescribed AM Oral Tablet',            type:'Tablet',  timing:'Post-Breakfast',   done:false}
    ],
    pmRoutine: [
      {id:'derm-pm-wash',   name:'PM Cleanser (Post-Campus / Gym)',       type:'Wash',   timing:'10:30 PM',         done:false},
      {id:'derm-pm-cream',  name:'Prescribed PM Active Cream / Ointment', type:'Cream',  timing:'Before Sleep',     done:false},
      {id:'derm-pm-tablet', name:'Prescribed PM Oral Tablet',             type:'Tablet', timing:'Post-Dinner',      done:false}
    ]
  }
};
const DEFAULT_CIRCLE_CHARTER = {
  tenets: [
    'I am both an emotional and a practical thinker - caring deeply for my people and executing with engineering precision are complementary strengths.',
    'I do not move goalposts without honoring what I have already achieved (Rs.20k commercial payout at 18, Home Minister AeroSynapse test, IITM project, 9.37 CGPA).',
    'Spending unhurried time with friends and family is not lost work time - it is the primary cooling system that prevents mental burnout.',
    'Taking care of my health, skin (dermatology regimen), and 3-Run/3-Gym split is an investment in self-respect and longevity.'
  ],
  friendshipTasks: [
    {id:'ft-1', person:'Family', task:'Call home & check in on family / wedding prep updates', priority:'High', done:false},
    {id:'ft-2', person:'Campus Squad', task:'Share Folio PDF summary sheets & spend 1h unhurried evening hangout', priority:'High', done:false},
    {id:'ft-3', person:'Close Friends (Ameya / Inner Circle)', task:'Voice/video catch-up call this weekend', priority:'Medium', done:false}
  ],
  dualWinJournal: []
};
const DEFAULT_MISSIONS = { daily: [{id:"m1", text:"Solve 1 Codeforces problem", done:false, xp:25}, {id:"m2", text:"Write C++ systems code (not DSA-in-C++)", done:false, xp:25}, {id:"m3", text:"Read 1 chapter of OS / probability", done:false, xp:20}], longTerm: [{id:"l1", text:"Ship a C++ order-matching engine on GitHub", done:false, deadline:"2026-12-31", xp:40}, {id:"l2", text:"Hit Codeforces Specialist (1600+)", done:false, deadline:"2027-06-01", xp:40}, {id:"l3", text:"Submit 10 WorldQuant BRAIN alphas", done:false, deadline:"2027-03-01", xp:30}, {id:"l4", text:"Internship at Graviton / Tower / QuadEye / WorldQuant", done:false, deadline:"2027-06-01", xp:50}] };
const DEFAULT_PROJECTS = [
  {
    id: 'p-1',
    name: 'System: Engineer',
    desc: 'Flutter gamification app — Solo Leveling inspired',
    status: 'Shipping',
    statusClass: 'pri-m',
    progress: 90,
    tasks: [
      { text: 'Fix LevelUpOverlay static AudioPlayer disposal — 5 min', done: false },
      { text: 'Write gamification unit tests (getRank, expToNextLevel, calculateExpReward) — 30 min', done: false },
      { text: 'Add Skip Onboarding button — 10 min', done: false },
      { text: 'Ship via GitHub Releases APK → then Play Store', done: false }
    ]
  },
  {
    id: 'p-2',
    name: 'Satyam News',
    desc: 'Media outlet platform — ePaper backend + CMS',
    status: 'Jul 31 Deadline',
    statusClass: 'pri-c',
    progress: 100,
    tasks: [
      { text: 'ePaper backend in PostgreSQL — DONE ✓', done: true },
      { text: 'Partners handling Admin Portal (CMS) + public frontend + SEO', done: true },
      { text: 'Your job: integration support + review before July 31st', done: true }
    ]
  },
  {
    id: 'p-3',
    name: 'AeroSynapse',
    desc: 'DeepStream + TensorRT computer vision pipeline',
    status: 'Paused',
    statusClass: 'pri-l',
    progress: 30,
    tasks: [
      { text: 'Detection pipeline confirmed at 150+ FPS ✓', done: true },
      { text: '~2385 frames extracted for Roboflow annotation', done: false },
      { text: 'Paused: server down for billing/maintenance', done: false },
      { text: 'Resume: YOLOv8n + TensorRT + SAHI tiling for 4K detection', done: false }
    ]
  }
];
const DEFAULT_TARGETS = [
  {
    tier: 'Dream / Reach', type: 'reach', name: 'Jane Street',
    office: 'NYC · London · HK · Mumbai / Bengaluru (tiny)',
    roles: 'Quant Trader · Quant Researcher · Software Engineer',
    ctc: '₹2.5–5.8 Cr global',
    ctcDetail: 'US Y1 ~$300–700k (QT at the top, SWE ~$300–500k). An India seat, if one opens, is still ₹80L–2 Cr+. Not an Amrita campus pipeline.',
    desc: 'The prestige name. They hire probability and decision-making, not LeetCode volume. SWE is still olympiad-adjacent.',
    required: ['IOI / ICPC or Codeforces ~2000+', 'Probability + expected value under time pressure', 'C++ or OCaml/Python (SWE); trading games (QT)', 'Referral or contest win — not a campus slot'],
    note: 'India office exists. Headcount is tiny and almost entirely reserved for olympiad-caliber CPs or strong referrals.'
  },
  {
    tier: 'Dream / Reach', type: 'reach', name: 'Citadel / Citadel Securities',
    office: 'NYC · Chicago · London · Hong Kong — no India campus channel',
    roles: 'QR (Citadel HF) · QT / Core SWE (Citadel Securities)',
    ctc: '₹2.3–5.8 Cr US Y1',
    ctcDetail: 'HF QR ~$275–475k Y1. CitSec QT ~$400–700k. SWE ~$300–550k. Zero meaningful India-campus hiring.',
    desc: 'Two firms, one brand. Securities is HFT market-making; the hedge fund is research + PM track. Both are closed loops from India.',
    required: ['CF 1900+ or equivalent olympiad', 'Probability, stats, brainteasers (QR/QT)', 'Deep C++ systems / kernel / networking (CitSec SWE)', 'US/UK/HK visa path or a later lateral'],
    note: 'Do not weight this as a 2028 campus outcome. Use it as the skill ceiling you train against.'
  },
  {
    tier: 'Dream / Reach', type: 'reach', name: 'Optiver',
    office: 'Amsterdam · Chicago · Sydney · Mumbai (tiny)',
    roles: 'Market Maker / QT · Quant Researcher · Quant Developer',
    ctc: '₹2.1–3.3 Cr global',
    ctcDetail: 'US/EU Y1 ~$250–400k. Occasional IIT international packages reported ~₹2–2.5 Cr. India office headcount is tiny.',
    desc: 'Options-native market maker. Mental math and market intuition are first-class, not a side quest.',
    required: ['Fast mental math + options intuition', 'Probability / combinatorics on a whiteboard', 'C++17+ for quant-dev (STL, memory, latency)', 'CF 1800+ or a brutal OA + trader games'],
    note: 'India office exists. Same story as Jane Street: reserved for IOI/ICPC-caliber or referrals.'
  },
  {
    tier: 'Dream / Reach', type: 'reach', name: 'Two Sigma',
    office: 'NYC · London — no India campus channel',
    roles: 'Quant Researcher · Quant SWE · Data Scientist',
    ctc: '₹2.1–3.3 Cr US Y1',
    ctcDetail: 'US new-grad ~$250–400k. Research-heavier than pure HFT. No India-campus pipeline.',
    desc: 'Systematic hedge fund. Stats, ML, and research taste matter more than raw matching-engine latency.',
    required: ['Probability, stats, ML fundamentals', 'Python + C++ (research + production)', 'CF 1800+ or a strong research / Kaggle signal', 'Papers or non-trivial modeling projects help'],
    note: 'Treat as a later off-campus / intern-return shot, not a July 2028 campus card.'
  },
  {
    tier: 'Dream / Reach', type: 'reach', name: 'Hudson River Trading (HRT)',
    office: 'NYC · Chicago · London — no India campus channel',
    roles: 'Algorithm Developer · Core SWE · Quant Researcher',
    ctc: '₹2.5–4.2 Cr US Y1',
    ctcDetail: 'US SWE/algo-dev ~$300–500k Y1. One of the most C++-lethal bars on earth. No India campus.',
    desc: 'If Jane Street is probability, HRT is machines. Cache lines, kernel bypass, and nanoseconds.',
    required: ['Lethal C++: cache, SIMD, allocators, atomics', 'Linux internals, networking, lock-free queues', 'CF 1900+ (speed + correctness)', 'A public low-latency project that is not a tutorial clone'],
    note: 'The C++ bar here is the training target even if the offer never comes from HRT itself.'
  },
  {
    tier: 'Strong Target', type: 'tgt', name: 'Jump Trading',
    office: 'Chicago · London · Singapore — rare India hire',
    roles: 'Quant Dev · Algo Trader · Researcher',
    ctc: '₹2.3–3.6 Cr US Y1',
    ctcDetail: 'US new-grad ~$275–430k. India hiring is sporadic and referral-driven.',
    desc: 'Same universe as HRT/CitSec. Slightly more reachable via internships than Jane Street, still a dream from Amrita.',
    required: ['C++ systems + probability (both, not either)', 'CF 1800–2000', 'OS / networking depth', 'Internship or contest signal that a Jump engineer will vouch for'],
    note: 'Keep on the list as a skill north star. Do not build the 2028 plan around a Jump campus drive.'
  },
  {
    tier: 'Strong Target', type: 'tgt', name: 'D. E. Shaw',
    office: 'Hyderabad (real India office) · NYC · London',
    roles: 'SWE · QR · Systems / Platform',
    ctc: '₹35–80 LPA India · ₹2.3–3.3 Cr US',
    ctcDetail: 'Hyderabad campus/off-campus new-grad typically ₹35–80 LPA depending on role. US QR/SWE ~$280–390k. Most realistic "global quant brand" with an actual India funnel.',
    required: ['Hard DSA (more LeetCode-shaped than HFT, still brutal)', 'OS + CN + concurrency', 'C++ or Python at production depth', 'Strong CGPA + a systems or research project'],
    note: 'Weight this above glamour HFT names. Hyderabad is a real office with real India hiring.'
  },
  {
    tier: 'Strong Target', type: 'tgt', name: 'IMC Trading',
    office: 'Amsterdam · Chicago · Sydney — limited India',
    roles: 'Trader · Quant Researcher · Quant Developer',
    ctc: '₹2.4–3.3 Cr global',
    ctcDetail: 'US/EU Y1 ~$290–400k. Comp grows fast after year 1. India presence is not a campus pipeline.',
    desc: 'Market maker with a heavy trader-game process. Dev track is C++ and low-latency.',
    required: ['Trading games + probability', 'Mental math / market making intuition', 'C++ for quant-dev', 'CF 1700+ and a clean OA'],
    note: 'Apply off-campus / intern. Do not wait for an Amrita drive that will not come.'
  },
  {
    tier: 'Strong Target', type: 'tgt', name: 'Akuna Capital',
    office: 'Chicago · Sydney — no India campus',
    roles: 'Trader · Quant · Software Engineer',
    ctc: '₹1.5–2.5 Cr US/AU',
    ctcDetail: 'US new-grad roughly $180–300k. Slightly more accessible than T1, still closed from India campus.',
    desc: 'Options-heavy prop shop. A notch below Optiver/IMC on brand, same skill family.',
    required: ['Options / vol intuition', 'Probability + coding OA', 'C++ or Python', 'CF 1600+ as a floor'],
    note: 'Useful practice target for Optiver-style interviews. Not a 2028 campus bet.'
  },
  {
    tier: 'Strong Target', type: 'tgt', name: 'SIG (Susquehanna)',
    office: 'Philadelphia · occasional India / remote research',
    roles: 'Trader · QR · Quant Dev',
    ctc: '₹1.7–2.5 Cr US',
    ctcDetail: 'US trader/QR Y1 ~$200–300k. Decision-theory interviews. Occasional research touchpoints into India.',
    desc: 'Game theory and making good decisions with incomplete information. Less "nanosecond C++" than HRT.',
    required: ['Game theory + probability + EV', 'Decision-making interviews, not just DSA', 'Python / C++', 'Poker / strategy games are a real signal here'],
    note: 'Interview style is unique. Prep specifically; do not reuse a pure-HFT C++ loop and hope.'
  },
  {
    tier: 'Strong Target', type: 'tgt', name: 'Tower Research Capital',
    office: 'NYC · Gurgaon · Mumbai',
    roles: 'Core Dev · Quant Dev · Quant Researcher',
    ctc: '₹50–90 LPA India typical · ₹1–2 Cr top',
    ctcDetail: 'India new-grad commonly ₹50–90 LPA; top CSE/IIT outliers ₹1–2 Cr. US ~$265–370k. The Gurgaon/Mumbai office is a real apply target.',
    desc: 'Global HFT with an actual India engineering office. C++ + OS internals + an order-book project is the language they speak.',
    required: ['Deep C++ (STL internals, cache, memory)', 'OS internals + networking', 'CF 1800+ preferred', 'Public order-matching / market-data engine'],
    note: 'Listed again under India-entry because the India office is the realistic door. Same firm, weight the Gurgaon path.'
  },
  {
    tier: 'India Entry', type: 'india', name: 'Graviton Research Capital',
    office: 'Gurgaon (India-based, quant-dev heavy)',
    roles: 'Quant Dev · Quant Researcher · Core SWE',
    ctc: '₹80 LPA – ₹1.2 Cr',
    ctcDetail: 'India new-grad TC typically ₹80L–1.2 Cr (base + Y1 bonus). IIT intern stipends have hit ₹25L+/month. Off-campus is possible with CF + C++.',
    desc: 'Your most important near-term name. India HFT that pays T1 money without requiring a US visa. Quant-dev heavy.',
    required: ['C++ that is actually systems C++, not DSA-in-C++', 'Codeforces 1800+ (2000+ makes you visible)', 'OS, cache, lock-free, sockets', 'Math puzzles + probability in later rounds'],
    note: 'Most realistic high-pay entry from an Indian engineering college. Weight this heavier than Jane Street.'
  },
  {
    tier: 'India Entry', type: 'india', name: 'WorldQuant',
    office: 'Mumbai / Hyderabad research + global platform',
    roles: 'QR · Research Consultant · Quant Dev',
    ctc: '₹20–50 LPA India entry',
    ctcDetail: 'Full-time India QR/dev often ₹20–50 LPA to start, scales with alpha. Research Consultant path via WorldQuant BRAIN is the open door.',
    desc: 'The most accessible "quant" brand. Less CF-obsessed, more stats + research + the BRAIN platform.',
    required: ['Stats, regression, time series', 'Python (NumPy/pandas) + some C++', 'WorldQuant BRAIN alphas — start now', 'Ability to write and defend a research idea'],
    note: 'Most realistic near-term quant entry from Amrita. Start BRAIN this semester. Weight this.'
  },
  {
    tier: 'India Entry', type: 'india', name: 'Tower Research — India office',
    office: 'Gurgaon / Mumbai',
    roles: 'Core Dev · Quant Dev',
    ctc: '₹50–90 LPA typical · ₹1 Cr+ outliers',
    ctcDetail: 'Same firm as the T2 card. This row exists so the India office is weighted as an apply target, not a poster on the wall.',
    desc: 'Apply here, not to NYC. Same C++/OS bar, India comp, India interviews.',
    required: ['C++ STL + memory + concurrency', 'Linux, epoll, shared memory', 'CF 1700–1900', 'Matching engine or UDP market-data handler on GitHub'],
    note: 'Treat as a primary 2027–28 application, not a reach fantasy.'
  },
  {
    tier: 'India Entry', type: 'india', name: 'Millennium',
    office: 'Mumbai / Bengaluru (India presence growing)',
    roles: 'Quant Dev · Platform SWE · QR',
    ctc: '₹40–80 LPA India',
    ctcDetail: 'India tech/quant-dev typically ₹40–80 LPA as the office scales. US PM/QR is a different universe ($300k+).',
    desc: 'Multi-manager pod shop, not classic HFT. More platform + research engineering than nanosecond matching.',
    required: ['C++ and/or Python at production depth', 'Data systems, not just DSA', 'Stats literacy for QR-adjacent roles', 'Internships / referrals matter more than CF here'],
    note: 'Growing India presence. Watch 2027–28 headcount. A strong second-wave target after Graviton/Tower.'
  },
  {
    tier: 'India Entry', type: 'india', name: 'QuadEye',
    office: 'Gurgaon',
    roles: 'Quant Strategist · Quant Dev · Core SWE',
    ctc: '₹75 LPA – ₹1.2 Cr',
    ctcDetail: 'Careers page has advertised intern conversion at min ₹93 LPA (no upper cap). Typical new-grad band ~₹75L–1.2 Cr.',
    desc: 'Indian HFT in the same Gurgaon cluster as Graviton. Pays like a T1 if you clear the bar.',
    required: ['C++ + CP (CF 1800+)', 'Probability / math puzzles', 'Low-latency instincts', 'IIT-shaped process — off-campus needs a loud GitHub + CF'],
    note: 'Realistic if the CF rating and C++ project are real. Same bucket as Graviton. Weight it.'
  },
  {
    tier: 'Floor / Fallback', type: 'flr', name: 'Flipkart / Swiggy-tier product SWE',
    office: 'Bengaluru · Hyderabad (low-latency / infra teams)',
    roles: 'SDE-1 · Backend / Infra · Platform',
    ctc: '₹18–40 LPA',
    ctcDetail: 'Top product new-grad typically ₹18–40 LPA (Flipkart/Swiggy/better startups). Infra / low-latency teams sit at the top of that band.',
    desc: 'The employability floor. Same systems muscle (C++, OS, backend) still wins. Keeps 2028 safe if quant does not convert.',
    required: ['Solid medium-hard DSA (this is the LeetCode lane)', 'Backend + OS + networks', 'One production-shaped project', 'Edge-AI (AeroSynapse) is a plus, not the pitch'],
    note: 'Do not abandon this lane. Quant is a funnel. This is the job if the funnel does not convert.'
  },
  {
    tier: 'Floor / Fallback', type: 'flr', name: 'Fintech infra (PhonePe / Razorpay / Cred / Groww)',
    office: 'Bengaluru · Pune · Hyderabad',
    roles: 'Backend · Payments infra · Data / reliability',
    ctc: '₹18–35 LPA',
    ctcDetail: 'New-grad typically ₹18–35 LPA. Closer to markets than food-delivery SWE, still not HFT.',
    desc: 'If you want to stay near money without clearing an HFT OA. Payments, ledgers, exactly-once, reliability.',
    required: ['DSA + system design basics', 'Databases, queues, consistency', 'Java/Go/C++ — language less sacred than HFT', 'Internship on a real backend'],
    note: 'Fallback that still compounds. Better than a random service-company safety net.'
  }
];
const DEFAULT_TARGETS_HAVE = [
  { title: 'Already in the stack', items: ['Computer vision (AeroSynapse) — keep, do not lead with it', 'Mobile product (System: Engineer)', 'Web + backend (Satyam News)', 'TensorRT + DeepStream at 150+ FPS'] },
  { title: 'The actual quant bar', items: ['C++: deep — memory model, cache, lock-free. Not DSA-in-C++', 'Codeforces rating matters more here than LeetCode grinding', 'Probability / stats / combinatorics under a clock', 'Market microstructure: order book, latency, maker-taker'] },
  { title: 'Close by Sem 6', items: ['Low-latency C++ order matching engine on GitHub', 'CF Specialist 1600+ now, 1800+ by Sem 6', 'Custom HTTP/1.1 or UDP market-data handler in C++', 'Heard on the Street + Fifty Challenging Problems in Probability'] }
];
const DEFAULT_APPLICATIONS = [
  { id:'app-graviton', company:'Graviton Research Capital', role:'Quant Developer', tier:'India Entry', column:'drafting', date:'', notes:'₹80 LPA – ₹1.2 Cr · CF 1800+ · systems C++ · Gurgaon. Weight this.' },
  { id:'app-wq', company:'WorldQuant', role:'Research Consultant / QR', tier:'India Entry', column:'drafting', date:'', notes:'₹20–50 LPA · start BRAIN this semester · stats + Python. Most open door.' },
  { id:'app-tower-in', company:'Tower Research — India', role:'Core / Quant Dev', tier:'India Entry', column:'drafting', date:'', notes:'₹50–90 LPA typical · Gurgaon/Mumbai · matching engine on GitHub' },
  { id:'app-quadeye', company:'QuadEye', role:'Quant Strategist / Dev', tier:'India Entry', column:'drafting', date:'', notes:'₹75 LPA – ₹1.2 Cr · CF 1800+ · Gurgaon HFT' },
  { id:'app-deshaw', company:'D. E. Shaw', role:'SWE / Systems', tier:'Target', column:'drafting', date:'', notes:'₹35–80 LPA Hyderabad · hardest realistic global brand from India' },
  { id:'app-millennium', company:'Millennium', role:'Quant Dev / Platform', tier:'India Entry', column:'drafting', date:'', notes:'₹40–80 LPA · India presence growing · 2027–28 watch' }
];
const DEFAULT_GAMING = {
  verdict: "4 hours/week is 2.4% of your waking hours. That's not a threat to your goals — it's basic mental maintenance. The people who land top placements aren't the ones who studied every waking hour. They're the ones who studied consistently for 2 years without burning out. Sustainability beats intensity over an 18-month horizon every time.",
  rules: [
    "Gaming happens after the day's work is done — not instead of it. Skipped your Leetcode problem? No gaming that evening. Non-negotiable.",
    "Weekend deep study blocks are protected. The 6-7 hour Saturday blocks don't get trimmed. Game after the block is fully complete.",
    "4 hours is a fixed budget, not expandable. The moment you start negotiating \"just one more hour\" — the budget is blown. Especially during exam season."
  ],
  slots: [
    { day: 'MON', desc: 'No gaming', color: 'muted' },
    { day: 'TUE', desc: 'No gaming', color: 'muted' },
    { day: 'WED', desc: 'No gaming', color: 'muted' },
    { day: 'THU', desc: 'No gaming', color: 'muted' },
    { day: 'FRI', desc: '~2hrs ✓<br><span style="font-size:10px;color:var(--sub);">after work done</span>', color: 'yellow' },
    { day: 'SAT', desc: 'Deep study day', color: 'muted' },
    { day: 'SUN', desc: '~2hrs ✓<br><span style="font-size:10px;color:var(--sub);">after block done</span>', color: 'yellow' }
  ]
};
const DEFAULT_NOTE_TABS = [
  { key: 'ai', title: 'Fundamentals of AI', color: 'blue' },
  { key: 'os', title: 'Operating Systems', color: 'red' },
  { key: 'dsa2', title: 'DSA 2', color: 'green' },
  { key: 'math', title: 'Maths for Computing 3', color: 'yellow' },
  { key: 'cn', title: 'Computer Networks', color: 'mauve' },
  { key: 'misc', title: 'Misc / Ideas', color: 'muted' }
];
// END_DEFAULTS

const DAILY_MATRIX_BLOCKS = [
  { id: 'anchor', time: '05:30 – 06:30', name: 'The Anchor (Physical Conditioning & Mental Reset)', desc: 'Execute your 2.5 km run. Do not listen to tech podcasts or think about code during this time. Let your brain rest.', tag: 'blue', focus: 'Physical endurance' },
  { id: 'deep1', time: '06:30 – 08:30', name: 'Deep Work Block 1 (The Non-Negotiable Core)', desc: 'C++ Mastery and Systems Engineering (No startup work, no university homework). Build your custom C++ web server, master STL containers, or work through low-latency OS concepts.', tag: 'red', focus: 'C++ & Systems' },
  { id: 'breakfast', time: '08:30 – 09:30', name: 'Breakfast & Family Operations', desc: 'Fuel up, handle morning household responsibilities, and assist your parents where needed.', tag: 'yellow', focus: 'Family ops' },
  { id: 'acad', time: '09:30 – 13:30', name: 'Academic & Mentorship Block', desc: 'Coursera OS Audit, interacting with your PhD mentor, and maintaining your 9.37 CGPA. Complete required coursework, read Linux kernel documentation.', tag: 'mauve', focus: 'OS & Mentor Sync' },
  { id: 'lunch', time: '13:30 – 14:30', name: 'Lunch & Disconnect', desc: 'Step away from all screens. Give your eyes and mind a full break.', tag: 'muted', focus: 'Mental reset' },
  { id: 'deep2', time: '14:30 – 17:30', name: 'Deep Work Block 2 (Execution & Applied R&D)', desc: 'Aerosynapse and Freelance CMS. Optimize the edge-AI drone models, write Python scripts for heat mapping, or fix database bugs in the e-paper CMS.', tag: 'green', focus: 'Applied R&D' },
  { id: 'flex', time: '17:30 – 19:30', name: 'The Flex & Family Buffer', desc: 'Contingency time. If father needs medical attention, errands need to run, this buffer absorbs the shock. If calm, read up on quantitative finance or stochastic calculus.', tag: 'yellow', focus: 'Buffer / Quant' },
  { id: 'dinner', time: '19:30 – 20:30', name: 'Dinner', desc: 'Eat, relax, and transition to evening shutdown.', tag: 'muted', focus: 'Recovery' },
  { id: 'winddown', time: '20:30 – 21:30', name: 'The Wind Down & Tracker Audit', desc: 'Preparation for tomorrow. Push your daily updates to tracker. Review what you accomplished, write down 3 specific tasks for tomorrow, and shut down.', tag: 'blue', focus: 'Tracker Audit' }
];

const ACADEMIC_CALENDAR_EVENTS = [
  { date: '2026-06-10', type: 'academic', label: 'CD01', details: 'Commencement of III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-06-13', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-06-20', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-06-26', type: 'holiday', label: 'H', details: 'Holiday - Muharram' },
  { date: '2026-07-11', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-07-16', type: 'meeting', label: 'CD26', details: 'First Class Committee Meeting for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-07-17', type: 'meeting', label: 'CD27', details: 'First Class Committee Meeting for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-07-25', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-07-31', type: 'feedback', label: 'CD37', details: 'Mid Semester Faculty Feedback for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-08-07', type: 'exam', label: 'CD42', details: 'Commencement of Midterm Exam for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-08-08', type: 'academic', label: 'CD43', details: 'Instructional Day (Friday Time Table)' },
  { date: '2026-08-15', type: 'holiday', label: 'H', details: 'Holiday - Independence Day' },
  { date: '2026-08-22', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-08-26', type: 'holiday', label: 'H', details: 'Holiday - Onam Sadhya / Milad-un-Nabi' },
  { date: '2026-08-29', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-09-04', type: 'holiday', label: 'H', details: 'Holiday - Krishna Janmashtami' },
  { date: '2026-09-12', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-09-14', type: 'holiday', label: 'H', details: 'Holiday - Vinayakar Chaturthi' },
  { date: '2026-09-19', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-09-22', type: 'meeting', label: 'CD72', details: 'Second Class Committee Meeting for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-09-23', type: 'meeting', label: 'CD73', details: 'Second Class Committee Meeting for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-09-24', type: 'exam', label: 'CD74', details: 'Commencement of Missed Midterm for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-09-27', type: 'holiday', label: 'H', details: 'Holiday - Amma\'s Jayanthi' },
  { date: '2026-10-02', type: 'holiday', label: 'H', details: 'Holiday - Gandhi Jayanthi' },
  { date: '2026-10-05', type: 'exam', label: 'CD80', details: 'Commencement of End Semester Practical Exam for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-10-10', type: 'academic', label: 'CD85', details: 'Instructional Day (Monday Time Table)' },
  { date: '2026-10-14', type: 'feedback', label: 'CD88', details: 'End Semester Faculty Feedback for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-10-16', type: 'academic', label: 'CD90', details: 'Last Instruction Day for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-10-19', type: 'holiday', label: 'H', details: 'Holiday - Ayutha Pooja' },
  { date: '2026-10-20', type: 'holiday', label: 'H', details: 'Holiday - Vijaya Dasami' },
  { date: '2026-10-22', type: 'exam', label: 'Exam', details: 'Commencement of End Semester Exam for III, V, & VII Sem UG and III Sem PG Classes' },
  { date: '2026-11-08', type: 'holiday', label: 'H', details: 'Holiday - Deepavali' },
  { date: '2026-11-18', type: 'academic', label: 'CD01', details: 'Commencement of IV, VI & VIII Sem UG and IV Sem PG Classes' },
  { date: '2026-11-28', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2026-12-12', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2026-12-19', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2026-12-23', type: 'meeting', label: 'CD26', details: 'First Class Committee Meeting for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2026-12-24', type: 'meeting', label: 'CD27', details: 'First Class Committee Meeting for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2026-12-25', type: 'holiday', label: 'H', details: 'Holiday - Christmas' },
  { date: '2027-01-01', type: 'holiday', label: 'H', details: 'Holiday - New Year' },
  { date: '2027-01-08', type: 'feedback', label: 'CD36', details: 'Mid Semester Faculty Feedback for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-01-09', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-01-15', type: 'holiday', label: 'H', details: 'Holiday - Pongal' },
  { date: '2027-01-16', type: 'holiday', label: 'H', details: 'Holiday - Uzhavar Thirunal' },
  { date: '2027-01-23', type: 'holiday', label: 'H', details: 'Holiday - Thaipoosam' },
  { date: '2027-01-26', type: 'holiday', label: 'H', details: 'Holiday - Republic Day' },
  { date: '2027-01-27', type: 'exam', label: 'CD46', details: 'Commencement of Midterm Exam for IV & VI Sem UG Classes' },
  { date: '2027-01-30', type: 'academic', label: 'CD49', details: 'Instructional Day (Friday Time Table)' },
  { date: '2027-02-13', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-02-27', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-03-04', type: 'meeting', label: 'CD73', details: 'Second Class Committee Meeting for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-03-05', type: 'meeting', label: 'CD74', details: 'Second Class Committee Meeting for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-03-08', type: 'exam', label: 'CD75', details: 'Commencement of Missed Midterm for IV & VI Sem UG Classes' },
  { date: '2027-03-10', type: 'holiday', label: 'H', details: 'Holiday - Ramzan' },
  { date: '2027-03-13', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-03-17', type: 'exam', label: 'CD81', details: 'Commencement of End Semester Practical Exam for IV & VI Sem UG Classes' },
  { date: '2027-03-20', type: 'non-instructional', label: 'W', details: 'Non-Instructional Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-03-26', type: 'holiday', label: 'H', details: 'Holiday - Good Friday' },
  { date: '2027-03-29', type: 'feedback', label: 'CD88', details: 'End Semester Faculty Feedback for IV, VI & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-03-31', type: 'academic', label: 'CD90', details: 'Last Instruction Day for IV, VI, & VIII Sem UG and IV Sem PG Classes' },
  { date: '2027-04-02', type: 'exam', label: 'Exam', details: 'Commencement of End Semester Exam for IV & VI Sem UG Classes' },
  { date: '2027-04-08', type: 'holiday', label: 'H', details: 'Holiday - Ugadi' },
  { date: '2027-04-14', type: 'holiday', label: 'H', details: 'Holiday - Tamil New Year' },
  { date: '2027-04-19', type: 'holiday', label: 'H', details: 'Holiday - Mahavir Jayanti' },
  { date: '2027-05-01', type: 'holiday', label: 'H', details: 'Holiday - May Day' },
  { date: '2027-05-17', type: 'holiday', label: 'H', details: 'Holiday - Bakrid' },
  { date: '2027-06-09', type: 'academic', label: 'CD01', details: 'Commencement of III, V & VII Sem UG and III Sem PG Classes' }
];
