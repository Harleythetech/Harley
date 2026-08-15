import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"
import {
    experience,
    education,
    achievements,
    interests,
    technologyGroups,
} from "../../data/about"

export default function About() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        animate(".about-intro", {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 700,
            easing: "easeOutExpo",
        })

        animate(".about-card", {
            opacity: [0, 1],
            translateY: [28, 0],
            delay: stagger(90, { start: 180 }),
            duration: 700,
            easing: "easeOutExpo",
        })
    }, [])

    const technologyCount = technologyGroups.reduce(
        (total, group) => total + group.technologies.length,
        0
    )

    return (
        <section
            ref={sectionRef}
            id="about"
            className="
                relative
                w-full
                overflow-hidden
                px-12
                py-24
                md:px-8
                lg:px-16
                lg:py-32
            "
        >

            {/* =========================================================
                AMBIENT BACKGROUND
            ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-20
                    h-105
                    w-105
                    rounded-full
                    bg-[#EEFF6B]/3.5
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-60
                    bottom-0
                    h-87.5
                    w-87.5
                    rounded-full
                    bg-[#17175c]/30
                    blur-[120px]
                "
            />

            <div className="mx-auto w-full max-w-7xl">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="about-intro opacity-0">

                    <div className="flex items-center gap-4">

                        <span className="h-px w-8 bg-[#EEFF6B]/60" />

                        <span
                            className="
                                text-[11px]
                                font-medium
                                uppercase
                                tracking-[0.3em]
                                text-[#EEFF6B]/70
                            "
                        >
                            01 / About
                        </span>

                    </div>

                    <h2
                        className="
                            mt-6
                            max-w-3xl
                            text-4xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Beyond the code.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-sm
                            leading-7
                            text-white/55
                            sm:text-base
                            sm:leading-8
                        "
                    >
                        A student developer from the Philippines with a
                        passion for technology, design, and gaming. I enjoy
                        creating experiences that feel simple, smooth, and
                        enjoyable — blending creativity with logic to bring
                        ideas to life.
                    </p>

                </div>


                {/* =====================================================
                    BENTO GRID
                ===================================================== */}

                <div
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-3
                        md:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    {/* =================================================
                        ABOUT ME
                    ================================================= */}

                    <div
                        className="
                            about-card
                            group
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            md:col-span-2

                            lg:col-span-2
                            lg:col-start-1
                            lg:row-start-1
                        "
                    >

                        <span
                            className="
                                absolute
                                right-6
                                top-3
                                select-none
                                text-8xl
                                font-bold
                                leading-none
                                text-white/2.5
                                transition-transform
                                duration-700
                                group-hover:scale-110
                            "
                        >
                            01
                        </span>

                        <div className="relative z-10">

                            <p
                                className="
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#EEFF6B]/65
                                "
                            >
                                A little about me
                            </p>

                            <h3
                                className="
                                    mt-6
                                    max-w-xl
                                    text-2xl
                                    font-semibold
                                    leading-tight
                                    text-white
                                    sm:text-3xl
                                "
                            >
                                I build & design things for the web.
                            </h3>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white/55
                                "
                            >
                                I'm currently studying Information Technology,
                                constantly exploring new ways to grow my skills
                                and push myself further.
                            </p>

                            <p
                                className="
                                    mt-4
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white/55
                                "
                            >
                                My goal is to design and build digital
                                experiences that connect with people in
                                meaningful ways.
                            </p>

                        </div>

                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                h-px
                                w-0
                                bg-[#EEFF6B]/50
                                transition-all
                                duration-500
                                group-hover:w-full
                            "
                        />

                    </div>


                    {/* =================================================
                        CURRENTLY
                    ================================================= */}

                    <div
                        className="
                            about-card
                            group
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-6
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            lg:col-span-1
                            lg:col-start-3
                            lg:row-start-1
                        "
                    >

                        <div className="flex justify-between">

                            <p
                                className="
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#EEFF6B]/65
                                "
                            >
                                Currently
                            </p>

                            <span className="text-[11px] text-white/25">
                                02
                            </span>

                        </div>

                        <div className="mt-8">

                            <p className="text-lg font-medium text-white">
                                BS Information Technology
                            </p>

                            <p className="mt-2 text-sm leading-5 text-white/50">
                                Web & Game Development
                            </p>

                        </div>

                        <div className="mt-7 flex items-center gap-2">

                            <span
                                className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-[#EEFF6B]
                                    shadow-[0_0_10px_rgba(238,255,107,0.4)]
                                "
                            />

                            <span
                                className="
                                    text-[11px]
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/45
                                "
                            >
                                2023 — 2027
                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        LOCATION
                    ================================================= */}

                    <div
                        className="
                            about-card
                            group
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-6
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            lg:col-span-1
                            lg:col-start-4
                            lg:row-start-1
                        "
                    >

                        <div className="flex justify-between">

                            <p
                                className="
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#EEFF6B]/65
                                "
                            >
                                Based in
                            </p>

                            <span className="text-[11px] text-white/25">
                                03
                            </span>

                        </div>

                        <div className="mt-8">

                            <p className="text-lg font-medium text-white">
                                Laguna, Philippines
                            </p>

                            <p className="mt-2 text-sm text-white/50">
                                UTC +08:00
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        education
                    ================================================= */}

                    <div
                        className="
                            about-card
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            md:col-span-2

                            lg:col-span-1
                            lg:col-start-1
                            lg:row-start-2
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    education
                                </p>

                                <p className="mt-2 text-sm text-white/45">
                                    Academic background
                                </p>

                            </div>

                            <span className="text-[11px] text-white/25">
                                05
                            </span>

                        </div>

                        <div className="mt-7 space-y-6">

                            {education.map((item) => (
                                <div key={item.school}>

                                    <div className="flex flex-col gap-1">

                                        <p className="text-sm font-medium leading-5 text-white">
                                            {item.school}
                                        </p>

                                        <span
                                            className="
                                                text-[11px]
                                                uppercase
                                                tracking-[0.15em]
                                                text-white/45
                                            "
                                        >
                                            {item.period}
                                        </span>

                                    </div>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-6
                                            text-white/50
                                        "
                                    >
                                        {item.course}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        experience
                    ================================================= */}

                    <div
                        className="
                            about-card
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            md:col-span-2

                            lg:col-span-3
                            lg:col-start-2
                            lg:row-start-2
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    experience
                                </p>

                                <p className="mt-2 text-sm text-white/45">
                                    Work beyond the classroom
                                </p>

                            </div>

                            <span className="text-[11px] text-white/25">
                                04
                            </span>

                        </div>

                        <div className="mt-7 space-y-6">

                            {experience.map((item) => (
                                <div
                                    key={item.role}
                                    className="
                                        flex
                                        flex-col
                                        gap-2
                                        border-l
                                        border-white/8
                                        pl-4

                                        sm:flex-row
                                        sm:items-start
                                        sm:justify-between
                                        sm:border-l-0
                                        sm:pl-0
                                    "
                                >

                                    <div>

                                        <p className="text-sm font-medium text-white">
                                            {item.role}
                                        </p>

                                        <p className="mt-1 text-sm text-white/50">
                                            {item.description}
                                        </p>

                                    </div>

                                    <span
                                        className="
                                            shrink-0
                                            text-[11px]
                                            uppercase
                                            tracking-[0.15em]
                                            text-white/40
                                        "
                                    >
                                        {item.period}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        HIGHLIGHTS
                    ================================================= */}

                    <div
                        className="
                            about-card
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            md:col-span-2

                            lg:col-span-4
                            lg:col-start-1
                            lg:row-start-3
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    Highlights
                                </p>

                                <p className="mt-2 text-sm text-white/45">
                                    A few things I'm proud of
                                </p>

                            </div>

                            <span className="text-[11px] text-white/25">
                                06
                            </span>

                        </div>


                        <div
                            className="
                                mt-7
                                grid
                                grid-cols-1
                                gap-4

                                sm:grid-cols-3
                            "
                        >

                            {achievements.map((item) => (
                                <div
                                    key={`${item.year}-${item.title}`}
                                    className="
                                        flex
                                        gap-4
                                        border-b
                                        border-white/5
                                        pb-4

                                        sm:border-b-0
                                        sm:border-r
                                        sm:pr-4

                                        sm:last:border-r-0
                                    "
                                >

                                    <span
                                        className="
                                            w-9
                                            shrink-0
                                            font-mono
                                            text-[11px]
                                            text-[#EEFF6B]/55
                                        "
                                    >
                                        {item.year}
                                    </span>

                                    <div>

                                        <p className="text-sm font-medium text-white/80">
                                            {item.title}
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-[11px]
                                                leading-5
                                                text-white/45
                                            "
                                        >
                                            {item.description}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        OUTSIDE THE CODE
                    ================================================= */}

                    <div
                        className="
                            about-card
                            group
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            md:col-span-2

                            lg:col-span-4
                            lg:col-start-1
                            lg:row-start-4
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                gap-6

                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    Outside the code
                                </p>

                                <p className="mt-2 text-sm text-white/50">
                                    The things that keep me curious.
                                </p>

                            </div>


                            <div className="flex flex-wrap gap-2">

                                {interests.map((interest) => (
                                    <span
                                        key={interest}
                                        className="
                                            rounded-md
                                            border
                                            border-white/7
                                            bg-white/2
                                            px-3
                                            py-2
                                            text-[11px]
                                            text-white/50
                                            transition-all
                                            duration-300
                                            hover:border-[#EEFF6B]/25
                                            hover:bg-[#EEFF6B]/4
                                            hover:text-[#EEFF6B]/80
                                        "
                                    >
                                        {interest}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        TECHNOLOGIES
                    ================================================= */}

                    <div
                        className="
                            about-card
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            transition-all
                            duration-500
                            hover:border-[#EEFF6B]/20
                            hover:bg-white/[0.035]

                            md:col-span-2

                            lg:col-span-4
                            lg:col-start-1
                            lg:row-start-5
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    Technologies
                                </p>

                                <p className="mt-2 text-sm text-white/45">
                                    Tools and technologies I work with
                                </p>

                            </div>

                            <span
                                className="
                                    font-mono
                                    text-[11px]
                                    text-white/25
                                "
                            >
                                STACK / {technologyCount
                                    .toString()
                                    .padStart(2, "0")}
                            </span>

                        </div>


                        {/* =================================================
                            TECHNOLOGY CATEGORIES
                        ================================================= */}

                        <div
                            className="
                                mt-8
                                grid
                                grid-cols-1
                                gap-8

                                sm:grid-cols-2

                                lg:grid-cols-5
                            "
                        >

                            {technologyGroups.map((group) => (
                                <div key={group.name}>

                                    <div className="mb-3">

                                        <p className="text-sm font-medium text-white/80">
                                            {group.name}
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                leading-5
                                                text-white/45
                                            "
                                        >
                                            {group.description}
                                        </p>

                                    </div>


                                    <div className="flex flex-wrap gap-1.5">

                                        {group.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="
                                                    rounded-md
                                                    border
                                                    border-white/7
                                                    bg-white/2
                                                    px-2.5
                                                    py-1.5
                                                    text-[11px]
                                                    text-white/50
                                                    transition-all
                                                    duration-300
                                                    hover:border-[#EEFF6B]/25
                                                    hover:bg-[#EEFF6B]/4
                                                    hover:text-[#EEFF6B]/80
                                                "
                                            >
                                                {technology}
                                            </span>
                                        ))}

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}