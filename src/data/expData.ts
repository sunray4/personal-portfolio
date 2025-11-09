export interface ExpDataInterface {
    startTime: string;
    endTime: string;
    role: string;
    company: string;
    description: string;
    location: string;
    image: {
        src: string;
        alt: string;
    };
}

export const expData: ExpDataInterface[] = [
    {
        startTime: "Sept 2025",
        endTime: "Present",
        role: "Software Developer & Project Manager",
        company: "UW Orbital",
        description: "Managing frontend software quality and architecture on the ground station software subteam. Developing and designing the frontend of the Mission Control Centre software.",
        location: "Waterloo, ON",
        image: { src: "/orbital.webp", alt: "UW Orbital" },
    },
    {
        startTime: "Feb 2024",
        endTime: "Dec 2023",
        role: "UI/UX Designer",
        company: "Samsung Food",
        description: "Conducted UI/UX research to inform design decisions for a meal planning app with 1M+ Google Play downloads. Edited 1000+ Chinese-English lexical translations to support multilingual software.",
        location: "Vancouver, BC",
        image: { src: "/samsung-food.webp", alt: "Samsung Food" },
    },
]