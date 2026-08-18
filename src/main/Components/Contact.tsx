/* oxlint-disable tailwindcss/no-contradicting-classname */
import { useEffect, useRef, useState } from "react"
import { animate, stagger } from "animejs"

type FormStatus = "idle" | "sending" | "success" | "error"

// Shared input/textarea style — focus variants intentionally override base
const inputCls = [
    "w-full rounded-lg border border-white/8 bg-black/20",
    "px-4 py-3 text-sm text-white outline-none",
    "transition-all duration-300",
    "placeholder:text-white/20",
    "focus:border-[#EEFF6B]/40 focus:bg-black/30 focus:ring-2 focus:ring-[#EEFF6B]/10",
].join(" ")

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null)

    const [status, setStatus] = useState<FormStatus>("idle")

    useEffect(() => {
        if (!sectionRef.current) return

        animate(".contact-intro", {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 700,
            easing: "easeOutExpo",
        })

        animate(".contact-card", {
            opacity: [0, 1],
            translateY: [28, 0],
            delay: stagger(100, { start: 180 }),
            duration: 700,
            easing: "easeOutExpo",
        })
    }, [])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (status === "sending") return

        const form = event.currentTarget
        const formData = new FormData(form)

        setStatus("sending")

        formData.append(
            "access_key",
            "9dacd26a-f52a-4469-bb54-6e71accce2f6"
        )

        formData.append(
            "subject",
            `New portfolio message from ${formData.get("name")}`
        )

        formData.append(
            "from_name",
            "Harley's Portfolio"
        )

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            )

            const data = await response.json()

            if (data.success) {
                setStatus("success")
                form.reset()
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    return (
        <section
            ref={sectionRef}
            id="contact"
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
                    -right-52
                    top-10
                    h-125
                    w-125
                    rounded-full
                    bg-[#EEFF6B]/2.5
                    blur-[150px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-60
                    bottom-0
                    h-100
                    w-100
                    rounded-full
                    bg-[#17175c]/25
                    blur-[130px]
                "
            />

            <div className="mx-auto w-full max-w-7xl">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="contact-intro opacity-0">

                    <div className="flex items-center gap-4">

                        <span className="h-px w-8 bg-[#EEFF6B]/60" />

                        <span
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.3em]
                                text-[#EEFF6B]/70
                            "
                        >
                            03 / Contact
                        </span>

                    </div>

                    <h2
                        className="
                            mt-6
                            max-w-4xl
                            text-4xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Let's build something.
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
                        Have a project, idea, or opportunity in mind?
                        Send me a message and I'll get back to you.
                    </p>

                </div>


                {/* =====================================================
                    CONTACT GRID
                ===================================================== */}

                <div
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-3
                        lg:grid-cols-[0.8fr_1.2fr]
                    "
                >

                    {/* =================================================
                        LEFT COLUMN
                    ================================================= */}

                    <div className="flex flex-col gap-3">

                        {/* =================================================
                            CONTACT INTRO CARD
                        ================================================= */}

                        <div
                            className="
                                contact-card
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
                            "
                        >

                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-4
                                    -top-8
                                    select-none
                                    text-[9rem]
                                    font-bold
                                    leading-none
                                    text-white/2
                                    transition-transform
                                    duration-700
                                    group-hover:scale-110
                                "
                            >
                                →
                            </span>

                            <div className="relative z-10">

                                <p
                                    className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    Get in touch
                                </p>

                                <h3
                                    className="
                                        mt-6
                                        max-w-md
                                        text-2xl
                                        font-semibold
                                        leading-tight
                                        tracking-tight
                                        text-white
                                        sm:text-3xl
                                    "
                                >
                                    Have something worth building?
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-md
                                        text-sm
                                        leading-7
                                        text-white/50
                                    "
                                >
                                    I'm always interested in interesting
                                    projects, collaborations, and opportunities
                                    where I can build, design, or solve
                                    something useful.
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
                            RESUME
                        ================================================= */}

                        <div
                            className="
                                contact-card
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
                            "
                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            uppercase
                                            tracking-[0.25em]
                                            text-[#EEFF6B]/65
                                        "
                                    >
                                        Curriculum Vitae
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-6
                                            text-white/45
                                        "
                                    >
                                        A closer look at my experience,
                                        education, and skills.
                                    </p>

                                </div>

                                <span
                                    className="
                                        font-mono
                                        text-[9px]
                                        text-white/20
                                    "
                                >
                                    PDF
                                </span>

                            </div>

                            <a
                                href="/cv.pdf"
                                download
                                className="
                                    mt-6
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-between
                                    rounded-lg
                                    border
                                    border-white/8
                                    bg-white/2.5
                                    px-4
                                    py-3
                                    text-xs
                                    font-medium
                                    text-white/65
                                    transition-all
                                    duration-300
                                    hover:border-[#EEFF6B]/30
                                    hover:bg-[#EEFF6B]/5
                                    hover:text-[#EEFF6B]
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-[#EEFF6B]/20
                                "
                            >

                                <span>
                                    Download CV
                                </span>

                                <span className="text-base text-white/30">
                                    ↓
                                </span>

                            </a>

                        </div>


                        {/* =================================================
                            SOCIALS
                        ================================================= */}

                        <div
                            className="
                                contact-card
                                rounded-2xl
                                border
                                border-white/8
                                bg-white/2.5
                                p-6
                                opacity-0
                            "
                        >

                            <p
                                className="
                                    text-[10px]
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#EEFF6B]/65
                                "
                            >
                                Find me elsewhere
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-2">

                                <a
                                    href="https://github.com/Harleythetech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-lg
                                        border
                                        border-white/7
                                        bg-white/2
                                        px-4
                                        py-3
                                        text-xs
                                        text-white/45
                                        transition-all
                                        duration-300
                                        hover:border-[#EEFF6B]/25
                                        hover:bg-[#EEFF6B]/4
                                        hover:text-[#EEFF6B]/80
                                    "
                                >

                                    <span>GitHub</span>

                                    <span
                                        className="
                                            text-white/20
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-0.5
                                            group-hover:text-[#EEFF6B]/60
                                        "
                                    >
                                        ↗
                                    </span>

                                </a>

                                <a
                                    href="https://www.linkedin.com/in/jovellano/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-lg
                                        border
                                        border-white/7
                                        bg-white/2
                                        px-4
                                        py-3
                                        text-xs
                                        text-white/45
                                        transition-all
                                        duration-300
                                        hover:border-[#EEFF6B]/25
                                        hover:bg-[#EEFF6B]/4
                                        hover:text-[#EEFF6B]/80
                                    "
                                >

                                    <span>LinkedIn</span>

                                    <span
                                        className="
                                            text-white/20
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-0.5
                                            group-hover:text-[#EEFF6B]/60
                                        "
                                    >
                                        ↗
                                    </span>

                                </a>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        CONTACT FORM
                    ================================================= */}

                    <div
                        className="
                            contact-card
                            rounded-2xl
                            border
                            border-white/8
                            bg-white/2.5
                            p-7
                            opacity-0
                            sm:p-8
                        "
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <p
                                    className="
                                        text-[10px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#EEFF6B]/65
                                    "
                                >
                                    Send a message
                                </p>

                                <p className="mt-2 text-sm text-white/45">
                                    I'll receive your message directly.
                                </p>

                            </div>

                            <span
                                className="
                                    font-mono
                                    text-[9px]
                                    text-white/20
                                "
                            >
                                WEB / FORM
                            </span>

                        </div>


                        {/* =================================================
                            FORM
                        ================================================= */}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8"
                        >

                            {/* Honeypot */}

                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />


                            {/* Name + Email */}

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-5
                                    sm:grid-cols-2
                                "
                            >

                                <div>

                                    <label
                                        htmlFor="contact-name"
                                        className="
                                            mb-2
                                            block
                                            text-[10px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-white/40
                                        "
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="Your name"
                                        className={inputCls}
                                    />

                                </div>


                                <div>

                                    <label
                                        htmlFor="contact-email"
                                        className="
                                            mb-2
                                            block
                                            text-[10px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-white/40
                                        "
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        className={inputCls}
                                    />

                                </div>

                            </div>


                            {/* Subject */}

                            <div className="mt-5">

                                <label
                                    htmlFor="contact-subject"
                                    className="
                                        mb-2
                                        block
                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/40
                                    "
                                >
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    required
                                    placeholder="What's this about?"
                                    className={inputCls}
                                />

                            </div>


                            {/* Message */}

                            <div className="mt-5">

                                <label
                                    htmlFor="contact-message"
                                    className="
                                        mb-2
                                        block
                                        text-[10px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-white/40
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={7}
                                    placeholder="Tell me a little about your project, idea, or opportunity..."
                                    className={`${inputCls} resize-none leading-6`}
                                />

                            </div>


                            {/* Status */}

                            <div
                                aria-live="polite"
                                className="mt-5 min-h-5"
                            >

                                {status === "success" && (
                                    <p
                                        className="
                                            text-xs
                                            leading-5
                                            text-[#EEFF6B]/80
                                        "
                                    >
                                        Message sent successfully. I'll get
                                        back to you as soon as I can.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p
                                        className="
                                            text-xs
                                            leading-5
                                            text-red-300/80
                                        "
                                    >
                                        Something went wrong while sending
                                        your message. Please try again.
                                    </p>
                                )}

                            </div>


                            {/* Submit */}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="
                                    mt-3
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    rounded-lg
                                    border
                                    border-[#EEFF6B]/30
                                    bg-[#EEFF6B]/8
                                    px-5
                                    py-3.5
                                    text-xs
                                    font-medium
                                    text-[#EEFF6B]
                                    transition-all
                                    duration-300
                                    hover:border-[#EEFF6B]/60
                                    hover:bg-[#EEFF6B]/[0.14]
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-[#EEFF6B]/30
                                    disabled:cursor-not-allowed
                                    disabled:opacity-50
                                "
                            >

                                <span>
                                    {status === "sending"
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>

                                <span className="text-base">
                                    →
                                </span>

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}