"use strict";

/* =========================================================
   MORGAN — Personal Life Organizer
   Version 1.0
   Files: index.html + style.css + script.js
   ========================================================= */


/* =========================
   1. إعدادات التخزين والترجمة
   ========================= */

const STORAGE_KEY = "morgan_app_data_v1";

const translations = {
    ar: {
        personalSpace: "مساحتك الخاصة",
        workspace: "مساحة العمل",
        dashboard: "لوحة التحكم",
        dailyTasks: "المهام اليومية",
        weeklyGoals: "الأهداف الأسبوعية",
        monthlyGoals: "الأهداف الشهرية",
        yearlyGoals: "الأهداف السنوية",
        reports: "التقارير والإنجازات",
        preferences: "التفضيلات",
        settings: "الإعدادات",
        mySpace: "مساحتي",
        localAccount: "مساحة شخصية",
        breadcrumbHome: "مساحتي",

        dashboardEyebrow: "مساحتك. قراراتك. تقدمك.",
        welcome: "أهلًا بعودتك.",
        ready: "مستعدة نبدأ؟",
        dashboardIntro: "كل خطوة صغيرة بتقربك من الحياة اللي بتبنيها.",
        today: "يوم جديد",
        dailyFocus: "تركيز اليوم",
        heroTitle: "مش مطلوب منك تخلصي كل حاجة.",
        heroDescription: "المطلوب إنك تعرفي إيه الأهم، وتاخدي خطوة حقيقية ناحيته.",
        organizeDay: "نظّمي يومك",
        overview: "نظرة عامة",
        progressOverview: "ملخص تقدمك",
        tasksRegistered: "مهام مسجلة",
        completedTasks: "المهام المكتملة",
        keepGoing: "استمري في التقدم",
        activeGoals: "الأهداف النشطة",
        goalsRegistered: "أهداف مسجلة",
        overallProgress: "التقدم الإجمالي",
        yourList: "قائمتك",
        todayTasks: "مهام اليوم",
        viewAll: "عرض الكل",
        noTasksYet: "لسه مفيش مهام. ابدئي بأول خطوة.",
        addFirstTask: "أضيفي أول مهمة",
        bigPicture: "الصورة الكاملة",
        goalsProgress: "تقدم الأهداف",
        progressNote: "التقدم الحقيقي مش سباق؛ المهم إنك تكملي.",

        dailyEyebrow: "خطوة بخطوة",
        dailyTitle: "المهام اليومية",
        dailyDescription: "رتّبي أولوياتك، وتابعي كل مهمة لحد ما تخلص.",
        addTaskTitle: "مهمة جديدة",
        addTaskDescription: "اكتبي المهمة اللي عايزة تنجزيها.",
        taskInputLabel: "اسم المهمة",
        taskPlaceholder: "مثال: مذاكرة الإنجليزي",
        addTask: "إضافة مهمة",
        yourTasks: "قائمة المهام",
        emptyTasksMessage: "قائمتك فاضية حاليًا. أضيفي أول مهمة وابدئي.",

        weeklyEyebrow: "خطتك للأيام السبعة القادمة",
        weeklyTitle: "الأهداف الأسبوعية",
        weeklyDescription: "حوّلي خططك الكبيرة إلى أهداف واضحة لهذا الأسبوع.",
        weeklyListTitle: "قائمة أهداف الأسبوع",
        weeklyListDescription: "حددي ما تريدين تحقيقه خلال هذا الأسبوع.",
        weeklyInputLabel: "الهدف الأسبوعي",
        weeklyPlaceholder: "اكتبي هدفك الأسبوعي...",
        addGoal: "إضافة هدف",
        emptyWeekly: "مفيش أهداف أسبوعية لسه.",

        monthlyEyebrow: "إنجازات أكبر في خطوات أصغر",
        monthlyTitle: "الأهداف الشهرية",
        monthlyDescription: "حددي نتائج واضحة عايزة توصليلها خلال الشهر.",
        monthlyListTitle: "خطة الشهر",
        monthlyListDescription: "كل هدف هنا بيمثّل خطوة في خطتك الأكبر.",
        monthlyInputLabel: "الهدف الشهري",
        monthlyPlaceholder: "اكتبي هدفك الشهري...",
        emptyMonthly: "مفيش أهداف شهرية لسه.",

        yearlyEyebrow: "الصورة الأكبر لحياتك",
        yearlyTitle: "الأهداف السنوية",
        yearlyDescription: "احتفظي برؤيتك للعام، وتابعي تقدمك نحوها.",
        yearlyListTitle: "رؤيتك لهذا العام",
        yearlyListDescription: "اكتبي الأهداف اللي تستحق وقتك ومجهودك.",
        yearlyInputLabel: "الهدف السنوي",
        yearlyPlaceholder: "اكتبي هدفك السنوي...",
        emptyYearly: "مفيش أهداف سنوية لسه.",

        reportsEyebrow: "التقدم بالأرقام",
        reportsTitle: "التقارير والإنجازات",
        reportsDescription: "تابعي ما أنجزتيه بناءً على بياناتك الفعلية.",
        completedGoals: "الأهداف المكتملة",
        reportTasksFootnote: "إجمالي المهام التي أنجزتيها",
        reportGoalsFootnote: "إجمالي الأهداف التي حققتيها",
        reportProgressFootnote: "نسبة الإنجاز من إجمالي العناصر",
        yourJourney: "رحلتك",
        progressSummary: "ملخص تقدمك",
        reportEmpty: "لسه في بداية رحلتك. أضيفي مهامك وأهدافك عشان يظهر تقدمك هنا.",

        settingsEyebrow: "خصصي تجربتك",
        settingsTitle: "الإعدادات",
        settingsDescription: "اختاري الإعدادات اللي تناسب طريقة استخدامك.",
        languageSetting: "لغة الموقع",
        languageDescription: "اختاري اللغة اللي تفضليها.",
        storageSetting: "حفظ البيانات",
        storageDescription: "النسخة الأولية تحفظ بياناتك على هذا المتصفح فقط.",
        localStorage: "حفظ محلي",
        accountSetting: "الحساب والمزامنة",
        accountDescription: "تسجيل الدخول والمزامنة السحابية هيتضافوا بعد اختبار النسخة الأساسية.",
        comingLater: "مرحلة لاحقة",
        settingsNote: "بيانات النسخة المحلية مرتبطة بالمتصفح والجهاز الحالي، وقد لا تظهر على جهاز آخر.",

        footerText: "ابني حياتك خطوة بخطوة.",

        taskCompleted: "مكتملة",
        taskPending: "قيد التنفيذ",
        goalCompleted: "مكتمل",
        goalPending: "قيد التنفيذ",
        delete: "حذف",
        confirmDeleteTask: "متأكدة إنك عايزة تحذفي المهمة دي؟",
        confirmDeleteGoal: "متأكدة إنك عايزة تحذفي الهدف ده؟",
        taskAdded: "تمت إضافة المهمة بنجاح.",
        goalAdded: "تمت إضافة الهدف بنجاح.",
        itemDeleted: "تم الحذف بنجاح.",
        storageError: "تعذر حفظ البيانات في المتصفح.",
        emptyTaskError: "اكتبي اسم المهمة الأول.",
        emptyGoalError: "اكتبي اسم الهدف الأول.",
        reportStart: "لسه في بداية رحلتك. أضيفي مهامك وأهدافك عشان يظهر تقدمك هنا.",
        reportProgress: "أنجزتِ {completed} من أصل {total} عنصر. كمّلي خطوتك الجاية.",
        reportPerfect: "رائع! أنجزتِ كل المهام والأهداف المسجلة. استمتعي بإنجازك، وبعدها اختاري خطوتك التالية.",
        todayDate: "اليوم",
        openMenu: "فتح القائمة",
        closeMenu: "إغلاق القائمة",
        languageButton: "EN"
    },

    en: {
        personalSpace: "Your personal space",
        workspace: "WORKSPACE",
        dashboard: "Dashboard",
        dailyTasks: "Daily tasks",
        weeklyGoals: "Weekly goals",
        monthlyGoals: "Monthly goals",
        yearlyGoals: "Yearly goals",
        reports: "Reports & achievements",
        preferences: "PREFERENCES",
        settings: "Settings",
        mySpace: "My space",
        localAccount: "Personal workspace",
        breadcrumbHome: "My space",

        dashboardEyebrow: "Your space. Your decisions. Your progress.",
        welcome: "Welcome back.",
        ready: "Ready to begin?",
        dashboardIntro: "Every small step brings you closer to the life you're building.",
        today: "A new day",
        dailyFocus: "TODAY'S FOCUS",
        heroTitle: "You don't have to finish everything.",
        heroDescription: "Know what matters most, then take one meaningful step toward it.",
        organizeDay: "Organize your day",
        overview: "OVERVIEW",
        progressOverview: "Your progress",
        tasksRegistered: "Tasks recorded",
        completedTasks: "Completed tasks",
        keepGoing: "Keep moving forward",
        activeGoals: "Active goals",
        goalsRegistered: "Goals recorded",
        overallProgress: "Overall progress",
        yourList: "YOUR LIST",
        todayTasks: "Today's tasks",
        viewAll: "View all",
        noTasksYet: "No tasks yet. Start with one small step.",
        addFirstTask: "Add your first task",
        bigPicture: "THE BIG PICTURE",
        goalsProgress: "Goal progress",
        progressNote: "Progress isn't a race. What matters is that you keep going.",

        dailyEyebrow: "One step at a time",
        dailyTitle: "Daily tasks",
        dailyDescription: "Organize your priorities and track each task until it's done.",
        addTaskTitle: "New task",
        addTaskDescription: "Write down something you want to accomplish.",
        taskInputLabel: "Task name",
        taskPlaceholder: "e.g. Study English",
        addTask: "Add task",
        yourTasks: "Your task list",
        emptyTasksMessage: "Your list is empty. Add your first task to get started.",

        weeklyEyebrow: "Your plan for the next seven days",
        weeklyTitle: "Weekly goals",
        weeklyDescription: "Turn bigger plans into clear goals for this week.",
        weeklyListTitle: "This week's goals",
        weeklyListDescription: "Choose what you want to achieve this week.",
        weeklyInputLabel: "Weekly goal",
        weeklyPlaceholder: "Write a weekly goal...",
        addGoal: "Add goal",
        emptyWeekly: "No weekly goals yet.",

        monthlyEyebrow: "Bigger achievements, smaller steps",
        monthlyTitle: "Monthly goals",
        monthlyDescription: "Define clear outcomes you want to reach this month.",
        monthlyListTitle: "Monthly plan",
        monthlyListDescription: "Every goal here is a step toward your bigger plan.",
        monthlyInputLabel: "Monthly goal",
        monthlyPlaceholder: "Write a monthly goal...",
        emptyMonthly: "No monthly goals yet.",

        yearlyEyebrow: "The bigger picture of your life",
        yearlyTitle: "Yearly goals",
        yearlyDescription: "Keep your vision for the year and track your progress.",
        yearlyListTitle: "Your vision for this year",
        yearlyListDescription: "Write down the goals that deserve your time and effort.",
        yearlyInputLabel: "Yearly goal",
        yearlyPlaceholder: "Write a yearly goal...",
        emptyYearly: "No yearly goals yet.",

        reportsEyebrow: "PROGRESS IN NUMBERS",
        reportsTitle: "Reports & achievements",
        reportsDescription: "Track what you've accomplished using your actual data.",
        completedGoals: "Completed goals",
        reportTasksFootnote: "Total tasks you've completed",
        reportGoalsFootnote: "Total goals you've achieved",
        reportProgressFootnote: "Completion rate across all items",
        yourJourney: "YOUR JOURNEY",
        progressSummary: "Your progress summary",
        reportEmpty: "You're at the beginning of your journey. Add tasks and goals to see your progress here.",

        settingsEyebrow: "Personalize your experience",
        settingsTitle: "Settings",
        settingsDescription: "Choose the settings that work best for you.",
        languageSetting: "Language",
        languageDescription: "Choose your preferred language.",
        storageSetting: "Data storage",
        storageDescription: "This version stores your data in this browser only.",
        localStorage: "Local storage",
        accountSetting: "Account & sync",
        accountDescription: "Accounts and cloud sync can be added after the core version is tested.",
        comingLater: "Coming later",
        settingsNote: "Your local data is tied to this browser and device, so it may not appear on other devices.",

        footerText: "Build your life, one step at a time.",

        taskCompleted: "Completed",
        taskPending: "In progress",
        goalCompleted: "Completed",
        goalPending: "In progress",
        delete: "Delete",
        confirmDeleteTask: "Are you sure you want to delete this task?",
        confirmDeleteGoal: "Are you sure you want to delete this goal?",
        itemDeleted: "Deleted successfully.",
        taskAdded: "Task added successfully.",
        goalAdded: "Goal added successfully.",
        storageError: "Your data could not be saved in this browser.",
        emptyTaskError: "Enter a task name first.",
        emptyGoalError: "Enter a goal name first.",
        reportStart: "You're at the beginning of your journey. Add tasks and goals to see your progress here.",
        reportProgress: "You've completed {completed} out of {total} items. Keep going.",
        reportPerfect: "Amazing! You've completed every recorded task and goal. Celebrate your progress, then choose your next step.",
        todayDate: "Today",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        languageButton: "عربي"
    }
};


/* =========================
   2. حالة التطبيق والبيانات
   ========================= */

function createInitialState() {
    return {
        language: "ar",
        tasks: [],
        goals: {
            weekly: [],
            monthly: [],
            yearly: []
        }
    };
}

let state = createInitialState();
let toastTimer = null;

function makeId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            state = createInitialState();
            return;
        }

        const parsed = JSON.parse(saved);

        state = {
            language: parsed.language === "en" ? "en" : "ar",
            tasks: Array.isArray(parsed.tasks) ? parsed.tasks : [],
            goals: {
                weekly: Array.isArray(parsed.goals?.weekly)
                    ? parsed.goals.weekly
                    : [],
                monthly: Array.isArray(parsed.goals?.monthly)
                    ? parsed.goals.monthly
                    : [],
                yearly: Array.isArray(parsed.goals?.yearly)
                    ? parsed.goals.yearly
                    : []
            }
        };

        // حماية البيانات المحفوظة من العناصر غير الصالحة.
        state.tasks = state.tasks.filter(
            item => item && typeof item.id === "string" && typeof item.title === "string"
        );

        for (const period of ["weekly", "monthly", "yearly"]) {
            state.goals[period] = state.goals[period].filter(
                item => item && typeof item.id === "string" && typeof item.title === "string"
            );
        }
    } catch (error) {
        console.error("MORGAN: Unable to load saved data.", error);
        state = createInitialState();
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
    } catch (error) {
        console.error("MORGAN: Unable to save data.", error);
        showToast(t("storageError"));
        return false;
    }
}

function t(key) {
    return translations[state.language]?.[key]
        ?? translations.ar[key]
        ?? key;
}


/* =========================
   3. أدوات DOM
   ========================= */

function $(selector, root = document) {
    return root.querySelector(selector);
}

function $all(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
}

function getElement(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const element = getElement(id);

    if (element) {
        element.textContent = String(value);
    }
}

function setProgress(id, percentage) {
    const element = getElement(id);

    if (element) {
        const safePercentage = Math.max(0, Math.min(100, percentage));
        element.style.width = `${safePercentage}%`;
    }
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}

function formatNumber(value) {
    return new Intl.NumberFormat(
        state.language === "ar" ? "ar-EG" : "en-US"
    ).format(value);
}

function formatDate() {
    const now = new Date();

    return new Intl.DateTimeFormat(
        state.language === "ar" ? "ar-EG" : "en-US",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    ).format(now);
}


/* =========================
   4. الترجمة وتغيير اللغة
   ========================= */

function applyTranslations() {
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";

    document.title = state.language === "ar"
        ? "MORGAN — مساحتك الخاصة"
        : "MORGAN — Your Personal Space";

    $all("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        const translation = translations[state.language]?.[key];

        if (translation !== undefined) {
            element.textContent = translation;
        }
    });

    $all("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        const translation = translations[state.language]?.[key];

        if (translation !== undefined) {
            element.placeholder = translation;
        }
    });

    const languageToggle = getElement("languageToggle");

    if (languageToggle) {
        languageToggle.textContent = t("languageButton");
        languageToggle.setAttribute("aria-label", t("languageSetting"));
    }

    const languageSelect = getElement("languageSelect");

    if (languageSelect) {
        languageSelect.value = state.language;
        languageSelect.setAttribute("aria-label", t("languageSetting"));
    }

    const menuToggle = getElement("menuToggle");

    if (menuToggle) {
        const sidebar = getElement("sidebar");
        const isOpen = sidebar?.classList.contains("is-open") ?? false;

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? t("closeMenu") : t("openMenu")
        );
    }

    updateDate();
    updateCurrentSectionTitle();
}

function changeLanguage(language) {
    if (language !== "ar" && language !== "en") {
        return;
    }

    state.language = language;
    saveState();
    applyTranslations();
    renderAll();
}


/* =========================
   5. التاريخ والتنقل
   ========================= */

function updateDate() {
    setText("currentDate", formatDate());
}

function getActiveSection() {
    const activeSection = $(".content-section.active");

    if (!activeSection) {
        return "dashboard";
    }

    return activeSection.id.replace("section-", "");
}

function updateCurrentSectionTitle() {
    const activeSection = getActiveSection();
    const section = getElement(`section-${activeSection}`);

    if (!section) {
        return;
    }

    const titleKey = section.dataset.title;
    setText("currentSectionTitle", t(titleKey));
}

function navigateTo(sectionName) {
    const target = getElement(`section-${sectionName}`);

    if (!target) {
        return;
    }

    $all(".content-section").forEach(section => {
        const isActive = section === target;

        section.classList.toggle("active", isActive);
        section.hidden = !isActive;
    });

    $all(".nav-item[data-section]").forEach(button => {
        const isActive = button.dataset.section === sectionName;

        button.classList.toggle("active", isActive);

        if (isActive) {
            button.setAttribute("aria-current", "page");
        } else {
            button.removeAttribute("aria-current");
        }
    });

    closeSidebarOnMobile();
    updateCurrentSectionTitle();

    // تحديث البيانات المعروضة عند دخول أي قسم.
    renderAll();
}

function closeSidebarOnMobile() {
    const sidebar = getElement("sidebar");
    const menuToggle = getElement("menuToggle");

    if (!sidebar) {
        return;
    }

    sidebar.classList.remove("is-open");

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", t("openMenu"));
    }
}

function toggleSidebar() {
    const sidebar = getElement("sidebar");
    const menuToggle = getElement("menuToggle");

    if (!sidebar) {
        return;
    }

    const isOpen = sidebar.classList.toggle("is-open");

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? t("closeMenu") : t("openMenu")
        );
    }
}


/* =========================
   6. الإشعارات
   ========================= */

function showToast(message) {
    const toast = getElement("toast");

    if (!toast) {
        return;
    }

    window.clearTimeout(toastTimer);

    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("show");

    toastTimer = window.setTimeout(() => {
        toast.classList.remove("show");

        window.setTimeout(() => {
            toast.hidden = true;
        }, 250);
    }, 2600);
}


/* =========================
   7. المهام اليومية
   ========================= */

function addTask(title) {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
        showToast(t("emptyTaskError"));
        return false;
    }

    state.tasks.unshift({
        id: makeId(),
        title: cleanTitle,
        completed: false,
        createdAt: new Date().toISOString()
    });

    saveState();
    renderAll();
    showToast(t("taskAdded"));

    return true;
}

function toggleTask(taskId) {
    const task = state.tasks.find(item => item.id === taskId);

    if (!task) {
        return;
    }

    task.completed = !task.completed;

    saveState();
    renderAll();
}

function deleteTask(taskId) {
    if (!window.confirm(t("confirmDeleteTask"))) {
        return;
    }

    state.tasks = state.tasks.filter(item => item.id !== taskId);

    saveState();
    renderAll();
    showToast(t("itemDeleted"));
}

function renderTasks() {
    const taskList = getElement("taskList");
    const emptyTasks = getElement("emptyTasks");
    const taskCount = getElement("taskCount");

    if (!taskList) {
        return;
    }

    taskList.innerHTML = state.tasks.map(task => {
        const checked = task.completed ? "checked" : "";
        const completedClass = task.completed ? " completed" : "";

        return `
            <article class="task-item${completedClass}" data-id="${escapeHTML(task.id)}">
                <label class="task-checkbox">
                    <input
                        type="checkbox"
                        data-action="toggle-task"
                        data-id="${escapeHTML(task.id)}"
                        ${checked}
                        aria-label="${escapeHTML(task.title)}"
                    >
                    <span aria-hidden="true"></span>
                </label>

                <div class="task-content">
                    <div class="task-title">${escapeHTML(task.title)}</div>
                    <div class="task-meta">
                        ${task.completed ? t("taskCompleted") : t("taskPending")}
                    </div>
                </div>

                <div class="task-actions">
                    <button
                        class="item-action"
                        type="button"
                        data-action="delete-task"
                        data-id="${escapeHTML(task.id)}"
                        aria-label="${t("delete")}"
                        title="${t("delete")}"
                    >×</button>
                </div>
            </article>
        `;
    }).join("");

    if (taskCount) {
        taskCount.textContent = formatNumber(state.tasks.length);
    }

    if (emptyTasks) {
        emptyTasks.hidden = state.tasks.length > 0;
    }
}

function renderDashboardTasks() {
    const preview = getElement("dashboardTaskPreview");
    const emptyMessage = getElement("dashboardTasksEmpty");

    if (!preview) {
        return;
    }

    // نعرض خمس مهام بحد أقصى في لوحة التحكم.
    const visibleTasks = state.tasks.slice(0, 5);

    preview.innerHTML = visibleTasks.map(task => {
        const checked = task.completed ? "checked" : "";

        return `
            <div class="task-preview-item${task.completed ? " completed" : ""}">
                <label class="task-preview-check">
                    <input
                        type="checkbox"
                        data-action="toggle-task"
                        data-id="${escapeHTML(task.id)}"
                        ${checked}
                        aria-label="${escapeHTML(task.title)}"
                    >
                    <span aria-hidden="true"></span>
                </label>

                <span class="task-preview-text">${escapeHTML(task.title)}</span>
            </div>
        `;
    }).join("");

    if (emptyMessage) {
        emptyMessage.hidden = state.tasks.length > 0;
    }
}


/* =========================
   8. الأهداف الأسبوعية والشهرية والسنوية
   ========================= */

const goalSettings = {
    weekly: {
        formId: "weeklyGoalForm",
        inputId: "weeklyGoalInput",
        listId: "weeklyGoalList",
        emptyId: "weeklyGoalsEmpty",
        countId: "weeklyGoalCount",
        progressTextId: "weeklyProgressText",
        progressBarId: "weeklyProgressBar",
        titleKey: "weeklyGoals",
        emptyKey: "emptyWeekly"
    },

    monthly: {
        formId: "monthlyGoalForm",
        inputId: "monthlyGoalInput",
        listId: "monthlyGoalList",
        emptyId: "monthlyGoalsEmpty",
        countId: "monthlyGoalCount",
        progressTextId: "monthlyProgressText",
        progressBarId: "monthlyProgressBar",
        titleKey: "monthlyGoals",
        emptyKey: "emptyMonthly"
    },

    yearly: {
        formId: "yearlyGoalForm",
        inputId: "yearlyGoalInput",
        listId: "yearlyGoalList",
        emptyId: "yearlyGoalsEmpty",
        countId: "yearlyGoalCount",
        progressTextId: null,
        progressBarId: null,
        titleKey: "yearlyGoals",
        emptyKey: "emptyYearly"
    }
};

function addGoal(period, title) {
    if (!goalSettings[period]) {
        return false;
    }

    const cleanTitle = title.trim();

    if (!cleanTitle) {
        showToast(t("emptyGoalError"));
        return false;
    }

    state.goals[period].unshift({
        id: makeId(),
        title: cleanTitle,
        completed: false,
        createdAt: new Date().toISOString()
    });

    saveState();
    renderAll();
    showToast(t("goalAdded"));

    return true;
}

function toggleGoal(period, goalId) {
    if (!goalSettings[period]) {
        return;
    }

    const goal = state.goals[period].find(item => item.id === goalId);

    if (!goal) {
        return;
    }

    goal.completed = !goal.completed;

    saveState();
    renderAll();
}

function deleteGoal(period, goalId) {
    if (!goalSettings[period]) {
        return;
    }

    if (!window.confirm(t("confirmDeleteGoal"))) {
        return;
    }

    state.goals[period] = state.goals[period].filter(
        item => item.id !== goalId
    );

    saveState();
    renderAll();
    showToast(t("itemDeleted"));
}

function renderGoals(period) {
    const config = goalSettings[period];

    if (!config) {
        return;
    }

    const list = getElement(config.listId);
    const emptyMessage = getElement(config.emptyId);
    const count = getElement(config.countId);
    const goals = state.goals[period];

    if (list) {
        list.innerHTML = goals.map(goal => {
            const checked = goal.completed ? "checked" : "";
            const completedClass = goal.completed ? " completed" : "";

            return `
                <article class="goal-item${completedClass}" data-id="${escapeHTML(goal.id)}">
                    <label class="goal-checkbox">
                        <input
                            type="checkbox"
                            data-action="toggle-goal"
                            data-period="${period}"
                            data-id="${escapeHTML(goal.id)}"
                            ${checked}
                            aria-label="${escapeHTML(goal.title)}"
                        >
                        <span aria-hidden="true"></span>
                    </label>

                    <div class="goal-content">
                        <div class="goal-title">${escapeHTML(goal.title)}</div>
                        <div class="goal-meta">
                            ${goal.completed ? t("goalCompleted") : t("goalPending")}
                        </div>
                    </div>

                    <div class="goal-actions">
                        <button
                            class="item-action"
                            type="button"
                            data-action="delete-goal"
                            data-period="${period}"
                            data-id="${escapeHTML(goal.id)}"
                            aria-label="${t("delete")}"
                            title="${t("delete")}"
                        >×</button>
                    </div>
                </article>
            `;
        }).join("");
    }

    if (count) {
        count.textContent = formatNumber(goals.length);
    }

    if (emptyMessage) {
        emptyMessage.hidden = goals.length > 0;
    }

    if (config.progressTextId && config.progressBarId) {
        const progress = calculateProgress(goals);

        setText(config.progressTextId, `${progress}%`);
        setProgress(config.progressBarId, progress);
    }
}


/* =========================
   9. حساب الإحصائيات
   ========================= */

function calculateProgress(items) {
    if (!items.length) {
        return 0;
    }

    const completed = items.filter(item => item.completed).length;

    return Math.round((completed / items.length) * 100);
}

function getAllGoals() {
    return [
        ...state.goals.weekly,
        ...state.goals.monthly,
        ...state.goals.yearly
    ];
}

function renderDashboardStats() {
    const tasks = state.tasks;
    const goals = getAllGoals();

    const completedTasks = tasks.filter(task => task.completed).length;
    const completedGoals = goals.filter(goal => goal.completed).length;

    const allItems = [...tasks, ...goals];
    const completedItems = completedTasks + completedGoals;

    const overallProgress = calculateProgress(allItems);

    setText("dashboardTaskCount", formatNumber(tasks.length));
    setText("dashboardCompletedCount", formatNumber(completedTasks));
    setText("dashboardGoalCount", formatNumber(goals.length));
    setText("dashboardProgress", formatNumber(overallProgress));

    setProgress("dashboardProgressBar", overallProgress);
}

function renderReports() {
    const tasks = state.tasks;
    const goals = getAllGoals();

    const completedTasks = tasks.filter(task => task.completed).length;
    const completedGoals = goals.filter(goal => goal.completed).length;

    const allItems = [...tasks, ...goals];
    const completedItems = completedTasks + completedGoals;
    const progress = calculateProgress(allItems);

    setText("reportCompletedTasks", formatNumber(completedTasks));
    setText("reportCompletedGoals", formatNumber(completedGoals));
    setText("reportProgress", formatNumber(progress));

    const summary = getElement("reportSummary");

    if (!summary) {
        return;
    }

    if (allItems.length === 0) {
        summary.textContent = t("reportStart");
        return;
    }

    if (completedItems === allItems.length) {
        summary.textContent = t("reportPerfect");
        return;
    }

    summary.textContent = t("reportProgress")
        .replace("{completed}", formatNumber(completedItems))
        .replace("{total}", formatNumber(allItems.length));
}


/* =========================
   10. تحديث كل أجزاء الموقع
   ========================= */

function renderAll() {
    renderTasks();
    renderDashboardTasks();

    renderGoals("weekly");
    renderGoals("monthly");
    renderGoals("yearly");

    renderDashboardStats();
    renderReports();
}


/* =========================
   11. ربط النماذج والأزرار
   ========================= */

function bindTaskForm() {
    const form = getElement("taskForm");
    const input = getElement("taskInput");

    if (!form || !input) {
        return;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        const success = addTask(input.value);

        if (success) {
            input.value = "";
            input.focus();
        }
    });
}

function bindGoalForms() {
    for (const [period, config] of Object.entries(goalSettings)) {
        const form = getElement(config.formId);
        const input = getElement(config.inputId);

        if (!form || !input) {
            continue;
        }

        form.addEventListener("submit", event => {
            event.preventDefault();

            const success = addGoal(period, input.value);

            if (success) {
                input.value = "";
                input.focus();
            }
        });
    }
}

function bindNavigation() {
    $all("[data-section]").forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            navigateTo(button.dataset.section);
        });
    });

    $all("[data-go-to]").forEach(button => {
        button.addEventListener("click", () => {
            navigateTo(button.dataset.goTo);
        });
    });

    const menuToggle = getElement("menuToggle");

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleSidebar);
    }

    // إغلاق القائمة الجانبية عند الضغط خارجها على الشاشات الصغيرة.
    document.addEventListener("click", event => {
        const sidebar = getElement("sidebar");
        const menu = getElement("menuToggle");

        if (!sidebar || !menu) {
            return;
        }

        if (
            window.innerWidth <= 900 &&
            sidebar.classList.contains("is-open") &&
            !sidebar.contains(event.target) &&
            !menu.contains(event.target)
        ) {
            closeSidebarOnMobile();
        }
    });

    // إغلاق القائمة باستخدام زر Escape.
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeSidebarOnMobile();
        }
    });
}

function bindLanguageControls() {
    const languageToggle = getElement("languageToggle");
    const languageSelect = getElement("languageSelect");

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            changeLanguage(state.language === "ar" ? "en" : "ar");
        });
    }

    if (languageSelect) {
        languageSelect.addEventListener("change", () => {
            changeLanguage(languageSelect.value);
        });
    }
}

function bindDynamicActions() {
    // Event delegation: يعمل حتى مع العناصر التي تُضاف لاحقًا.
    document.addEventListener("change", event => {
        const element = event.target;

        if (!(element instanceof HTMLInputElement)) {
            return;
        }

        const action = element.dataset.action;
        const id = element.dataset.id;

        if (!action || !id) {
            return;
        }

        if (action === "toggle-task") {
            toggleTask(id);
        }

        if (action === "toggle-goal") {
            toggleGoal(element.dataset.period, id);
        }
    });

    document.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");

        if (!button) {
            return;
        }

        const action = button.dataset.action;
        const id = button.dataset.id;

        if (!id) {
            return;
        }

        if (action === "delete-task") {
            deleteTask(id);
        }

        if (action === "delete-goal") {
            deleteGoal(button.dataset.period, id);
        }
    });
}


/* =========================
   12. بدء التطبيق
   ========================= */

function initializeApp() {
    loadState();

    applyTranslations();

    bindTaskForm();
    bindGoalForms();
    bindNavigation();
    bindLanguageControls();
    bindDynamicActions();

    renderAll();

    // تحديث التاريخ دوريًا إذا ظل الموقع مفتوحًا.
    window.setInterval(updateDate, 60 * 1000);

    console.info("MORGAN is ready.");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}