# bookSHAP

A responsive school e-library for students in Grades 7–12, built with plain HTML, CSS, and JavaScript.

## Prototype sign-in and teacher studio

- Sign in with an email ending in `@shap.edu.ph` and choose Student or Teacher.
- Students land in the learning hub. Teachers land in the Teacher studio, where they can publish reviewers and one-question practice quizzes for selected grades.
- Prototype sign-in lasts for the current browser tab; a fresh tab or browser session returns to the student/teacher login page.
- Teacher materials are stored in the current browser and appear for student sign-ins using that same browser.
- This is a front-end prototype only: it does not send verification emails, securely verify school accounts or teacher roles, or sync materials between devices. The role picker is not access control. Do not use it for private content or real student records.
- A production deployment needs school-approved authentication with email verification, trusted teacher-role assignment, and a shared backend/database. GitHub Pages alone cannot provide these services.

## Features

- Grade-specific learning library with subject and keyword filters
- Reviewer examples for Grades 7–12 with key ideas, worked examples, and self-check questions
- Grade-specific SHAP-guided study reviewers, paired with links to the official module pages
- bookSHAP branding with the Sacred Heart Academy seal and green-and-orange colors
- Reviewers and video lesson listings
- Interactive practice quizzes with answer explanations
- Editable weekly study schedule saved in the browser
- Separate student and teacher prototype sign-in flows
- Teacher tools for publishing reviewers and quizzes
- Responsive layout for desktop and mobile

## Run locally

Open `index.html` in a browser. No build step or dependencies are required.

The learning materials and quizzes are sample content. SHAP reviewer guides follow the subjects and module organization shown on the linked school pages; use the assigned official PDF for exact lesson titles and coverage. Video lessons are placeholders and need real lesson video links to play.

## Publish with GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select the `main` branch and `/ (root)` folder, then save. GitHub Pages will publish the site from `index.html`.
