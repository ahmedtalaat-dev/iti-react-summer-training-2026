// Full database structure representing the 30-Day curriculum
const roadmapData = [
    { day: 1, week: 1, title: "What is React, Virtual DOM, SPA Concepts", practice: "Install Node.js environment and setup your first active skeleton project using modern Vite.", details: "Differentiate classical structural compilation models (Multi-Page Apps) from Modern Client SPAs. Review Virtual DOM diffing reconciliation engines.", level: "Beginner" },
    { day: 2, week: 1, title: "JSX Basics", practice: "Write complex JSX expression blocks and nest multiple static rendering nodes.", details: "Examine how transpilations translate your custom markup codes into actual programmatic React.createElement execution calls.", level: "Beginner" },
    { day: 3, week: 1, title: "Functional Components", practice: "Build a highly scalable, reusable mock profile layout card configuration.", details: "Understand clean structural component separations, absolute isolation boundaries, and default functional export patterns.", level: "Beginner" },
    { day: 4, week: 1, title: "Props", practice: "Pass string values, array sequences, objects, and handlers down through nested components.", details: "Establish standard React immutable data patterns and learn how strict top-down data flow preserves performance.", level: "Beginner" },
    { day: 5, week: 1, title: "Event Handling", practice: "Build a dynamic counter application featuring complex mathematical triggers and boundary safety checks.", details: "Master synthetic event wrappers and study how React processes events on the Root container.", level: "Beginner" },
    { day: 6, week: 1, title: "useState Hook", practice: "Construct a clean task application tracking custom element status changes.", details: "Examine execution cycle hooks and the underlying asynchronous scheduling mechanics behind useState state setters.", level: "Beginner" },
    { day: 7, week: 1, title: "Conditional Rendering", practice: "Develop robust toggle systems rendering secure screens based on user session status.", details: "Employ ternary assertions, shortcut operator checks (&&), and early return structures in components.", level: "Beginner" },
    { day: 8, week: 2, title: "Lists and Keys", practice: "Formulate a dynamic inventory layout map tracing items through unique object indices.", details: "Grasp how unique component keys allow reconciliation algorithms to dynamically update array elements without total render resets.", level: "Beginner" },
    { day: 9, week: 2, title: "Forms in React", practice: "Construct customized registration fields implementing controlled input parameters.", details: "Learn to handle multiple controlled fields using a unified structural state handler.", level: "Beginner" },
    { day: 10, week: 2, title: "Controlled Components", practice: "Implement custom regex input validations and direct user warning codes in forms.", details: "Take absolute charge of forms inside state variables to restrict or format dynamic inputs.", level: "Intermediate" },
    { day: 11, week: 2, title: "useEffect Basics", practice: "Interface with open public REST platforms utilizing local fetch protocols.", details: "Explore side effect concepts and see how standard network requests execute asynchronously.", level: "Intermediate" },
    { day: 12, week: 2, title: "Advanced useEffect", practice: "Implement active auto-complete structures utilizing clean window timeout clear routines.", details: "Deconstruct deep component lifecycle cleanup phases and dependency loop prevention styles.", level: "Intermediate" },
    { day: 13, week: 2, title: "React Project #1 (Weather App)", practice: "Assemble a responsive Weather Dashboard tracking search parameters against geolocation query APIs.", details: "Bring together styling layers, asynchronous API hooks, and local client state variables in a unified dashboard.", level: "Intermediate" },
    { day: 14, week: 2, title: "Component Styling", practice: "Rebuild styling structures using inline styling, modular CSS stylesheets, or utilities like Tailwind CSS.", details: "Examine styling isolation rules, configuration classes, and dynamic style calculations based on active states.", level: "Beginner" },
    { day: 15, week: 3, title: "React Router Basics", practice: "Configure client paths using Browser Router components, dynamic link parameters, and layout outlets.", details: "Eliminate full webpage browser reloads through client-side routers.", level: "Intermediate" },
    { day: 16, week: 3, title: "Dynamic Routing", practice: "Build dynamic client detail sheets resolving URL path slug structures.", details: "Extract dynamic route parameters cleanly using React Router's built-in useParams hook.", level: "Intermediate" },
    { day: 17, week: 3, title: "Nested Routes", practice: "Set up nested Outlet views inside dashboard page segments.", details: "Divide application layouts into persistent layouts nested with dynamic sub-page views.", level: "Intermediate" },
    { day: 18, week: 3, title: "useRef Hook", practice: "Implement dynamic focal controls on form input errors.", details: "Interact with raw browser DOM references safely without triggering rendering cycles.", level: "Intermediate" },
    { day: 19, week: 3, title: "useMemo Hook", practice: "Isolate heavy computations from rendering pipelines.", details: "Prevent performance lag in nested renders by caching expensive calculation return items.", level: "Advanced" },
    { day: 20, week: 3, title: "useCallback Hook", practice: "Use callback hooks to prevent duplicate child component compilation loops.", details: "Cache functional component definitions in memory to ensure reference equivalence during component renders.", level: "Advanced" },
    { day: 21, week: 3, title: "Custom Hooks", practice: "Construct a clean, modular custom useFetch data caching script.", details: "Consolidate repetitious, standard logic into reusable, shareable modules.", level: "Advanced" },
    { day: 22, week: 4, title: "Context API", practice: "Build an active, accessible system-wide dark/light theme switch.", details: "Eliminate prop-drilling inside deeply nested directories using globally configured contexts.", level: "Advanced" },
    { day: 23, week: 4, title: "State Management Concepts", practice: "Map structural data pipelines comparing context properties vs Redux store patterns.", details: "Identify the ideal tool for different state complexity levels (e.g., small configuration properties vs. enterprise application updates).", level: "Intermediate" },
    { day: 24, week: 4, title: "Redux Toolkit (RTK) Basics", practice: "Configure an initial RTK configureStore wrapper parsing state reducers.", details: "Master the standardized pattern of Actions, Reducers, Slices, and Dispatch structures.", level: "Advanced" },
    { day: 25, week: 4, title: "Redux Toolkit Advanced", practice: "Build a highly scalable task manager dispatching complex global updates.", details: "Read global data stores using selectors and dispatch state updates asynchronously using standard RTK practices.", level: "Advanced" },
    { day: 26, week: 4, title: "API Integration", practice: "Sync global stores with Mock APIs and remote REST endpoints.", details: "Synchronize client components with server states, and manage loading/error flags gracefully.", level: "Advanced" },
    { day: 27, week: 4, title: "Axios Client Operations", practice: "Setup custom Axios API instances managing dynamic interceptor auth codes.", details: "Write modular HTTP requests supporting full, standard server CRUD integrations.", level: "Intermediate" },
    { day: 28, week: 4, title: "React Project #2 (E-commerce Store)", practice: "Architect a multi-view catalog with functional search arrays, dynamic checkout logs, and cart management.", details: "Synthesize Tailwind UI structures, React Router layouts, persistent RTK data slices, and API hooks in a production-ready application.", level: "Advanced" },
    { day: 29, week: 4, title: "Advanced React Patterns", practice: "Build robust composite card overlays utilizing structural containment.", details: "Explore design patterns like Component Composition and Render Props to minimize structural bloat.", level: "Advanced" },
    { day: 30, week: 4, title: "Final Capstone Project", practice: "Publish a fully operational and customized capstone portfolio application.", details: "Incorporate advanced layout separation, full component validation testing, dynamic lazy page loading, and hosting environments (Vercel/Netlify).", level: "Advanced" }
];

// Application State Parameters
let completedDays = [];
let currentFilter = 'all';
let searchQuery = '';

// Study session routine values (50 mins Pomodoro timer)
let timerSeconds = 50 * 60;
let timerInterval = null;
let isTimerRunning = false;

// Global DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Load local storage progress profiles
    const stored = localStorage.getItem('react30_completed');
    if (stored) {
        try {
            completedDays = JSON.parse(stored);
        } catch(e) {
            completedDays = [];
        }
    }

    // Static click configurations
    document.getElementById('resetBtn').addEventListener('click', resetAllProgress);
    document.getElementById('searchInput').addEventListener('input', (e) => handleSearch(e.target.value));
    document.getElementById('timerToggle').addEventListener('click', toggleTimer);
    document.getElementById('timerReset').addEventListener('click', resetTimer);

    // Setup filter category event routing listeners
    const filters = ['all', 'week1', 'week2', 'week3', 'week4', 'incomplete'];
    filters.forEach(type => {
        const btn = document.getElementById(`btn-${type}`);
        if (btn) {
            btn.addEventListener('click', () => filterRoadmap(type));
        }
    });

    renderDays();
    updateProgress();
});

// Expose toggleDay globally so the inline dynamic template click handler accesses it
window.toggleDay = function(dayNum) {
    const index = completedDays.indexOf(dayNum);
    if (index > -1) {
        completedDays.splice(index, 1);
        showToast(`Day ${dayNum} marked incomplete.`);
    } else {
        completedDays.push(dayNum);
        showToast(`🎉 Beautiful! Day ${dayNum} successfully conquered!`, true);
    }
    
    localStorage.setItem('react30_completed', JSON.stringify(completedDays));
    renderDays();
    updateProgress();
};

// Rendering Core Pipeline 
function renderDays() {
    const feed = document.getElementById('roadmapFeed');
    const empty = document.getElementById('emptyState');
    feed.innerHTML = '';

    // Advanced search validation logic
    let filtered = roadmapData.filter(item => {
        if (currentFilter === 'week1' && item.week !== 1) return false;
        if (currentFilter === 'week2' && item.week !== 2) return false;
        if (currentFilter === 'week3' && item.week !== 3) return false;
        if (currentFilter === 'week4' && item.week !== 4) return false;
        if (currentFilter === 'incomplete' && completedDays.includes(item.day)) return false;

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            const matchTitle = item.title.toLowerCase().includes(q);
            const matchPractice = item.practice.toLowerCase().includes(q);
            const matchDetails = item.details.toLowerCase().includes(q);
            return matchTitle || matchPractice || matchDetails;
        }
        return true;
    });

    if (filtered.length === 0) {
        empty.classList.remove('hidden');
    } else {
        empty.classList.add('hidden');
        
        filtered.forEach(item => {
            const isDone = completedDays.includes(item.day);
            
            let lvlBadge = '';
            if (item.level === 'Beginner') {
                lvlBadge = `<span class="px-2 py-0.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">Beginner</span>`;
            } else if (item.level === 'Intermediate') {
                lvlBadge = `<span class="px-2 py-0.5 text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded">Intermediate</span>`;
            } else {
                lvlBadge = `<span class="px-2 py-0.5 text-[10px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded">Advanced</span>`;
            }

            const card = document.createElement('div');
            card.className = `group transition-all duration-300 border rounded-xl overflow-hidden shadow-md hover:shadow-lg ${
                isDone 
                ? 'bg-slate-900/40 border-slate-800 opacity-75 hover:opacity-100' 
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`;

            card.innerHTML = `
                <div class="p-5 flex items-start space-x-4">
                    <button onclick="toggleDay(${item.day})" class="mt-1 shrink-0 focus:outline-none transition-transform duration-150 active:scale-95" aria-label="Mark Day ${item.day} Complete">
                        <div class="w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                            isDone 
                            ? 'bg-cyan-500 border-cyan-500 text-slate-950' 
                            : 'border-slate-700 group-hover:border-slate-500 hover:bg-slate-800'
                        }">
                            ${isDone ? `
                            <svg class="w-4 h-4 stroke-[3px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>` : ''}
                        </div>
                    </button>

                    <div class="flex-1">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-xs font-mono font-bold text-cyan-400">DAY ${String(item.day).padStart(2, '0')}</span>
                            <span class="text-slate-600 text-xs">•</span>
                            <span class="text-[10px] uppercase font-bold text-slate-500">Week ${item.week}</span>
                            <span class="text-slate-600 text-xs">•</span>
                            ${lvlBadge}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-100 transition-colors duration-200 ${isDone ? 'line-through text-slate-400' : 'group-hover:text-cyan-300'}">
                            ${item.title}
                        </h4>
                        <p class="text-slate-400 text-xs mt-1.5 leading-relaxed">
                            ${item.practice}
                        </p>

                        <div class="mt-4 border-t border-slate-800/80 pt-3">
                            <details class="group/details cursor-pointer">
                                <summary class="list-none flex items-center justify-between text-[11px] font-bold text-slate-400 select-none hover:text-slate-200 transition-colors">
                                    <span class="flex items-center space-x-1">
                                        <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        <span>Underlying Mental Model</span>
                                    </span>
                                    <span class="transition-transform duration-200 group-open/details:rotate-180 text-slate-500 font-mono text-[9px]">&darr;</span>
                                </summary>
                                <div class="mt-2 text-slate-400 text-xs leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/60 font-medium">
                                    ${item.details}
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            `;
            feed.appendChild(card);
        });
    }
}

// Search state dispatcher
function handleSearch(val) {
    searchQuery = val;
    renderDays();
}

// Filter layout updates
function filterRoadmap(type) {
    currentFilter = type;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = 'filter-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-950 text-slate-400 hover:text-slate-200 transition-all duration-200';
    });
    
    const activeBtn = document.getElementById(`btn-${type}`);
    if (activeBtn) {
        activeBtn.className = 'filter-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 transition-all duration-200';
    }

    renderDays();
}

// Reset Local Progress
function resetAllProgress() {
    if (confirm("This will erase your saved progress entirely. Are you sure?")) {
        completedDays = [];
        localStorage.removeItem('react30_completed');
        showToast("All progress reset.");
        filterRoadmap('all');
        renderDays();
        updateProgress();
    }
}

// Progress Ring Rendering Computations
function updateProgress() {
    const total = roadmapData.length;
    const completed = completedDays.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('progressPercentage').innerText = `${percentage}%`;
    document.getElementById('progressText').innerText = `${completed} of ${total} Days Mastered`;

    const circle = document.getElementById('progressRingCircle');
    const circumference = 2 * Math.PI * 50; 
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

// Toast alerts center 
function showToast(message, isHighlight = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    
    toastMsg.innerText = message;
    
    if (isHighlight) {
        toast.className = "fixed bottom-5 right-5 z-50 transform translate-y-0 opacity-100 bg-slate-900 border border-cyan-400 text-cyan-300 px-4 py-3 rounded-xl shadow-2xl transition-all duration-300 flex items-center space-x-3 max-w-sm pointer-events-auto scale-105";
    } else {
        toast.className = "fixed bottom-5 right-5 z-50 transform translate-y-0 opacity-100 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-xl shadow-2xl transition-all duration-300 flex items-center space-x-3 max-w-sm pointer-events-auto";
    }

    setTimeout(() => {
        toast.className = "fixed bottom-5 right-5 z-50 transform translate-y-10 opacity-0 bg-slate-900 border border-slate-800 text-slate-300 px-4 py-3 rounded-xl shadow-2xl transition-all duration-300 flex items-center space-x-3 max-w-sm pointer-events-none";
    }, 3000);
}

// Timer management logic
function toggleTimer() {
    const toggleBtn = document.getElementById('timerToggle');
    
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        toggleBtn.innerText = "Resume Session";
        toggleBtn.className = "px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded transition-all duration-200";
    } else {
        isTimerRunning = true;
        toggleBtn.innerText = "Pause Session";
        toggleBtn.className = "px-3 py-1 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs rounded transition-all duration-200";
        
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                timerSeconds = 50 * 60; 
                toggleBtn.innerText = "Start Session";
                toggleBtn.className = "px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded transition-all duration-200";
                showToast("🎉 Great Job! Study session completed. Take a break!", true);
                updateTimerDisplay();
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerSeconds = 50 * 60;
    const toggleBtn = document.getElementById('timerToggle');
    toggleBtn.innerText = "Start Session";
    toggleBtn.className = "px-3 py-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded transition-all duration-200";
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    const m = Math.floor(timerSeconds / 60);
    const s = timerSeconds % 60;
    display.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}