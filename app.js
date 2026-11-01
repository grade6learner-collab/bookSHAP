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
  { id: "media-literacy", subject: "ICT", title: "Media Literacy & Misinformation", description: "Check sources and think critically about online content.", type: "video", icon: "⌘", duration: "8 min", progress: 0, grade: [10, 11, 12] },
  { id: "sample-g7-fractions", subject: "Mathematics", title: "Grade 7 Reviewer: Fractions", description: "Equivalent fractions, simplifying, and adding unlike denominators.", type: "reviewer", icon: "∑", duration: "5 min read", progress: 0, grade: [7], content: [
    { heading: "1. Equivalent fractions", body: "Equivalent fractions name the same amount. Multiply or divide the numerator and denominator by the same nonzero number. For example, 1/2 = 2/4 = 4/8." },
    { heading: "2. Simplify before you finish", body: "A fraction is in simplest form when its numerator and denominator have no common factor greater than 1. Divide both by their greatest common factor: 12/18 = 2/3." },
    { heading: "3. Add fractions with unlike denominators", body: "First find a common denominator, then add the numerators. Keep the denominator and simplify the result.\nExample: 1/3 + 1/4 = 4/12 + 3/12 = 7/12." },
    { heading: "Try it", body: "What is 2/5 + 1/10? Check: 2/5 = 4/10, so the sum is 5/10 = 1/2." }
  ] },
  { id: "sample-g8-cells", subject: "Science", title: "Grade 8 Reviewer: Cells", description: "Cell parts, their functions, and plant–animal cell differences.", type: "reviewer", icon: "⚛", duration: "5 min read", progress: 0, grade: [8], content: [
    { heading: "1. Cells are living things' basic units", body: "All living organisms are made of cells. Some organisms consist of one cell; plants and animals are made of many specialized cells." },
    { heading: "2. Match each structure to its job", body: "The cell membrane controls what enters and leaves. The nucleus stores DNA and helps direct cell activities. The cytoplasm is where many cell processes happen. Mitochondria release usable energy from food." },
    { heading: "3. Plant cells have extra structures", body: "Plant cells have a cell wall for support, chloroplasts that capture light for photosynthesis, and usually a large central vacuole for storing water and other materials. Animal cells do not have cell walls or chloroplasts." },
    { heading: "Try it", body: "Which structure helps a plant cell make sugars using sunlight? Check: chloroplasts contain chlorophyll, which captures light energy." }
  ] },
  { id: "sample-g9-theme", subject: "English", title: "Grade 9 Reviewer: Theme & Evidence", description: "Distinguish a story's theme from its topic and support an idea with evidence.", type: "reviewer", icon: "Aa", duration: "5 min read", progress: 0, grade: [9], content: [
    { heading: "1. Topic is not the same as theme", body: "A topic is a broad subject, such as friendship or courage. A theme is a message about that subject, expressed as a complete idea—for example, trust can grow when friends communicate honestly." },
    { heading: "2. Build an interpretation from clues", body: "Notice a character's choices, conflicts, repeated images, and how the story ends. Look for a pattern across the text rather than treating one event as proof of the whole theme." },
    { heading: "3. Support your reading", body: "State your interpretation, point to a relevant scene or short quotation, then explain how that evidence supports your idea. A quotation by itself does not explain your reasoning." },
    { heading: "Try it", body: "A character admits a mistake, repairs a friendship, and later apologizes sooner. What theme might these events suggest? Check: taking responsibility can help rebuild trust. Support this interpretation with details from the story." }
  ] },
  { id: "sample-g10-quadratics", subject: "Mathematics", title: "Grade 10 Reviewer: Quadratics", description: "Recognize quadratic expressions, factor simple trinomials, and check solutions.", type: "reviewer", icon: "∑", duration: "6 min read", progress: 0, grade: [10], content: [
    { heading: "1. Recognize a quadratic", body: "A quadratic expression has a squared variable as its highest power. The standard form is ax² + bx + c, where a is not zero. Its graph is a parabola." },
    { heading: "2. Factor a simple trinomial", body: "For x² + bx + c, look for two numbers whose product is c and whose sum is b.\nExample: x² + 5x + 6 = (x + 2)(x + 3), because 2 × 3 = 6 and 2 + 3 = 5." },
    { heading: "3. Solve and check", body: "To solve x² + 5x + 6 = 0, write (x + 2)(x + 3) = 0. If a product is zero, at least one factor is zero, so x = −2 or x = −3. Substitute each value into the original equation to check." },
    { heading: "Try it", body: "Factor x² + 7x + 12. Check: (x + 3)(x + 4), since 3 × 4 = 12 and 3 + 4 = 7." }
  ] },
  { id: "sample-g11-functions", subject: "Mathematics", title: "Grade 11 Reviewer: Functions", description: "Evaluate functions, interpret notation, and distinguish domain from range.", type: "reviewer", icon: "∑", duration: "6 min read", progress: 0, grade: [11], content: [
    { heading: "1. Read function notation", body: "In f(x), the input is x and the output is f(x). The notation does not mean f multiplied by x." },
    { heading: "2. Evaluate a function", body: "Replace each x with the given input and follow the order of operations.\nExample: if f(x) = 2x² − 1, then f(3) = 2(3²) − 1 = 18 − 1 = 17." },
    { heading: "3. Domain and range", body: "The domain is the set of allowed inputs; the range is the set of outputs those inputs produce. For a table, read domain from the input column and range from the output column. For a graph, look from left to right for domain and bottom to top for range." },
    { heading: "Try it", body: "If g(x) = 3x + 2, what is g(−1)? Check: g(−1) = 3(−1) + 2 = −1." }
  ] },
  { id: "sample-g12-source-check", subject: "ICT", title: "Grade 12 Reviewer: Checking Online Sources", description: "Use lateral reading and evidence to evaluate a claim before sharing it.", type: "reviewer", icon: "⌘", duration: "6 min read", progress: 0, grade: [12], content: [
    { heading: "1. Pause before sharing", body: "A dramatic headline or image can be designed to trigger a quick reaction. Read beyond the headline, check the date, and identify the specific claim being made." },
    { heading: "2. Read laterally", body: "Instead of trusting a site's own description of itself, open other reliable sources in new tabs. Look for independent reporting, relevant expertise, and a traceable original source for key evidence." },
    { heading: "3. Check evidence and context", body: "Ask whether data are presented in context, whether a quotation is complete, and whether images match the date and place claimed. Separate a source's evidence from its opinion." },
    { heading: "4. Decide responsibly", body: "Corroborate important claims with multiple independent, credible sources. If evidence is weak or unclear, do not present the claim as established fact; choose not to share it." },
    { heading: "Try it", body: "A post cites an expert but links only to a screenshot. What is a useful next step? Check: search for the expert and statement using independent sources, then find the original study or interview before drawing a conclusion." }
  ] },
  { id: "shap-modules-g7", subject: "SHAP Modules", title: "Grade 7 SHAP Self-Learning Modules", description: "Official Kaunlaran High School self-learning modules for Grade 7.", type: "reviewer", icon: "▤", duration: "Official modules", progress: 0, grade: [7], sourceUrl: "https://sites.google.com/deped.gov.ph/khs-self-learning-modules/grade-seven?authuser=0", content: [
    { heading: "Official Grade 7 materials", body: "Open the SHAP Self-Learning Modules page to browse and study the available subject modules." }
  ] },
  { id: "shap-modules-g8", subject: "SHAP Modules", title: "Grade 8 SHAP Self-Learning Modules", description: "Official Kaunlaran High School self-learning modules for Grade 8.", type: "reviewer", icon: "▤", duration: "Official modules", progress: 0, grade: [8], sourceUrl: "https://sites.google.com/deped.gov.ph/khs-self-learning-modules/grade-eight", content: [
    { heading: "Official Grade 8 materials", body: "Open the SHAP Self-Learning Modules page to browse and study the available subject modules." }
  ] },
  { id: "shap-modules-g9", subject: "SHAP Modules", title: "Grade 9 SHAP Self-Learning Modules", description: "Official Kaunlaran High School self-learning modules for Grade 9.", type: "reviewer", icon: "▤", duration: "Official modules", progress: 0, grade: [9], sourceUrl: "https://sites.google.com/deped.gov.ph/khs-self-learning-modules/grade-nine", content: [
    { heading: "Official Grade 9 materials", body: "Open the SHAP Self-Learning Modules page to browse and study the available subject modules." }
  ] },
  { id: "shap-modules-g10", subject: "SHAP Modules", title: "Grade 10 SHAP Self-Learning Modules", description: "Official Kaunlaran High School self-learning modules for Grade 10.", type: "reviewer", icon: "▤", duration: "Official modules", progress: 0, grade: [10], sourceUrl: "https://sites.google.com/deped.gov.ph/grade10/grade-ten", content: [
    { heading: "Official Grade 10 materials", body: "Open the SHAP Self-Learning Modules page to browse and study the available subject modules." }
  ] },
  { id: "shap-modules-g11", subject: "SHAP Modules", title: "Grade 11 SHAP Self-Learning Modules", description: "Official Kaunlaran High School Senior High School learning modules for Grade 11.", type: "reviewer", icon: "▤", duration: "Official modules", progress: 0, grade: [11], sourceUrl: "https://sites.google.com/deped.gov.ph/khs-self-learning-modules/senior-high-school", content: [
    { heading: "Official Grade 11 materials", body: "Open the SHAP Senior High School Self-Learning Modules page to browse and study the available subject modules." }
  ] },
  { id: "shap-modules-g12", subject: "SHAP Modules", title: "Grade 12 SHAP Self-Learning Modules", description: "Official Kaunlaran High School Senior High School learning modules for Grade 12.", type: "reviewer", icon: "▤", duration: "Official modules", progress: 0, grade: [12], sourceUrl: "https://sites.google.com/deped.gov.ph/khs-self-learning-modules/senior-high-school", content: [
    { heading: "Official Grade 12 materials", body: "Open the SHAP Senior High School Self-Learning Modules page to browse and study the available subject modules." }
  ] }
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
const SCHOOL_EMAIL_DOMAIN = "shap.edu.ph";
const AUTH_STORAGE_KEY = "studyspace-prototype-user";
const MATERIALS_STORAGE_KEY = "studyspace-teacher-materials";
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
let activeUser = loadActiveUser();
let teacherMaterials = loadTeacherMaterials();
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let sessions = loadSessions();

function loadActiveUser() {
  try {
    const saved = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null");
    if (saved && typeof saved.email === "string" && saved.email.toLowerCase().endsWith(`@${SCHOOL_EMAIL_DOMAIN}`) && ["student", "teacher"].includes(saved.role)) return saved;
  } catch (error) {
    console.warn("Could not read the saved prototype sign-in.", error);
  }
  return null;
}

function loadTeacherMaterials() {
  try {
    const saved = JSON.parse(localStorage.getItem(MATERIALS_STORAGE_KEY) || "[]");
    if (Array.isArray(saved)) return saved.filter(item => item && typeof item.id === "string" && ["reviewer", "quiz"].includes(item.kind) && typeof item.title === "string" && typeof item.subject === "string" && Array.isArray(item.grades));
  } catch (error) {
    console.warn("Could not read the saved teacher materials.", error);
  }
  return [];
}

function saveTeacherMaterials() {
  try {
    localStorage.setItem(MATERIALS_STORAGE_KEY, JSON.stringify(teacherMaterials));
    return true;
  } catch (error) {
    console.error("Could not save teacher materials.", error);
    alert("This material could not be saved in this browser. Check your browser storage settings and try again.");
    return false;
  }
}

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

function teacherReviewers() {
  return teacherMaterials.filter(item => item.kind === "reviewer").map(item => ({
    id: item.id,
    subject: item.subject,
    title: item.title,
    description: item.content,
    content: item.content,
    type: "reviewer",
    icon: subjects.find(subject => subject.name === item.subject)?.icon || "▧",
    duration: "Teacher reviewer",
    progress: 0,
    grade: item.grades
  }));
}

function availableQuizzes() {
  const created = teacherMaterials.filter(item => item.kind === "quiz").map(item => ({
    id: item.id,
    subject: item.subject,
    title: item.title,
    description: `Teacher-created practice · Grades ${item.grades.join(", ")}`,
    icon: subjects.find(subject => subject.name === item.subject)?.icon || "◉",
    grade: item.grades,
    questions: [item.question]
  }));
  return quizzes.concat(created);
}

function matchingResources() {
  return resources.concat(teacherReviewers()).filter(resource => resource.grade.includes(currentGrade));
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
  document.getElementById("quiz-list").innerHTML = availableQuizzes().filter(quiz => !quiz.grade || quiz.grade.includes(currentGrade)).map(quiz => `<article class="quiz-card"><div class="card-icon">${quiz.icon}</div><span class="subject-chip">${escapeHtml(quiz.subject)}</span><h3>${escapeHtml(quiz.title)}</h3><p>${escapeHtml(quiz.description)}</p><div class="quiz-meta"><span>${quiz.questions.length} ${quiz.questions.length === 1 ? "question" : "questions"}</span><span>·</span><span>About 5 min</span></div><button class="button button-primary" data-quiz="${escapeHtml(quiz.id)}">Start practice quiz <span>→</span></button></article>`).join("");
}

function reviewerBodyHtml(resource) {
  const sourceLink = resource.sourceUrl
    ? `<a class="button button-primary reviewer-source-link" href="${escapeHtml(resource.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open official Grade ${currentGrade} modules <span>↗</span></a>`
    : "";
  if (Array.isArray(resource.content)) {
    return resource.content.map(section => `<section class="reviewer-section"><h3>${escapeHtml(section.heading)}</h3><p>${escapeHtml(section.body)}</p></section>`).join("") + sourceLink;
  }
  if (typeof resource.content === "string") {
    return `<section class="reviewer-section"><p>${escapeHtml(resource.content)}</p></section>${sourceLink}`;
  }
  return `<section class="reviewer-section"><h3>Review focus</h3><p>${escapeHtml(resource.description)}</p><p>Use this topic as a starting point: explain the key idea in your own words, then support it with an example from your class notes.</p></section>${sourceLink}`;
}

function openReviewer(resource) {
  document.getElementById("reviewer-subject").textContent = `GRADE ${currentGrade} · ${resource.subject}`;
  document.getElementById("reviewer-modal-title").textContent = resource.title;
  document.getElementById("reviewer-body").innerHTML = reviewerBodyHtml(resource);
  document.getElementById("reviewer-modal").classList.remove("hidden");
  document.getElementById("reviewer-close").focus();
}

function closeReviewer() {
  document.getElementById("reviewer-modal").classList.add("hidden");
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

function updateProfile() {
  if (!activeUser) return;
  document.getElementById("profile-name").textContent = activeUser.role === "teacher" ? "Teacher" : "Student";
  document.getElementById("profile-email").textContent = activeUser.email;
  document.querySelector(".grade-picker").classList.toggle("hidden", activeUser.role === "teacher");
  document.querySelector(".teacher-nav").classList.toggle("hidden", activeUser.role !== "teacher");
}

function enterApp(user) {
  activeUser = user;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Could not save the prototype sign-in.", error);
    document.getElementById("login-error").textContent = "Your sign-in could not be saved in this browser. Check your browser storage settings and try again.";
    document.getElementById("login-error").classList.remove("hidden");
    activeUser = null;
    return;
  }
  document.body.classList.add("signed-in");
  updateProfile();
  renderTeacherMaterials();
  navigate(user.role === "teacher" ? "teacher" : "home");
}

function signOut() {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.error("Could not clear the prototype sign-in.", error);
    alert("Could not sign out in this browser. Check your browser storage settings and try again.");
    return;
  }
  activeUser = null;
  document.body.classList.remove("signed-in");
  document.getElementById("login-form").reset();
  document.getElementById("login-error").classList.add("hidden");
  document.getElementById("login-email").focus();
}

function gradeSelection(value) {
  return value === "all" ? [7, 8, 9, 10, 11, 12] : [Number(value)];
}

function renderTeacherMaterials() {
  const list = document.getElementById("teacher-material-list");
  if (!list) return;
  if (teacherMaterials.length === 0) {
    list.innerHTML = `<div class="teacher-empty">You haven’t published any materials yet. Use a form above to create your first one.</div>`;
    return;
  }
  list.innerHTML = `<div class="teacher-material-list">${teacherMaterials.map(item => `<div class="teacher-material-row"><span class="teacher-material-mark">${item.kind === "quiz" ? "◉" : "▧"}</span><div class="teacher-material-copy"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subject)} · ${item.kind === "quiz" ? "Mock quiz" : "Reviewer"} · Grades ${escapeHtml(item.grades.join(", "))}</small></div><button type="button" data-delete-material="${escapeHtml(item.id)}" aria-label="Delete ${escapeHtml(item.title)}">Delete</button></div>`).join("")}</div>`;
}

function navigate(viewName) {
  const validViews = ["home", "library", "reviewers", "quizzes", "videos", "schedule", "teacher"];
  if (!validViews.includes(viewName)) return;
  if (!activeUser || (viewName === "teacher" && activeUser.role !== "teacher")) return;
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `view-${viewName}`));
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.view === viewName));
  const labels = { home: "Home", library: "Learning library", reviewers: "Reviewers", quizzes: "Mock quizzes", videos: "Video lessons", schedule: "Study schedule", teacher: "Teacher studio" };
  document.getElementById("breadcrumb-current").textContent = labels[viewName];
  document.getElementById("sidebar").classList.remove("open");
  if (viewName === "schedule") renderSchedule();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz(quizId) {
  activeQuiz = availableQuizzes().find(quiz => quiz.id === quizId);
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
  document.querySelectorAll("#reviewer-form select[name='subject'], #teacher-quiz-form select[name='subject']").forEach(select => {
    select.innerHTML = subjects.map(subject => `<option value="${escapeHtml(subject.name)}">${escapeHtml(subject.name)}</option>`).join("");
  });
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
      const resource = resources.concat(teacherReviewers()).find(item => item.id === resourceButton.dataset.resource);
      if (resource?.type === "reviewer") {
        openReviewer(resource);
      } else if (resource?.type === "video") {
        alert("Video lesson: " + resource.title + "\n\nVideo lessons are ready to connect to your school's lesson videos.");
      } else if (resource?.content) {
        alert(resource.title + "\n\n" + resource.content);
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
    const deleteMaterialButton = event.target.closest("[data-delete-material]");
    if (deleteMaterialButton && activeUser?.role === "teacher") {
      const materialIndex = teacherMaterials.findIndex(item => item.id === deleteMaterialButton.dataset.deleteMaterial);
      if (materialIndex >= 0) {
        const [deleted] = teacherMaterials.splice(materialIndex, 1);
        if (saveTeacherMaterials()) {
          renderTeacherMaterials();
          renderHome();
          renderLibrary();
          renderSpecialViews();
        } else {
          teacherMaterials.splice(materialIndex, 0, deleted);
        }
      }
    }
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
  document.getElementById("reviewer-close").addEventListener("click", closeReviewer);
  document.getElementById("reviewer-modal").addEventListener("click", event => { if (event.target.id === "reviewer-modal") closeReviewer(); });
  document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();
    const errorBox = document.getElementById("login-error");
    const email = document.getElementById("login-email").value.trim().toLowerCase();
    const role = document.querySelector("input[name='role']:checked").value;
    if (!email.endsWith(`@${SCHOOL_EMAIL_DOMAIN}`)) {
      errorBox.textContent = `Please use your school email ending in @${SCHOOL_EMAIL_DOMAIN}.`;
      errorBox.classList.remove("hidden");
      return;
    }
    errorBox.classList.add("hidden");
    enterApp({ email, role });
  });
  document.getElementById("sign-out").addEventListener("click", signOut);
  document.getElementById("reviewer-form").addEventListener("submit", event => {
    event.preventDefault();
    if (activeUser?.role !== "teacher") return;
    const form = event.currentTarget;
    const material = {
      id: `teacher-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      kind: "reviewer",
      title: form.elements.title.value.trim(),
      subject: form.elements.subject.value,
      grades: gradeSelection(form.elements.grades.value),
      content: form.elements.content.value.trim()
    };
    if (!material.title || !material.content) return;
    teacherMaterials.push(material);
    if (!saveTeacherMaterials()) {
      teacherMaterials.pop();
      return;
    }
    form.reset();
    renderTeacherMaterials();
    renderHome();
    renderLibrary();
    renderSpecialViews();
  });
  document.getElementById("teacher-quiz-form").addEventListener("submit", event => {
    event.preventDefault();
    if (activeUser?.role !== "teacher") return;
    const form = event.currentTarget;
    const options = [0, 1, 2, 3].map(index => form.elements[`option${index}`].value.trim());
    const questionText = form.elements.question.value.trim();
    const explanation = form.elements.explanation.value.trim();
    if (!questionText || !explanation || options.some(option => !option)) return;
    const material = {
      id: `teacher-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      kind: "quiz",
      title: form.elements.title.value.trim(),
      subject: form.elements.subject.value,
      grades: gradeSelection(form.elements.grades.value),
      question: { question: questionText, options, answer: Number(form.elements.answer.value), explanation }
    };
    if (!material.title) return;
    teacherMaterials.push(material);
    if (!saveTeacherMaterials()) {
      teacherMaterials.pop();
      return;
    }
    form.reset();
    renderTeacherMaterials();
    renderSpecialViews();
  });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      navigate("library");
      document.getElementById("library-search").focus();
    }
    if (event.key === "Escape") {
      closeSessionModal();
      closeReviewer();
      document.getElementById("quiz-modal").classList.add("hidden");
      document.getElementById("sidebar").classList.remove("open");
    }
  });
  renderHome();
  renderLibrary();
  renderSpecialViews();
  renderSchedule();
  renderTeacherMaterials();
  if (activeUser) {
    document.body.classList.add("signed-in");
    updateProfile();
    navigate(activeUser.role === "teacher" ? "teacher" : "home");
  }
}

initialize();
