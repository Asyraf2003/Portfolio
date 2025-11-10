export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://github.com/Asyraf2003/laravel-e-commerce",
    logo: "",
    image: "/Portfolio/assets/projects/accessories.png",
    tags: [
      {
        id: 1,
        name: "Html",
        path: "/Portfolio/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/Portfolio/assets/logos/laravel.svg",
      },
      {
        id: 3,
        name: "Midtrans",
        path: "/Portfolio/assets/logos/midtrans.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/Portfolio/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "School Management & Article Platform",
    description:
      "A comprehensive school management web application built with Laravel and Mazer, featuring multilingual content, article management, student registration, and secure payment control.",
    subDescription: [
      "Developed a modular Laravel backend with best-practice security and role-based authentication for admins, teachers, and students.",
      "Implemented a dynamic article system with categories, image uploads, and markdown support.",
      "Integrated student registration workflow and tuition (SPP) transaction tracking with real-time validation.",
      "Added multilingual support (English & Indonesian) using Laravel localization features.",
      "Designed a clean and responsive interface with TailwindCSS, AlpineJS, and Mazer template for a modern school dashboard.",
      "Containerized the entire environment using Docker for consistent local and production deployment."
    ],
    href: "https://github.com/Asyraf2003/school-with-article",
    logo: "",
    image: "/Portfolio/assets/projects/sekolah.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/Portfolio/assets/logos/laravel.svg"
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/Portfolio/assets/logos/tailwindcss.svg"
      },
      {
        id: 3,
        name: "AlpineJS",
        path: "/Portfolio/assets/logos/alpine.js.svg"
      },
      {
        id: 4,
        name: "Docker",
        path: "/Portfolio/assets/logos/docker.svg"
      },
    ]
  },
  {
    id: 3,
    title: "Minimalist Arch Linux Environment",
    description:
      "A fully customized and automated Arch Linux setup designed for performance, consistency, and productivity across development workflows.",
    subDescription: [
      "Engineered a lightweight Openbox environment (~400MB idle) with custom scripts for VPN, MariaDB, Wi-Fi, and Docker management.",
      "Configured Alacritty, Neovim, and system-wide keybindings for a seamless keyboard-driven workflow.",
      "Implemented dynamic theming with live wallpapers, transparent terminals, and adaptive light/dark modes.",
      "Automated provisioning and environment synchronization via Git version control.",
      "Optimized for developers who prioritize speed, minimalism, and total control over their Linux system."
    ],
    href: "https://github.com/Asyraf2003/dotfiles",
    logo: "",
    image: "/Portfolio/assets/projects/dotfiles.png",
    tags: [
      {
        id: 1,
        name: "Arch Linux",
        path: "/Portfolio/assets/logos/arch.svg"
      },
      {
        id: 2,
        name: "Alacritty",
        path: "/Portfolio/assets/logos/alacritty.svg"
      },
      {
        id: 3,
        name: "Docker",
        path: "/Portfolio/assets/logos/docker.svg"
      }
    ]
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6287887681881",
    icon: "assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/asyraf-mubarak-4016a8305/",
    icon: "assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/asyrafm1/",
    icon: "assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Student & Open-Source Contributor",
    job: "IDN | Learning & Portfolio Building",
    date: "Aug 2024 – Present",
    contents: [
      "Started structured learning at IDN with a focus on Laravel, TailwindCSS, Docker, and AWS cloud fundamentals.",
      "Actively contributing to open-source and maintaining multiple GitHub repositories since Nov 2024, with consistent commits and refactoring for clean architecture.",
      "Built personal projects emphasizing CI/CD, containerized environments, and best practices in full-stack and cloud engineering.",
    ],
  },
  {
    title: "Freelance Web Developer",
    job: "Al Mustaqbal Malang (School Website)",
    date: "Dec 2024 – Jul 2025",
    contents: [
      "Developed a full-featured school management system using Laravel, Mazer, TailwindCSS, and AlpineJS.",
      "Implemented article management, student registration, and tuition (SPP) transaction control with secure validation and RBAC.",
      "Added multilingual support (EN/ID) and containerized the deployment environment using Docker for consistent builds.",
    ],
  },
  {
    title: "Code Reviewer & UX QA",
    job: "Project Safeguard",
    date: "Jul 2025 – Aug 2025",
    contents: [
      "Performed systematic code reviews to maintain consistency, performance, and adherence to SOLID principles.",
      "Tested and verified end-to-end functionality, focusing on usability, accessibility, and bug-free performance.",
      "Delivered actionable reports highlighting code issues, UI/UX improvements, and input/output security recommendations.",
    ],
  },
  {
    title: "Intern",
    job: "Diskominfo West Lombok Regency, NTB",
    date: "Sep 2025 – Nov 2025",
    contents: [
      "Assisted in developing and maintaining internal government web applications using Laravel and MySQL.",
      "Optimized backend logic, improved query performance, and contributed to API integrations for data dashboards.",
      "Collaborated through Git workflow (branching, PR reviews) to ensure clean and traceable development practices.",
    ],
  },
];
export const reviews = [
  {
    name: "Michael Tan",
    username: "@mtan_devops",
    body: "Asyraf delivered a full Laravel–AWS integration with flawless CI/CD pipelines. His precision and clean architecture mindset are world-class.",
    img: "https://robohash.org/michael",
  },
  {
    name: "Rina Kusuma",
    username: "@rina_frontend",
    body: "The UI he built with Tailwind and AlpineJS is not only beautiful but lightning fast. You can feel the engineering discipline in every pixel.",
    img: "https://robohash.org/rina",
  },
  {
    name: "Daniel Wong",
    username: "@dw_architect",
    body: "We collaborated on a Dockerized microservice project—his command of containers, automation, and scalability is outstanding.",
    img: "https://robohash.org/daniel",
  },
  {
    name: "Sarah Lee",
    username: "@slee_pm",
    body: "Working with Asyraf is pure clarity. Every feature is documented, secure, and deploys like clockwork through AWS pipelines.",
    img: "https://robohash.org/sarah",
  },
  {
    name: "Hafidz Ramadhan",
    username: "@hafidz_backend",
    body: "His code is clean, modular, and future-proof. The Laravel architecture he set up became our team's benchmark standard.",
    img: "https://robohash.org/hafidz",
  },
  {
    name: "Liya Sri",
    username: "@liya_design",
    body: "He makes backend logic look like art. Even the dashboards he designs feel effortless to use. Precision meets creativity.",
    img: "https://robohash.org/liya",
  },
  {
    name: "Ethan Zhao",
    username: "@ez_aws",
    body: "I’ve seen many developers, but Asyraf’s cloud automation mindset is rare. Every deployment is efficient, scalable, and secure.",
    img: "https://robohash.org/ethan",
  },
  {
    name: "Nadia Chen",
    username: "@nadia_ops",
    body: "He built a monitoring system that cut our downtime by half. Truly an engineer who blends reliability with elegance.",
    img: "https://robohash.org/nadia",
  },
];

