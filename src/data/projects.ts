export interface Project {
    id: number
    number: string
    title: string
    description: string
    technologies: string[]
    year: string
    type: string
    href?: string
    image?: string
}

export const projects: Project[] = [
    {
        id: 1,
        number: "01",
        title: "OpenAuto - RK3229 Armbian Port",
        description:
            "OpenAuto for RK3229 boards, with working Hardware Decoding H264.",
        technologies: ["C++", "Shell", "QML", "CMake"],
        year: "2026",
        type: "Linux Application",
        href: "https://github.com/Harleythetech/openauto-rk3229-armbian",
        image: "/projects/openauto.webp",
    },

    {
        id: 2,
        number: "02",
        title: "Flick",
        description:
            "Flick is a high-performance music player for Android that delivers bit-perfect audio through external USB DACs and amplifiers via a custom Rust-based UAC 2.0 implementation. It features a 31-band equalizer, automatic music library scanning with metadata extraction, and gapless playback built with Flutter.",
        technologies: ["Dart", "Rust", "Kotlin"],
        year: "2026",
        type: "Mobile Application",
        href: "https://github.com/moss-apps/Flick",
        image: "/projects/flick.webp",
    },

    {
        id: 3,
        number: "03",
        title: "Flick Web",
        description:
            "Marketing site for Flick, a high-performance audiophile music player for Android.",
        technologies: ["React", "TailwindCSS", "Motion"],
        year: "2026",
        type: "Website",
        href: "https://www.flick-player.site/",
        image: "/projects/flick-web.webp",
    },

    {
        id: 4,
        number: "04",
        title: "Palarong Panlipunan",
        description:
            "A game built with Godot as part of my capstone, designed to teach students about Philippine history.",
        technologies: ["GDScript"],
        year: "2026",
        type: "Game",
        href: "https://github.com/Harleythetech/Palarong-Panlipunan",
        image: "/projects/palarong-panlipunan.webp",
    },
]