// Real details from Sibongakonke's CV — one place for every page to read from.
import cvAsset from "@/assets/cv.pdf.asset.json";

export const profile = {
  name: "Sibongakonke Buthelezi",
  role: "Software Engineer",
  location: "Johannesburg, South Africa",
  email: "sibongakonkebuthelezi91@gmail.com",
  phone: "066 448 4226",
  github: "https://github.com/sibongakonkebuthelezi91",
  linkedin: "https://www.linkedin.com/in/sibongakonke-buthelezi-274b76344",

  cvUrl: cvAsset.url,
  intro:
    "I'm a software developer who builds web applications, backend services and database-driven systems — strongest in Python, with hands-on experience in Flask, Django, JavaScript, Docker and CI/CD. I enjoy understanding a system end to end: from requirements and user experience to backend logic, testing and deployment.",
};

export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "C#"] },
  { label: "Frameworks & Libraries", items: ["Django", "Flask", "Django REST Framework", "React (Basic)"] },
  { label: "Databases", items: ["SQLite", "PostgreSQL", "Django ORM"] },
  { label: "DevOps & Deployment", items: ["Docker", "Docker Compose", "CI/CD Pipelines", "Environment Configuration"] },
  { label: "Developer Tools", items: ["Git", "GitHub", "GitLab", "VS Code", "PyCharm", "IntelliJ IDEA", "Linux Command Line"] },
  { label: "Core Competencies", items: ["RESTful APIs", "User Authentication", "Role-Based Access Control", "Data Validation", "OOP"] },
  { label: "Soft Skills", items: ["Agile Methodologies", "Team Collaboration", "Client Communication", "Requirements Gathering"] },
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    org: "CareerSine",
    years: "Jul 2026 — Present",
    text: "Developing a private business management web application for CareerSine, working directly with the client from requirements analysis through to implementation, database design, testing and ongoing improvements. Built with Django, JavaScript and SQLite, with regular demos and feedback cycles that keep technical decisions clear to non-technical stakeholders.",
  },
];

export const projects = [
  {
    name: "Campus & Student Management Portal",
    stack: "Flask · Python · SQLite · HTML · CSS",
    url: "https://github.com/bhekani17/wethinkcode-branch-register",
    text: "A web-based campus and student management system supporting registration, check-ins and user management, with authentication, session management and role-based access controls separating admin from student functionality.",
  },
  {
    name: "Simple Mail Protocol",
    stack: "Flask · Python 3.12 · Docker",
    url: "https://github.com/sibongakonkebuthelezi91/simple_mail_protocol",
    text: "A Flask application that validates email addresses from a web form and sends HTML email through the Brevo API, with responsibilities split across dedicated modules and credentials kept in environment configuration.",
  },
  {
    name: "Binary Search Number Guessing Game",
    stack: "Python",
    url: "https://github.com/sibongakonkebuthelezi91/practice-activity",
    text: "A command-line game that uses binary search to find the user's number in O(log n) time, structured into separate functions for validation, game logic, interaction and replay.",
  },
];

export const education = [
  {
    title: "Certificate in Business Management (N6)",
    years: "2023",
    text: "A business perspective on software: understanding that technology must support real processes and user needs, with stronger communication, problem-solving and stakeholder-management skills.",
  },
];
