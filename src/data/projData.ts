export interface ProjDataInterface {
    title: string;
    description: string;
    link: string;
    tech: string[];
    image: {
        src: string;
        alt: string;
    };
}

export const projData: ProjDataInterface[] = [
    {
        title: "PinkMatch",
        description: "Search. Match. Compare. Find cheaper alternatives to products subject to pink tax. Best Female Empowerment @ Technova 2025 (44 submissions; team of 3).",
        link: "https://github.com/sunray4/pink-match",
        tech: ["Nextjs", "Typescript", "FastAPI", "Figma", "Hugging Face", "Gemini API"],
        image: { src: "/pinkmatch-mock.png", alt: "PinkMatch" },
    },
    {
        title: "Personal Portfolio",
        description: "This website!! I built this to be an immerse journey through my technical experiences with aesthetic smooth scroll animations.",
        link: "https://github.com/sunray4/personal-portfolio",
        tech: ["Nestjs", "Tailwind CSS", "Sketch", "GSAP", "Lenis"],
        image: { src: "/portfolio-mock.png", alt: "Personal Portfolio" },
    },
    {
        title: "Keytime",
        description: "Coding activity tracker on your command line. Helping you monitor, analyze and store your programming activity.",
        link: "https://github.com/sunray4/keytime",
        tech: ["Nodejs", "Typescript", "WebSockets", "Prisma ORM", "SQLite", "Commandjs"],
        image: { src: "/keytime-mock.png", alt: "Keytime" },
    },
    {
        title: "CodeGPT",
        description: "Generates a line-by-line explanation of any codebase, helping devs understand complex repositories. Best Hack @ MLH Hack for Hackers (55 submissions; team of 3).",
        link: "https://github.com/sunray4/codegpt",
        tech: ["Flask", "Python", "Hugging Face", "MongoDB Atlas", "Tailwind CSS"],
        image: { src: "/codegpt-mock.png", alt: "CodeGPT" },
    },
    {
        title: "Rayboard",
        description: "Custom Keyboard built from scratch. Featuring custom PCB, 95 switches, OLED display, rotary encoder switch, 3D printed case, and KMK firmware.",
        link: "https://github.com/sunray4/keyboard",
        tech: ["KiCad", "Fusion 360", "CircuitPython", "KMK"],
        image: { src: "/rayboard-mock.png", alt: "Rayboard" },
    },
    {
        title: "Past Paper Portal",
        description: "Platform for students to share/access past assessment papers, with tool to remove solutions from papers. Best Beginner @ Recess Hacks 4.0 (29 submissions; team of 3).",
        link: "https://github.com/sunray4/past-paper-portal",
        tech: ["Reactjs", "Javascript", "Flask", "SQLAlchemy"],
        image: { src: "/pastpaper-mock.png", alt: "Past Paper Portal" },
    },
];