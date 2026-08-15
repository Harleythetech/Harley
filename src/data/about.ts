export interface Experience {
    period: string
    role: string
    description: string
}

export interface Education {
    period: string
    school: string
    course: string
}

export interface Achievement {
    year: string
    title: string
    description: string
}

export interface TechnologyGroup {
    name: string
    description: string
    technologies: string[]
}

export const experience: Experience[] = [
    {
        period: "2021 — Present",
        role: "Freelancer",
        description: "Programmer · Technician · Graphics Designer",
    },
    {
        period: "2019 — 2021",
        role: "A/V Technician",
        description: "Audio · Visual · Live Events",
    },
]

export const education: Education[] = [
    {
        period: "2023 — 2027",
        school: "Pamantasan ng Lungsod ng San Pablo",
        course: "BS Information Technology — Web & Game Development",
    },
    {
        period: "2020 — 2023",
        school: "STI College San Pablo",
        course: "Information & Communication Technology",
    },
]

export const achievements: Achievement[] = [
    {
        year: "2024",
        title: "1st Place",
        description: "Web Designing Contest · ICT Month",
    },
    {
        year: "2024",
        title: "Lead Graphic Designer",
        description: "University Student Parliament",
    },
    {
        year: "2022",
        title: "1st Place",
        description: "Web Designing Contest · ICT Fest",
    },
]

export const interests: string[] = [
    "Graphic Design",
    "Gaming",
    "Cars",
    "Audio",
]

export const technologyGroups: TechnologyGroup[] = [
    {
        name: "Frontend",
        description: "Interfaces & web experiences",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TailwindCSS"],
    },
    {
        name: "Backend & Database",
        description: "Applications & data",
        technologies: ["PHP", "ASP.NET", "Node.js", "PostgreSQL", "Firebase"],
    },
    {
        name: "Development",
        description: "Tools & environments",
        technologies: ["Git & GitHub", "Linux"],
    },
    {
        name: "Design",
        description: "Visual & interface design",
        technologies: ["Adobe Photoshop", "Figma"],
    },
    {
        name: "Game Development",
        description: "Interactive experiences",
        technologies: ["Godot"],
    },
]
