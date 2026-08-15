import Profile from "../../assets/Profile.png"
import { useEffect, useRef, useState } from "react"
import { animate, stagger } from "animejs"

const TICKER_ITEMS = [
    '"Bug" was coined by Grace Hopper in 1947 — a real moth jammed the Harvard Mark II.',
    "No actual photo yet. This person is camera shy.",
    "Developer by day, gamer by night.",
    "Built with React + Vite + Tailwind.",
]

// Fallback trivia used if the API call fails
const FALLBACK_TRIVIA: string[] = [
    'The term "bug" was coined by Grace Hopper in 1947 — a real moth jammed the Harvard Mark II.',
    "JavaScript was created in just 10 days by Brendan Eich in May 1995.",
    "The first computer mouse was made of wood, invented by Doug Engelbart in 1964.",
    "Linux powers over 96% of the world's top 1 million web servers.",
    "Git was created by Linus Torvalds in just 10 days in 2005.",
]

/** Decode HTML entities returned by the Open Trivia DB */
function decodeHtml(str: string): string {
    const txt = document.createElement("textarea")
    txt.innerHTML = str
    return txt.value
}

const OPENTDB_URL =
    "https://opentdb.com/api.php?amount=15&category=18&type=boolean"

export default function Hero() {
    const imageRef = useRef<HTMLDivElement>(null)
    const triviaRef = useRef<HTMLSpanElement>(null)

    const [trivia, setTrivia] = useState("Loading trivia...")
    const triviaPool = useRef<string[]>([])
    const triviaIndex = useRef(0)

    // Fetch trivia from Open Trivia DB on mount, fall back to local list
    useEffect(() => {
        fetch(OPENTDB_URL)
            .then((r) => r.json())
            .then((data) => {
                if (data.response_code === 0 && data.results?.length) {
                    const questions: string[] = data.results.map(
                        (item: { question: string }) => decodeHtml(item.question)
                    )
                    // Shuffle
                    for (let i = questions.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [questions[i], questions[j]] = [questions[j], questions[i]]
                    }
                    triviaPool.current = questions
                } else {
                    triviaPool.current = [...FALLBACK_TRIVIA]
                }
                triviaIndex.current = 0
                setTrivia(triviaPool.current[0])
            })
            .catch(() => {
                triviaPool.current = [...FALLBACK_TRIVIA]
                setTrivia(FALLBACK_TRIVIA[0])
            })
    }, [])

    // Rotate every 8s with a fade
    useEffect(() => {
        const rotate = () => {
            if (!triviaRef.current || triviaPool.current.length === 0) return
            animate(triviaRef.current, {
                opacity: [1, 0],
                duration: 400,
                easing: "easeInQuad",
                onComplete: () => {
                    triviaIndex.current =
                        (triviaIndex.current + 1) % triviaPool.current.length
                    setTrivia(triviaPool.current[triviaIndex.current])
                    animate(triviaRef.current!, {
                        opacity: [0, 1],
                        duration: 500,
                        easing: "easeOutQuad",
                    })
                },
            })
        }
        const id = setInterval(rotate, 8000)
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        animate(".hero-content-item", {
            opacity: [0, 1],
            translateY: [24, 0],
            delay: stagger(80, { start: 300 }),
            duration: 600,
            easing: "easeOutExpo",
        })

        if (imageRef.current) {
            animate(imageRef.current, {
                opacity: [0, 1],
                translateY: [16, 0],
                duration: 800,
                delay: 500,
                easing: "easeOutExpo",
            })
        }

        animate(".hero-footer-item", {
            opacity: [0, 1],
            translateY: [10, 0],
            delay: stagger(80, { start: 700 }),
            duration: 500,
            easing: "easeOutExpo",
        })
    }, [])

    return (
        <div
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[radial-gradient(ellipse_at_75%_50%,rgba(53,48,110,0.20)_0%,rgba(4,4,15,0)_55%)]
            "
            id="hero"
        >

            {/* =========================================================
                ATMOSPHERIC BACKGROUND
            ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-15%]
                    top-[10%]
                    h-[70vh]
                    w-[55vw]
                    rounded-full
                    bg-[#4c46a8]/8
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-20%]
                    bottom-[-20%]
                    h-[55vh]
                    w-[50vw]
                    rounded-full
                    bg-[#17175c]/16
                    blur-[130px]
                "
            />

            {/* Very subtle yellow ambient light around the profile */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[18%]
                    top-[30%]
                    h-80
                    w-[320px]
                    rounded-full
                    bg-[#EEFF6B]/2.5
                    blur-[110px]
                "
            />

            {/* =========================================================
                OUTER ROW
            ========================================================= */}

            <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">

                {/* =====================================================
                    CONTENT COLUMN
                ===================================================== */}

                <div
                    className="
                        flex
                        min-w-0
                        flex-1
                        flex-col
                        px-12
                        pt-20
                        pb-8
                        lg:px-16
                        lg:pt-24
                        lg:pb-10
                        xl:px-20
                    "
                >

                    {/* =================================================
                        TEXT BLOCK

                        Mobile  → normal top-of-screen flow
                        Desktop → vertically centered
                    ================================================= */}

                    <div className="flex flex-col lg:flex-1 lg:justify-center">

                        <div
                            className="
                                flex
                                max-w-135
                                flex-col
                                gap-2
                                xl:max-w-170
                                lg:gap-3
                            "
                        >

                            {/* Eyebrow */}

                            <p
                                className="
                                    hero-content-item
                                    text-xs
                                    tracking-wide
                                    text-gray-400
                                    lg:text-sm
                                "
                                style={{ opacity: 0 }}
                            >
                                Developer by day, Gamer at Night!
                            </p>


                            {/* Main heading */}

                            <h1
                                className="
                                    hero-content-item
                                    font-bold
                                    leading-[1.05]
                                    text-white
                                    text-[clamp(3rem,14vw,4.5rem)]
                                    lg:text-[clamp(3rem,4.5vw,6.5rem)]
                                "
                                style={{ opacity: 0 }}
                            >
                                Hi, I'm{" "}
                                <strong className="text-[#EEFF6B] underline">
                                    Harley!
                                </strong>
                            </h1>


                            {/* Subtitle */}

                            <h2
                                className="
                                    hero-content-item
                                    font-normal
                                    leading-tight
                                    text-white
                                    text-[clamp(1.25rem,6vw,1.75rem)]
                                    lg:text-[clamp(1.1rem,1.8vw,2rem)]
                                "
                                style={{ opacity: 0 }}
                            >
                                I build & design things for the web.
                            </h2>


                            {/* Description */}

                            <p
                                className="
                                    hero-content-item
                                    max-w-prose
                                    text-left
                                    font-mono
                                    text-xs
                                    leading-relaxed
                                    text-gray-400
                                    sm:text-sm
                                    lg:text-justify
                                    lg:text-[clamp(0.7rem,0.8vw,0.9rem)]
                                "
                                style={{ opacity: 0 }}
                            >
                                a student programmer driven by a love for tech
                                and hands-on projects. From building electronics
                                to car mods, audio setups, gaming, and graphic
                                design, I'm always pushing my skills and
                                creativity further.
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        MOBILE PROFILE IMAGE
                    ================================================= */}

                    <div
                        className="
                            mt-8
                            flex
                            min-h-45
                            flex-1
                            items-end
                            justify-center
                            lg:hidden
                        "
                    >
                        <img
                            src={Profile}
                            alt="Harley"
                            className="
                                h-full
                                min-h-45
                                max-h-95
                                w-auto
                                object-contain
                                object-bottom
                            "
                        />
                    </div>


                    {/* =================================================
                        DESKTOP EASTER-EGG FOOTER
                    ================================================= */}

                    <div
                        className="
                            hidden
                            max-w-135
                            items-center
                            gap-5
                            lg:flex
                            xl:max-w-170
                            xl:gap-6
                        "
                    >

                        <p
                            className="
                                hero-footer-item
                                flex-1
                                text-[clamp(0.6rem,0.65vw,0.8rem)]
                                leading-relaxed
                                text-gray-500
                            "
                            style={{ opacity: 0 }}
                        >
                            <b className="text-white">
                                Did you know:
                            </b>{" "}
                            <span ref={triviaRef}>{trivia}</span>
                        </p>


                        <div
                            className="
                                hero-footer-item
                                w-px
                                shrink-0
                                self-stretch
                                bg-gray-700
                            "
                            style={{ opacity: 0 }}
                        />


                        <p
                            className="
                                hero-footer-item
                                flex-1
                                text-[clamp(0.6rem,0.65vw,0.8rem)]
                                leading-relaxed
                                text-gray-500
                            "
                            style={{ opacity: 0 }}
                        >
                            No actual photo yet, this person is camera shy.
                        </p>

                    </div>


                    {/* =================================================
                        MOBILE MARQUEE TICKER
                    ================================================= */}

                    <div
                        className="
                            mt-6
                            overflow-hidden
                            border-t
                            border-gray-800
                            pt-4
                            lg:hidden
                        "
                    >

                        <div className="flex w-max animate-marquee">

                            {[...TICKER_ITEMS, ...TICKER_ITEMS].map(
                                (item, i) => (
                                    <span
                                        key={i}
                                        className="
                                            whitespace-nowrap
                                            pr-12
                                            font-mono
                                            text-xs
                                            text-gray-500
                                        "
                                    >
                                        {item}
                                    </span>
                                )
                            )}

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    DESKTOP IMAGE COLUMN
                ===================================================== */}

                <div
                    ref={imageRef}
                    style={{ opacity: 0 }}
                    className="
                        hidden
                        shrink-0
                        items-end
                        pt-16
                        lg:flex
                        lg:w-[40vw]
                        xl:w-[42vw]
                    "
                >
                    <img
                        src={Profile}
                        alt="Harley"
                        className="
                            w-full
                            max-h-[90vh]
                            object-contain
                            object-bottom
                        "
                    />
                </div>

            </div>

        </div>
    )
}