import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const NAV_LINKS = [
    { href: "#hero",     label: "Home" },
    { href: "#about",    label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Nav mount animation
    useEffect(() => {
        if (!navRef.current) return;
        animate(navRef.current, {
            translateY: [-64, 0],
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutExpo",
        });
        animate(".nav-logo", {
            opacity: [0, 1],
            translateX: [-8, 0],
            duration: 500,
            delay: 350,
            easing: "easeOutExpo",
        });
        animate(".desktop-nav-link", {
            opacity: [0, 1],
            translateY: [-6, 0],
            delay: stagger(60, { start: 420 }),
            duration: 420,
            easing: "easeOutExpo",
        });
        animate(".nav-social", {
            opacity: [0, 1],
            translateX: [14, 0],
            delay: stagger(70, { start: 560 }),
            duration: 400,
            easing: "easeOutExpo",
        });
    }, []);

    // Mobile overlay open animation
    useEffect(() => {
        if (!menuOpen || !overlayRef.current) return;
        animate(overlayRef.current, {
            opacity: [0, 1],
            duration: 320,
            easing: "easeOutExpo",
        });
        animate(".overlay-header", {
            opacity: [0, 1],
            translateY: [-14, 0],
            duration: 380,
            delay: 80,
            easing: "easeOutExpo",
        });
        animate(".menu-link-item", {
            opacity: [0, 1],
            translateY: [28, 0],
            delay: stagger(55, { start: 160 }),
            duration: 480,
            easing: "easeOutExpo",
        });
        animate(".overlay-footer", {
            opacity: [0, 1],
            translateY: [14, 0],
            duration: 360,
            delay: 420,
            easing: "easeOutExpo",
        });
    }, [menuOpen]);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;
        const navHeight = navRef.current?.offsetHeight ?? 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
    };

    const closeMenu = () => {
        if (!overlayRef.current) return;
        animate(overlayRef.current, {
            opacity: [1, 0],
            duration: 240,
            easing: "easeInExpo",
            onComplete: () => setMenuOpen(false),
        });
    };

    const closeMenuAndScroll = (_e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        closeMenu();
        // Wait for close animation before scrolling
        setTimeout(() => {
            const id = href.replace("#", "");
            const el = document.getElementById(id);
            if (!el) return;
            const navHeight = navRef.current?.offsetHeight ?? 80;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
        }, 260);
    };

    return (
        <>
            {/* ── Main nav bar ── */}
            <nav
                ref={navRef}
                id="main-nav"
                style={{ opacity: 0 }}
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                    scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
                }`}
            >
                <div className="flex justify-between items-center px-12 md:px-8 lg:px-16 py-6 md:py-6">
                    <div className="flex items-center gap-6">
                        <a href="#hero" className="nav-logo" style={{ opacity: 0 }} onClick={(e) => scrollTo(e, "#hero")}>
                            <img src={logo} alt="Harley's Portfolio" className="h-8" />
                        </a>
                        <div className="hidden md:flex items-center gap-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    className="desktop-nav-link text-white text-base font-medium hover:text-white/55 transition-colors"
                                    style={{ opacity: 0 }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-6">
                            <a href="https://github.com/Harleythetech" target="_blank" className="nav-social" style={{ opacity: 0 }}>
                                <img src={github} alt="Github Profile" className="h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/jovellano/" target="_blank" className="nav-social" style={{ opacity: 0 }}>
                                <img src={linkedin} alt="Linkedin Profile" className="h-6" />
                            </a>
                        </div>

                        {/* Hamburger — mobile only */}
                        <button
                            className="md:hidden text-white p-1 transition-transform active:scale-90"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Full-screen mobile overlay ── */}
            {menuOpen && (
                <div
                    ref={overlayRef}
                    role="dialog"
                    aria-modal="true"
                    style={{ opacity: 0 }}
                    className="fixed inset-0 z-60 bg-[#080808] flex flex-col md:hidden"
                >
                    {/* Overlay header */}
                    <div
                        className="overlay-header flex justify-between items-center px-12 py-6"
                        style={{ opacity: 0 }}
                    >
                        <img src={logo} alt="Harley's Portfolio" className="h-8" />
                        <button
                            onClick={closeMenu}
                            aria-label="Close menu"
                            className="text-white/50 hover:text-white transition-colors p-2 -mr-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Hairline */}
                    <div className="mx-6 h-px bg-white/7" />

                    {/* Nav links */}
                    <nav className="flex-1 flex flex-col justify-center px-12">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => closeMenuAndScroll(e, link.href)}
                                className="menu-link-item group flex items-center justify-between py-6 border-b border-white/6 last:border-0"
                                style={{ opacity: 0 }}
                            >
                                <span className="text-[2.5rem] font-semibold leading-none tracking-tight text-white/80 group-hover:text-white transition-colors duration-150">
                                    {link.label}
                                </span>
                                <span className="text-white/20 text-xl translate-x-2 group-hover:translate-x-0 group-hover:text-white/50 transition-all duration-300">
                                    →
                                </span>
                            </a>
                        ))}
                    </nav>

                    {/* Overlay footer — socials */}
                    <div className="overlay-footer px-12 py-8" style={{ opacity: 0 }}>
                        <div className="h-px bg-white/7 mb-6" />
                        <div className="flex items-center gap-7">
                            <a
                                href="https://github.com/Harleythetech"
                                target="_blank"
                                className="flex items-center gap-2.5 text-white/35 hover:text-white/75 transition-colors duration-200"
                            >
                                <img src={github} alt="GitHub" className="h-4.5" />
                                <span className="text-sm font-medium tracking-wide">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jovellano/"
                                target="_blank"
                                className="flex items-center gap-2.5 text-white/35 hover:text-white/75 transition-colors duration-200"
                            >
                                <img src={linkedin} alt="LinkedIn" className="h-4.5" />
                                <span className="text-sm font-medium tracking-wide">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
