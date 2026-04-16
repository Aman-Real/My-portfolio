# Modern Professional Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A sleek, high-performance personal portfolio website designed to showcase professional skills, projects, and experience. This project features a modern UI/UX, responsive design, and seamless interactive elements.

## 🚀 Overview

This repository contains the source code for a professional portfolio built with a "Mobile First" philosophy. It leverages modern JavaScript for interactivity, SCSS for sophisticated styling, and third-party integrations for animations and communication.

**Target Audience:** Developers, Designers, and Recruiters looking for a clean, professional digital presence.

## ✨ Features

-   **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
-   **Dark/Light Mode:** Intelligent theme toggling with system preference detection and local storage persistence.
-   **Interactive Navigation:** Mobile-responsive menu with active-link highlighting based on scroll position.
-   **Scroll Animations:** Smooth reveal effects powered by [ScrollReveal.js](https://scrollrevealjs.org/).
-   **Functional Contact Form:** Integrated with [EmailJS](https://www.emailjs.com/) for direct-to-inbox messaging without a backend.
-   **Optimized Performance:** Minimal dependencies and efficient DOM manipulation.

## 🛠 Tech Stack

-   **Frontend:** HTML5, SCSS/CSS3, JavaScript (ES6+)
-   **Animations:** ScrollReveal.js
-   **Icons:** Boxicons / Custom SVG icons (Flutter, Firebase, Dart)
-   **Email Service:** EmailJS
-   **Styling:** Custom CSS Grid and Flexbox architecture

## 🏗 Architecture

The project follows a clean separation of concerns:

```text
├── assets/
│   ├── css/        # Compiled CSS and SCSS source files
│   ├── icons/      # Tech stack SVGs (Flutter, Firebase, etc.)
│   ├── images/     # Project screenshots and profile assets
│   └── js/         # Core logic (main.js)
└── index.html      # Primary entry point and structure
```

### Key Components:
-   **Theme Engine:** Handles CSS variable switching between light and dark modes.
-   **Scroll Observer:** Tracks user position to update the navigation UI dynamically.
-   **Animation Controller:** Manages the sequence and timing of element reveals.

## 🚦 Getting Started

### Prerequisites
-   A modern web browser (Chrome, Firefox, Edge, Safari).
-   A code editor (VS Code recommended).
-   (Optional) A local server environment like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Aman-Real/My-portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd My-portfolio
    ```
3.  **Open the project:**
    Simply open `index.html` in your browser or launch via Live Server.

### Configuration (EmailJS)
To make the contact form functional, you must configure your EmailJS credentials in `assets/js/main.js`:

1.  Sign up at [emailjs.com](https://www.emailjs.com/).
2.  Create a Service and a Template.
3.  Replace the placeholders in `main.js`:
    ```javascript
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");

    // Inside the submit listener
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    ```

## 💻 Usage

### Adding Projects
To add a new project to the portfolio, locate the `.work__container` in `index.html` and add a new image link:
```html
<div class="work__img">
    <img src="assets/images/your-project.jpg" alt="Project Name">
</div>
```

### Customizing Skills
The skills section uses a combination of text and progress bars. Modify the `.skills__data` divs to reflect your expertise.

## 🛠 Development

### CSS/SCSS
The project uses SCSS for styling. If you wish to modify styles:
1.  Edit files in `assets/css/styles.scss`.
2.  Compile to `assets/css/styles.css` using a Sass compiler.

### JavaScript Logic
The `main.js` file contains several modules:
-   `showMenu`: Handles mobile navigation toggle.
-   `scrollActive`: Manages the "active" class on nav links.
-   `initThemeToggle`: Manages the dark/light mode state.

## 🚀 Deployment

### GitHub Pages (Recommended)
1.  Push your code to a GitHub repository.
2.  Go to **Settings > Pages**.
3.  Select the `main` branch and `/ (root)` folder.
4.  Click **Save**.

### Netlify/Vercel
Simply drag and drop the project folder into the Netlify dashboard or connect your GitHub repository for continuous deployment.

## 🤝 Contributing

Contributions are welcome!
1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Aman - [GitHub](https://github.com/Aman-Real)

Project Link: [https://github.com/Aman-Real/My-portfolio](https://github.com/Aman-Real/My-portfolio)