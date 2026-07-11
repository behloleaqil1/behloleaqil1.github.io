import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    docker,
    java,
    angular,
    laravel,
    nextjs,
    postgresql,
    git,
    cloudtek,
    aksaSds,
    deltaShoppe,
    elixir,
    mysimplerx,
    vars,
    flexigolf,
    chotok,
    ugap,
    edfry,
} from "../assets";

// === Identity (from resume) ===
export const profile = {
    name: "Engr M Behlole Aqil",
    firstName: "Behlole",
    lastName: "Aqil.",
    role: "Senior Software Engineer · Full-Stack",
    tagline:
        "Full-stack engineer · 8+ years shipping enterprise apps, financial platforms and branchless-banking systems — schema to screen, at scale.",
    location: "Rawalpindi, Pakistan",
    availability: "Open to remote & relocation — globally",
    email: "behloleaqil@gmail.com",
    phone: "+92 335 8432691",
    website: "https://behloleaqil1.github.io",
    socials: {
        github: "https://github.com/behloleaqil1",
        linkedin: "https://linkedin.com/in/behlole",
        twitter: "https://twitter.com/",
    },
    education: {
        degree: "B.S. Software Engineering",
        school: "Bahria University, Islamabad",
        years: "",
    },
    resumeUrl: "/behlole-aqil-resume.pdf",
};

export const navLinks = [
    {id: "about", title: "About"},
    {id: "work", title: "Experience"},
    {id: "projects", title: "Projects"},
    {id: "contact", title: "Contact"},
];

// Headline stats pulled from resume achievements
export const heroStats = [
    {label: "Years building", value: "8+"},
    {label: "Enterprise apps", value: "20+"},
    {label: "Microservices", value: "50+"},
    {label: "Tech in rotation", value: "30+"},
];

// High-level offerings (what a client/employer is hiring)
const services = [
    {
        title: "Full-Stack Engineering",
        description: "Angular · React · Next.js · Vue on Node.js, NestJS and Spring Boot — schema to screen.",
        icon: web,
    },
    {
        title: "Microservices Architecture",
        description: "Spring Cloud, Express, GraphQL & REST APIs with clean domain boundaries and CI/CD pipelines.",
        icon: backend,
    },
    {
        title: "Fintech & Banking Platforms",
        description: "Branchless banking, wallets, core banking flows — hardened for audit and millions of users.",
        icon: creator,
    },
    {
        title: "Legacy Modernization",
        description: "Query tuning, DB optimization and incremental migrations that cut latency and unlock scale.",
        icon: mobile,
    },
];

// Tech grouped by category — curated from the resume's active stack.
const technologies = [
    // Languages
    {name: "Java", icon: java, category: "Languages"},
    {name: "TypeScript", icon: typescript, category: "Languages"},
    {name: "JavaScript", icon: creator, category: "Languages"},
    {name: "PHP", icon: laravel, category: "Languages"},
    {name: "Python", icon: creator, category: "Languages"},
    {name: "SQL", icon: postgresql, category: "Languages"},
    {name: "GraphQL", icon: backend, category: "Languages"},

    // Frontend
    {name: "Angular", icon: angular, category: "Frontend"},
    {name: "React.js", icon: reactjs, category: "Frontend"},
    {name: "Next.js", icon: nextjs, category: "Frontend"},
    {name: "Tailwind CSS", icon: tailwind, category: "Frontend"},
    {name: "Redux / RxJS", icon: redux, category: "Frontend"},

    // Backend
    {name: "Node.js", icon: nodejs, category: "Backend"},
    {name: "Express.js", icon: nodejs, category: "Backend"},
    {name: "Spring Boot", icon: java, category: "Backend"},
    {name: "Spring Security", icon: java, category: "Backend"},
    {name: "Laravel / Lumen", icon: laravel, category: "Backend"},

    // Data
    {name: "PostgreSQL", icon: postgresql, category: "Data"},
    {name: "MongoDB", icon: mongodb, category: "Data"},
    {name: "MySQL", icon: postgresql, category: "Data"},
    {name: "Redis", icon: backend, category: "Data"},
    {name: "CouchDB / RxDB", icon: mongodb, category: "Data"},
    {name: "Kafka / RabbitMQ", icon: backend, category: "Data"},

    // Cloud / DevOps
    {name: "AWS", icon: backend, category: "Cloud & DevOps"},
    {name: "Azure", icon: backend, category: "Cloud & DevOps"},
    {name: "Docker", icon: docker, category: "Cloud & DevOps"},
    {name: "Kubernetes", icon: docker, category: "Cloud & DevOps"},
    {name: "GitHub Actions", icon: git, category: "Cloud & DevOps"},
    {name: "Git", icon: git, category: "Cloud & DevOps"},

    // AI / Integrations
    {name: "LangChain", icon: creator, category: "AI & Integrations"},
    {name: "OpenAI API", icon: creator, category: "AI & Integrations"},
    {name: "Anthropic Claude", icon: creator, category: "AI & Integrations"},
    {name: "WebSocket", icon: backend, category: "AI & Integrations"},
];

// === Experiences — from resume ===
const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "Elixir Technologies",
        companyMeta: "Enterprise Software · Remote",
        date: "Oct 2025 — Present",
        icon: elixir,
        iconBg: "#ffffff",
        points: [
            "Design and ship scalable software solutions delivering measurable business value across enterprise product lines.",
            "Lead technical architecture decisions and enforce best practices across the SDLC.",
            "Mentor junior developers, run code reviews and raise the engineering-excellence bar.",
            "Architect robust systems with modern technologies, then optimize performance, UX and code quality through rigorous automated testing.",
            "Track emerging tech and industry trends — translate them into real product wins.",
        ],
        stack: ["Java", "Spring Boot", "TypeScript", "Angular", "React", "PostgreSQL", "Docker", "Kubernetes"],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Cloudtek",
        companyMeta: "Enterprise Web · Hybrid",
        date: "Jun 2022 — Sep 2025",
        icon: cloudtek,
        iconBg: "#ffffff",
        points: [
            "Built complex enterprise web apps on Node.js, Angular, React, Spring Boot / Spring Security, GraphQL, RxDB, PostgreSQL and CouchDB.",
            "Led a dev team — delivery, guidance, code training and rigorous PR review — for multiple concurrent projects.",
            "Facilitated Scrum / Kanban / Agile ceremonies for efficient planning and delivery.",
            "Partnered with cross-functional teams to translate ambiguous problems into concrete, maintainable solutions.",
            "Owned testing, debugging and user-friendly UI design end-to-end.",
        ],
        stack: ["Node.js", "Angular", "React.js", "Spring Boot", "Spring Security", "GraphQL", "RxDB", "PostgreSQL", "CouchDB"],
    },
    {
        title: "Software Engineer — MEAN Stack",
        company_name: "AKSA-SDS",
        companyMeta: "Fintech & Banking · On-site",
        date: "Aug 2020 — May 2022",
        icon: aksaSds,
        iconBg: "#e6dedd",
        points: [
            "Built branchless-banking apps on the MEAN stack for EasyPaisa and JazzCash — Pakistan's largest mobile wallets.",
            "Designed microservices architecture to improve scalability and maintainability of the banking backbone.",
            "Shipped TPL Trakker maps with Leaflet.js — a FoodPanda-tuned alternative to Google Maps for delivery routing.",
            "Contributed to Zarai Taraqiati Bank Limited (ZTBL), an agricultural-banking platform on Angular.",
            "Built interactive data visualizations with D3.js, Leaflet.js and Three.js; ran unit & integration tests with Jest.",
        ],
        stack: ["Angular", "Node.js", "Express", "MongoDB", "Leaflet.js", "D3.js", "Three.js", "Jest", "Microservices"],
    },
    {
        title: "Jr. PHP Developer",
        company_name: "Deltashoppe",
        companyMeta: "Web Applications · On-site",
        date: "Mar 2017 — Aug 2020",
        icon: deltaShoppe,
        iconBg: "#ffffff",
        points: [
            "Built and maintained web applications on Laravel, Lumen and Blade — with responsive, mobile-first UX.",
            "Optimized legacy MySQL schemas across millions of rows — meaningful latency drops, clean migrations.",
            "Integrated Google Maps into MySimpleRx, a pharmacy-coupon web application.",
            "Contributed early to branchless-banking microservices for EasyPaisa and JazzCash.",
            "Shipped TPL Trakker's FoodPanda map layers (Leaflet.js), plus VARS and MySimpleRx finance apps.",
        ],
        stack: ["PHP", "Laravel", "Lumen", "MySQL", "Blade", "Google Maps", "Leaflet.js", "Git"],
    },
];

// === Things I've shipped — real production applications with live links ===
const projects = [
    {
        name: "EasyPaisa & JazzCash — Branchless Banking",
        company: "Fintech · Mobile Money",
        description:
            "Core flows for Pakistan's two largest mobile-money platforms — peer-to-peer transfers, bill pay, wallet top-ups and merchant settlements — on a microservice backbone. Hardened for regulatory audit and serving millions of subscribers across the country.",
        metric: {label: "Active users", value: "10M+"},
        tags: [
            {name: "angular", color: "blue-text-gradient"},
            {name: "node.js", color: "green-text-gradient"},
            {name: "mongodb", color: "pink-text-gradient"},
            {name: "microservices", color: "blue-text-gradient"},
            {name: "fintech", color: "red-text-gradient"},
        ],
        coverArt: {from: "#a3e635", via: "#22d3ee", to: "#06070d", motif: "fintech"},
        live_link: null,
        source_code_link: null,
    },
    {
        name: "MySimpleRx",
        company: "Pharma · Consumer Health",
        description:
            "User-friendly pharmacy platform that simplifies medication management — secure prescription storage, medication tracking, refill requests and adherence tooling to keep patients on-plan. Shipped end-to-end on Angular + Laravel with a PostgreSQL backbone.",
        tags: [
            {name: "angular", color: "blue-text-gradient"},
            {name: "laravel", color: "green-text-gradient"},
            {name: "postgresql", color: "pink-text-gradient"},
            {name: "lumen", color: "red-text-gradient"},
            {name: "microservices", color: "blue-text-gradient"},
        ],
        image: mysimplerx,
        live_link: "https://mysimplerx.com",
        source_code_link: null,
    },
    {
        name: "VARS",
        company: "Finance · Analytics",
        description:
            "Analytics platform within MySimpleRx providing insights into medication usage — comprehensive data, visualizations and trend detection so patients and providers can make informed health decisions. Built on React + Angular with a Laravel/Lumen API.",
        tags: [
            {name: "react", color: "blue-text-gradient"},
            {name: "angular", color: "green-text-gradient"},
            {name: "laravel", color: "pink-text-gradient"},
            {name: "postgresql", color: "blue-text-gradient"},
            {name: "rest-api", color: "red-text-gradient"},
        ],
        image: vars,
        live_link: "https://vars.mysimplerx.com",
        source_code_link: null,
    },
    {
        name: "FlexiGolf",
        company: "Marketplace · Sports · Australia",
        description:
            "Tee-time booking marketplace for Australian golf courses — search availability across courses, book preferred slots, invite friends to a game. Designed to take the friction out of golf planning and keep courses full through a clean, mobile-first experience.",
        tags: [
            {name: "react", color: "blue-text-gradient"},
            {name: "angular", color: "green-text-gradient"},
            {name: "laravel", color: "pink-text-gradient"},
            {name: "postgresql", color: "blue-text-gradient"},
            {name: "microservices", color: "red-text-gradient"},
        ],
        image: flexigolf,
        live_link: "https://flexigolf.com.au",
        source_code_link: null,
    },
    {
        name: "Chotok",
        company: "Ticketing · Events",
        description:
            "Online ticket-booking platform for events and activities — browse a wide range of experiences, purchase tickets, and get straight to the event. Designed for speed, reliability and a frictionless checkout across mobile and desktop.",
        tags: [
            {name: "react", color: "blue-text-gradient"},
            {name: "angular", color: "green-text-gradient"},
            {name: "laravel", color: "pink-text-gradient"},
            {name: "postgresql", color: "blue-text-gradient"},
            {name: "rest-api", color: "red-text-gradient"},
        ],
        image: chotok,
        live_link: "https://chotok.com",
        source_code_link: null,
    },
    {
        name: "UGAP",
        company: "Public Procurement · France",
        description:
            "Public-procurement portal for UGAP (Union des Groupements d'Achats Publics) — information hub and procurement platform for French government entities and public institutions, with contract discovery, procurement solutions and advisory tooling.",
        tags: [
            {name: "laravel", color: "blue-text-gradient"},
            {name: "php", color: "green-text-gradient"},
            {name: "mysql", color: "pink-text-gradient"},
            {name: "html", color: "blue-text-gradient"},
            {name: "rest-api", color: "red-text-gradient"},
        ],
        image: ugap,
        live_link: "https://ugap.net",
        source_code_link: null,
    },
    {
        name: "EdFry",
        company: "Mentorship · Career Growth",
        description:
            "Mentorship-booking platform for Ed Fry — scheduling, session management and profile surfaces for a professional-mentor marketplace. Visitors book 1:1 sessions for software, design and career guidance with a clean, trust-first experience.",
        tags: [
            {name: "react", color: "blue-text-gradient"},
            {name: "angular", color: "green-text-gradient"},
            {name: "laravel", color: "pink-text-gradient"},
            {name: "postgresql", color: "blue-text-gradient"},
            {name: "microservices", color: "red-text-gradient"},
        ],
        image: edfry,
        live_link: "https://edfry.co",
        source_code_link: null,
    },
];

// === Testimonials — real client feedback from Fiverr ===
const testimonials = [
    {
        testimonial:
            "Behlole is a web-app wizard. Delivered on time and I'll be looking forward to hiring him again. Impressed with his grip on the technicalities of the dev stack he works in.",
        name: "Areeb Ali",
        designation: "Client",
        company: "Fiverr",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        testimonial:
            "Very fast and excellent delivery. Enjoyed working with him — it's a pleasure working with Behlole. Highly recommended.",
        name: "SleeHom",
        designation: "Client",
        company: "Fiverr",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        testimonial:
            "Amazing delivery and before time! Kind, friendly and helpful — would order again. Thank you.",
        name: "secretdoctor",
        designation: "Client",
        company: "Fiverr",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
        testimonial:
            "Very perfect. Made the right choice working with him — thanks for the good work. Highly recommended.",
        name: "Lerthert",
        designation: "Client",
        company: "Fiverr",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        testimonial:
            "Wonderful experience. As a freelancer I'd recommend Behlole — work done before time, and a beautiful way of conversation. Will give him another order soon.",
        name: "Ali Imam",
        designation: "Client",
        company: "Fiverr",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
        testimonial:
            "Made my 3rd order with him — he's so friendly and it's always on point. Mostly recommended.",
        name: "mrhazwansalam",
        designation: "Repeat client",
        company: "Fiverr",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
];

export {services, technologies, experiences, testimonials, projects};
