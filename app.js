const subjects = [
  { name: "Mathematics", icon: "∑", tone: "math" },
  { name: "Science", icon: "⚛", tone: "science" },
  { name: "English", icon: "Aa", tone: "english" },
  { name: "Social Studies", icon: "◎", tone: "social" },
  { name: "Filipino", icon: "✎", tone: "filipino" },
  { name: "ICT", icon: "⌘", tone: "ict" }
];

const resources = [
  { id: "linear-equations", subject: "Mathematics", title: "Understanding Linear Equations", description: "Explore variables, balance, and solving one-step equations.", type: "lesson", icon: "∑", duration: "12 min", progress: 65, grade: [7, 8, 9, 10] },
  { id: "ecosystems", subject: "Science", title: "Ecosystems & Energy Flow", description: "Discover how energy moves through living communities.", type: "reviewer", icon: "♧", duration: "8 min read", progress: 30, grade: [7, 8, 9, 10] },
  { id: "reading-stories", subject: "English", title: "Reading Between the Lines", description: "Practice finding themes, clues, and deeper meaning.", type: "video", icon: "▷", duration: "9 min", progress: 0, grade: [7, 8, 9, 10] },
  { id: "fractions", subject: "Mathematics", title: "Fractions Made Friendly", description: "A visual guide to adding and comparing fractions.", type: "video", icon: "▷", duration: "10 min", progress: 0, grade: [7, 8, 9] },
  { id: "cells", subject: "Science", title: "The Amazing Cell", description: "Review cell structures and the jobs they do.", type: "reviewer", icon: "◉", duration: "6 min read", progress: 0, grade: [7, 8, 9, 10] },
  { id: "paragraphs", subject: "English", title: "Writing a Strong Paragraph", description: "Build a clear topic sentence and support your ideas.", type: "lesson", icon: "Aa", duration: "15 min", progress: 0, grade: [7, 8, 9, 10] },
  { id: "geometry", subject: "Mathematics", title: "Geometry: Shapes & Angles", description: "Review the properties of polygons and angle pairs.", type: "reviewer", icon: "◇", duration: "9 min read", progress: 0, grade: [7, 8, 9, 10] },
  { id: "weather", subject: "Science", title: "Weather and Climate", description: "Understand weather patterns and climate systems.", type: "video", icon: "▷", duration: "11 min", progress: 0, grade: [7, 8, 9, 10] },
  { id: "phil-history", subject: "Social Studies", title: "A look at Philippine history", description: "Key moments and people that shaped our nation.", type: "reviewer", icon: "◎", duration: "10 min read", progress: 0, grade: [7, 8, 9, 10] },
  { id: "filipino-literature", subject: "Filipino", title: "Panitikan at mga elemento nito", description: "Kilalanin ang mga elemento ng isang akdang pampanitikan.", type: "lesson", icon: "✎", duration: "14 min", progress: 0, grade: [7, 8, 9, 10] },
  { id: "digital-citizens", subject: "ICT", title: "Being a thoughtful digital citizen", description: "Make responsible, safe choices in the digital world.", type: "video", icon: "⌘", duration: "7 min", progress: 0, grade: [7, 8, 9, 10] },
  { id: "quadratics", subject: "Mathematics", title: "Introduction to Quadratics", description: "Explore parabolas, roots, and quadratic expressions.", type: "lesson", icon: "∑", duration: "16 min", progress: 20, grade: [9, 10, 11, 12] },
  { id: "chemical-bonds", subject: "Science", title: "Chemical Bonds Explained", description: "Review ionic and covalent bonding with examples.", type: "reviewer", icon: "⚛", duration: "9 min read", progress: 0, grade: [9, 10, 11, 12] },
  { id: "argument-writing", subject: "English", title: "Building an Argument", description: "Use evidence and reasoning to support a clear claim.", type: "lesson", icon: "Aa", duration: "13 min", progress: 0, grade: [9, 10, 11, 12] },
  { id: "statistics", subject: "Mathematics", title: "Statistics in Everyday Life", description: "Read data, compare averages, and spot patterns.", type: "video", icon: "▷", duration: "12 min", progress: 0, grade: [10, 11, 12] },
  { id: "earth-systems", subject: "Science", title: "Earth's Interconnected Systems", description: "See how land, water, air, and life work together.", type: "lesson", icon: "♧", duration: "14 min", progress: 0, grade: [10, 11, 12] },
  { id: "research-writing", subject: "English", title: "The Research Paper Toolkit", description: "Plan, find sources, and organize an academic paper.", type: "reviewer", icon: "Aa", duration: "12 min read", progress: 0, grade: [11, 12] },
  { id: "functions", subject: "Mathematics", title: "Functions and Their Graphs", description: "Connect equations, tables, and graphs of functions.", type: "lesson", icon: "∑", duration: "18 min", progress: 0, grade: [11, 12] },
  { id: "physics-motion", subject: "Science", title: "Motion, Forces & Momentum", description: "Review the principles behind movement and force.", type: "video", icon: "▷", duration: "15 min", progress: 0, grade: [11, 12] },
  { id: "world-history", subject: "Social Studies", title: "Connecting world histories", description: "Explore connections between people, places, and change.", type: "lesson", icon: "◎", duration: "16 min", progress: 0, grade: [11, 12] },
  { id: "academic-filipino", subject: "Filipino", title: "Pagsulat ng akademikong teksto", description: "Mga gabay sa malinaw at mabisang pagsulat akademiko.", type: "reviewer", icon: "✎", duration: "11 min read", progress: 0, grade: [11, 12] },
  { id: "media-literacy", subject: "ICT", title: "Media Literacy & Misinformation", description: "Check sources and think critically about online content.", type: "video", icon: "⌘", duration: "8 min", progress: 0, grade: [10, 11, 12] }
];

const quizzes = [
  { id: "math-quiz", subject: "Mathematics", title: "Math foundations", description: "Equations, fractions, and number sense.", icon: "∑", questions: [
    { question: "What is the value of x in 3x + 5 = 20?", options: ["3", "5", "8", "15"], answer: 1, explanation: "Subtract 5 from both sides to get 3x = 15, then divide by 3. So x = 5." },
    { question: "What is ¾ expressed as a percentage?", options: ["25%", "50%", "75%", "80%"], answer: 2, explanation: "Divide 3 by 4 to get 0.75. Multiply by 100 to get 75%." },
    { question: "A rectangle is 6 cm long and 4 cm wide. What is its area?", options: ["10 cm²", "20 cm²", "24 cm²", "48 cm²"], answer: 2, explanation: "Area = length × width, so 6 × 4 = 24 cm²." }
  ] },
  { id: "science-quiz", subject: "Science", title: "Science explorers", description: "Cells, ecosystems, and our planet.", icon: "⚛", questions: [
    { question: "Which part of a plant cell captures energy from sunlight?", options: ["Nucleus", "Chloroplast", "Cell wall", "Vacuole"], answer: 1, explanation: "Chloroplasts contain chlorophyll, which captures sunlight for photosynthesis." },
    { question: "What is the main source of energy for most ecosystems?", options: ["The Moon", "The soil", "The Sun", "Wind"], answer: 2, explanation: "The Sun supplies the energy that producers use to begin most food chains." },
    { question: "Which state of matter has a fixed volume but takes the shape of its container?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: 1, explanation: "A liquid keeps its volume but flows to match the shape of its container." }
  ] },
  { id: "english-quiz", subject: "English", title: "English essentials", description: "Reading, vocabulary, and writing.", icon: "Aa", questions: [
    { question: "What is the main idea of a passage?", options: ["A small detail", "The central point or message", "The last sentence", "A character's name"], answer: 1, explanation: "The main idea is the central point the author wants the reader to understand." },
    { question: "Which word is a synonym for 'curious'?", options: ["Inquisitive", "Indifferent", "Certain", "Silent"], answer: 0, explanation: "Curious and inquisitive both describe a desire to learn or know more." },
    { question: "What does a topic sentence usually do?", options: ["Ends a story", "Introduces a paragraph's main point", "Lists every source", "Asks an unrelated question"], answer: 1, explanation: "A topic sentence introduces the central point that the paragraph will develop." }
  ] },
  { id: "social-quiz", subject: "Social Studies", title: "People & places", description: "History, geography, and community.", icon: "◎", questions: [
    { question: "What does a map scale help you understand?", options: ["The map's age", "Distance on the ground", "A location's climate", "The map's author"], answer: 1, explanation: "A map scale shows how distances on the map compare to real-world distances." },
    { question: "Which is an example of a primary historical source?", options: ["A textbook summary", "A documentary made today", "A letter written during the event", "A modern encyclopedia"], answer: 2, explanation: "A letter created during the time being studied is a first-hand primary source." },
    { question: "What is a community?", options: ["People who share a place or connection", "A type of mountain", "A single historical date", "A map symbol"], answer: 0, explanation: "A community is a group connected by a shared place, interest, or identity." }
  ] }
];

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const defaultSessions = [
  { subject: "Mathematics", day: 0, time: "16:00" },
  { subject: "Science", day: 1, time: "16:30" },
  { subject: "English", day: 2, time: "16:00" },
  { subject: "Filipino", day: 3, time: "16:30" },
  { subject: "Social Studies", day: 4, time: "15:30" }
];
let currentGrade = 10;
let libraryType = "all";
let selectedSubject = "all";
let activeQuiz = null;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let sessions = loadSessions();

function loadSessions() {
  try {
    const saved = localStorage.getItem("studyspace-sessions");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.every(item => item && typeof item.subject === "string" && Number.isInteger(item.day) && item.day >= 0 && item.day < 7 && typeof item.time === "string")) return parsed;
    }
  } catch (error) {
    console.warn("Could not read the saved study schedule.", error);
  }
  return defaultSessions.map(item => ({ ...item }));
}

function saveSessions() {
  try {
    localStorage.setItem("studyspace-sessions", JSON.stringify(sessions));
  } catch (error) {
    console.error("Could not save the study schedule.", error);
    alert("Your session could not be saved on this device. Check your browser storage settings and try again.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function matchingResources() {
  return resources.filter(resource => resource.grade.includes(currentGrade));
}

function resourceCard(resource, compact = false) {
  const typeNames = { lesson: "Lesson", reviewer: "Reviewer", video: "Video lesson" };
  const actionNames = { lesson: "Start lesson", reviewer: "Open reviewer", video: "Watch lesson" };
  const progress = resource.progress || 0;
  return `<article class="${compact ? "continue-card" : "resource-card"}">
    <div class="card-top"><span class="subject-chip">${escapeHtml(resource.subject)}</span><span class="card-type">${typeNames[resource.type]}</span></div>
    <div class="card-icon">${resource.icon}</div>
    <h3>${escapeHtml(resource.title)}</h3><p>${escapeHtml(resource.description)}</p>
    ${progress ? `<div class="card-progress"><span style="width:${progress}%"></span></div>` : ""}
    <div class="card-bottom"><span>${progress ? `${progress}% complete · ` : ""}${escapeHtml(resource.duration)}</span><button class="card-link" data-resource="${escapeHtml(resource.id)}">${actionNames[resource.type]} →</button></div>
  </article>`;
}

function renderHome() {
  const selected = matchingResources();
  const continuing = selected.filter(item => item.progress > 0).slice(0, 3);
  document.getElementById("continue-grid").innerHTML = continuing.length ? continuing.map(item => resourceCard(item, true)).join("") : selected.slice(0, 3).map(item => resourceCard(item, true)).join("");
  document.getElementById("subject-grid").innerHTML = subjects.map(subject => {
    const count = selected.filter(resource => resource.subject === subject.name).length;
    return `<button class="subject-item" data-subject="${escapeHtml(subject.name)}"><span class="subject-icon">${subject.icon}</span><span><strong>${escapeHtml(subject.name)}</strong><small>${count} learning ${count === 1 ? "material" : "materials"}</small></span></button>`;
  }).join("");
  const upcoming = sessions.slice().sort((a, b) => a.day - b.day || a.time.localeCompare(b.time)).slice(0, 3);
  document.getElementById("schedule-preview").innerHTML = `<div class="study-preview-list">${upcoming.map(item => `<div class="study-preview-row"><span class="study-day">${dayNames[item.day].slice(0, 3).toUpperCase()}</span><div><strong>${escapeHtml(item.subject)}</strong><small>${formatTime(item.time)}</small></div></div>`).join("")}</div>`;
}

function renderLibrary() {
  const filtered = matchingResources().filter(item => (libraryType === "all" || item.type === libraryType) && (selectedSubject === "all" || item.subject === selectedSubject));
  const search = document.getElementById("library-search").value.trim().toLowerCase();
  const results = filtered.filter(item => `${item.title} ${item.subject} ${item.description}`.toLowerCase().includes(search));
  document.getElementById("library-grid").innerHTML = results.map(item => resourceCard(item)).join("");
  document.getElementById("results-label").textContent = `${results.length} ${results.length === 1 ? "material" : "materials"} for Grade ${currentGrade}`;
  document.getElementById("library-empty").classList.toggle("hidden", results.length > 0);
}

function renderSpecialViews() {
  const selected = matchingResources();
  document.getElementById("reviewer-grid").innerHTML = selected.filter(item => item.type === "reviewer").map(item => resourceCard(item)).join("");
  document.getElementById("video-grid").innerHTML = selected.filter(item => item.type === "video").map(item => resourceCard(item)).join("");
  document.getElementById("quiz-list").innerHTML = quizzes.map(quiz => `<article class="quiz-card"><div class="card-icon">${quiz.icon}</div><span class="subject-chip">${escapeHtml(quiz.subject)}</span><h3>${escapeHtml(quiz.title)}</h3><p>${escapeHtml(quiz.description)}</p><div class="quiz-meta"><span>${quiz.questions.length} questions</span><span>·</span><span>About 5 min</span></div><button class="button button-primary" data-quiz="${quiz.id}">Start practice quiz <span>→</span></button></article>`).join("");
}

function formatTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour = hours % 12 || 12;
  return `${hour}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function renderSchedule() {
  const now = new Date();
  const monday = new Date(now);
  const offset = (now.getDay() + 6) % 7;
  monday.setDate(now.getDate() - offset);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const dateOptions = { month: "short", day: "numeric" };
  document.getElementById("week-range").textContent = `${monday.toLocaleDateString(undefined, dateOptions)} – ${sunday.toLocaleDateString(undefined, { ...dateOptions, year: "numeric" })}`;
  const todayIndex = offset;
  document.getElementById("weekly-grid").innerHTML = dayNames.map((day, dayIndex) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + dayIndex);
    const daySessions = sessions.filter(item => item.day === dayIndex).sort((a, b) => a.time.localeCompare(b.time));
    return `<section class="day-column ${dayIndex === todayIndex ? "today" : ""}"><div class="day-heading"><strong>${day.slice(0, 3)}</strong><span>${date.getDate()}</span></div><div class="session-list">${daySessions.map(item => `<div class="schedule-session"><button class="session-delete" data-session="${sessions.indexOf(item)}" aria-label="Remove ${escapeHtml(item.subject)} session">×</button><strong>${escapeHtml(item.subject)}</strong><small>${formatTime(item.time)}</small></div>`).join("")}</div></section>`;
  }).join("");
  document.getElementById("schedule-preview").innerHTML = `<div class="study-preview-list">${sessions.slice().sort((a, b) => a.day - b.day || a.time.localeCompare(b.time)).slice(0, 3).map(item => `<div class="study-preview-row"><span class="study-day">${dayNames[item.day].slice(0, 3).toUpperCase()}</span><div><strong>${escapeHtml(item.subject)}</strong><small>${formatTime(item.time)}</small></div></div>`).join("")}</div>`;
}

function updateGrade() {
  currentGrade = Number(document.getElementById("grade-select").value);
  document.getElementById("profile-grade").textContent = currentGrade;
  document.querySelectorAll(".grade-inline").forEach(element => element.textContent = currentGrade);
  document.querySelectorAll(".grade-picker select option").forEach(option => { option.selected = Number(option.value) === currentGrade; });
  renderHome();
  renderLibrary();
  renderSpecialViews();
  renderSchedule();
}

function navigate(viewName) {
  const validViews = ["home", "library", "reviewers", "quizzes", "videos", "schedule"];
  if (!validViews.includes(viewName)) return;
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `view-${viewName}`));
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.view === viewName));
  const labels = { home: "Home", library: "Learning library", reviewers: "Reviewers", quizzes: "Mock quizzes", videos: "Video lessons", schedule: "Study schedule" };
  document.getElementById("breadcrumb-current").textContent = labels[viewName];
  document.getElementById("sidebar").classList.remove("open");
  if (viewName === "schedule") renderSchedule();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(quizId) {
  activeQuiz = quizzes.find(quiz => quiz.id === quizId);
  if (!activeQuiz) return;
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  document.getElementById("quiz-modal").classList.remove("hidden");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const content = document.getElementById("quiz-content");
  if (!activeQuiz) return;
  if (quizIndex >= activeQuiz.questions.length) {
    const percentage = Math.round(quizScore / activeQuiz.questions.length * 100);
    content.innerHTML = `<div class="quiz-result"><div class="result-mark">${percentage >= 70 ? "✦" : "↗"}</div><div class="eyebrow">PRACTICE COMPLETE</div><h2>${percentage >= 70 ? "Great work!" : "Nice effort!"}</h2><p>You got ${quizScore} out of ${activeQuiz.questions.length} questions right (${percentage}%). Keep practicing and you’ll keep growing.</p><button class="button button-primary" id="quiz-retry">Try again</button></div>`;
    document.getElementById("quiz-retry").addEventListener("click", () => startQuiz(activeQuiz.id));
    return;
  }
  const question = activeQuiz.questions[quizIndex];
  content.innerHTML = `<div class="eyebrow">${escapeHtml(activeQuiz.subject)} · PRACTICE QUIZ</div><h2 id="quiz-title">${escapeHtml(activeQuiz.title)}</h2><div class="quiz-progress-label"><span>Question ${quizIndex + 1} of ${activeQuiz.questions.length}</span><span>${quizScore} correct so far</span></div><div class="card-progress"><span style="width:${Math.round(quizIndex / activeQuiz.questions.length * 100)}%"></span></div><div class="quiz-question">${escapeHtml(question.question)}</div><div class="answer-list">${question.options.map((option, index) => `<button class="answer-option" data-answer="${index}">${String.fromCharCode(65 + index)}. ${escapeHtml(option)}</button>`).join("")}</div><div id="answer-feedback"></div>`;
  content.querySelectorAll(".answer-option").forEach(button => button.addEventListener("click", () => answerQuiz(Number(button.dataset.answer))));
}

function answerQuiz(answerIndex) {
  if (quizAnswered || !activeQuiz) return;
  quizAnswered = true;
  const question = activeQuiz.questions[quizIndex];
  const buttons = document.querySelectorAll(".answer-option");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    else if (index === answerIndex) button.classList.add("incorrect");
  });
  const correct = answerIndex === question.answer;
  if (correct) quizScore += 1;
  document.getElementById("answer-feedback").innerHTML = `<div class="answer-feedback"><strong>${correct ? "That’s right!" : "Not quite — keep going!"}</strong> ${escapeHtml(question.explanation)}</div><button class="button button-primary quiz-next" id="quiz-next">${quizIndex === activeQuiz.questions.length - 1 ? "See my results" : "Next question"} →</button>`;
  document.getElementById("quiz-next").addEventListener("click", () => { quizIndex += 1; quizAnswered = false; renderQuizQuestion(); });
}

function openSessionModal() {
  document.getElementById("session-subject").innerHTML = subjects.map(subject => `<option value="${escapeHtml(subject.name)}">${escapeHtml(subject.name)}</option>`).join("");
  document.getElementById("session-day").innerHTML = dayNames.map((day, index) => `<option value="${index}">${day}</option>`).join("");
  document.getElementById("session-day").value = String((new Date().getDay() + 6) % 7);
  document.getElementById("schedule-modal").classList.remove("hidden");
  document.getElementById("session-subject").focus();
}

function closeSessionModal() {
  document.getElementById("schedule-modal").classList.add("hidden");
}

function initialize() {
  const today = new Date();
  document.getElementById("today-date").textContent = today.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  document.getElementById("subject-filter").innerHTML += subjects.map(subject => `<option value="${escapeHtml(subject.name)}">${escapeHtml(subject.name)}</option>`).join("");
  document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => navigate(link.dataset.view)));
  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
  document.getElementById("grade-select").addEventListener("change", updateGrade);
  document.getElementById("library-search").addEventListener("input", renderLibrary);
  document.getElementById("subject-filter").addEventListener("change", event => { selectedSubject = event.target.value; renderLibrary(); });
  document.getElementById("library-tabs").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    libraryType = button.dataset.filter;
    document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.toggle("active", tab === button));
    renderLibrary();
  });
  document.addEventListener("click", event => {
    const resourceButton = event.target.closest("[data-resource]");
    if (resourceButton) {
      const resource = resources.find(item => item.id === resourceButton.dataset.resource);
      if (resource?.type === "video") {
        alert("Video lesson: " + resource.title + "\n\nVideo lessons are ready to connect to your school's lesson videos.");
      } else {
        alert(resource.title + "\n\n" + resource.description + "\n\nThis learning material is ready to connect to your school's lesson content.");
      }
    }
    const subjectButton = event.target.closest("[data-subject]");
    if (subjectButton) {
      navigate("library");
      selectedSubject = subjectButton.dataset.subject;
      document.getElementById("subject-filter").value = selectedSubject;
      renderLibrary();
    }
    const quizButton = event.target.closest("[data-quiz]");
    if (quizButton) startQuiz(quizButton.dataset.quiz);
    const removeButton = event.target.closest("[data-session]");
    if (removeButton) {
      sessions.splice(Number(removeButton.dataset.session), 1);
      saveSessions();
      renderSchedule();
    }
  });
  document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
  document.getElementById("add-session").addEventListener("click", openSessionModal);
  document.getElementById("schedule-close").addEventListener("click", closeSessionModal);
  document.getElementById("schedule-modal").addEventListener("click", event => { if (event.target.id === "schedule-modal") closeSessionModal(); });
  document.getElementById("schedule-form").addEventListener("submit", event => {
    event.preventDefault();
    sessions.push({ subject: document.getElementById("session-subject").value, day: Number(document.getElementById("session-day").value), time: document.getElementById("session-time").value });
    saveSessions();
    renderSchedule();
    closeSessionModal();
  });
  document.getElementById("quiz-close").addEventListener("click", () => document.getElementById("quiz-modal").classList.add("hidden"));
  document.getElementById("quiz-modal").addEventListener("click", event => { if (event.target.id === "quiz-modal") document.getElementById("quiz-modal").classList.add("hidden"); });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      navigate("library");
      document.getElementById("library-search").focus();
    }
    if (event.key === "Escape") {
      closeSessionModal();
      document.getElementById("quiz-modal").classList.add("hidden");
      document.getElementById("sidebar").classList.remove("open");
    }
  });
  renderHome();
  renderLibrary();
  renderSpecialViews();
  renderSchedule();
}

initialize();
