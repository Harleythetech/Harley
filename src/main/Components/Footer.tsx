import logo from "../../assets/logo.svg";
import { useState } from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

interface NavLink {
    href: string;
    label: string;
}

interface SocialLink {
    name: string;
    handle: string;
    href: string;
    icon: string;
}

const NAV_LINKS: NavLink[] = [
    { href: "#hero",     label: "Home" },
    { href: "#about",    label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact",  label: "Contact" },
];

const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "GitHub",
        handle: "Harleythetech",
        href: "https://github.com/Harleythetech",
        icon: github,
    },
    {
        name: "LinkedIn",
        handle: "jovellano",
        href: "https://www.linkedin.com/in/jovellano/",
        icon: linkedin,
    },
];

const TECH_STACK = ["React", "TypeScript", "Tailwind CSS", "Vite", "AnimeJS"];

export default function Footer() {
    const year = new Date().getFullYear();
    const [copied, setCopied] = useState(false);
    const email = "business.jovellano@gmail.com";

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;
        const nav = document.getElementById("main-nav");
        const offset = nav?.offsetHeight ?? 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <footer className="relative text-neutral-300 border-t border-neutral-800/80 antialiased selection:bg-neutral-800 selection:text-white">
            <div className="px-12 md:px-8 lg:px-16 pt-16 pb-12">
                
                {/* ── Top Grid: Lead CTA & Navigation Matrix ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-800/60">
                    
                    {/* Brand & Direct Contact (Spans 7 cols on large screens) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                        <div>
                            <img
                                src={logo}
                                alt="Harley Jovellano"
                                className="h-9 w-auto object-contain object-left mb-6 brightness-95 hover:brightness-100 transition-all"
                            />
                            <p className="text-xl sm:text-2xl font-normal tracking-tight text-neutral-200 max-w-lg leading-snug">
                                I build & design things for the web.
                            </p>
                        </div>

                        {/* Interactive Direct Contact Block */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-950 bg-neutral-100 hover:bg-white active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                            >
                                Get in touch
                            </a>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                aria-label="Copy email address to clipboard"
                                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-mono text-neutral-400 bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 hover:text-neutral-200 active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
                            >
                                <span>{email}</span>
                                <span className="text-xs text-neutral-500 font-sans">
                                    {copied ? "Copied" : "Copy"}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Navigation & Context Matrix (Spans 5 cols on large screens) */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-8">
                        
                        {/* Sitemap Navigation */}
                        <div>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                                Navigation
                            </span>
                            <ul className="space-y-3">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => scrollTo(e, link.href)}
                                            className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social & Availability */}
                        <div className="space-y-6">
                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                                    Network
                                </span>
                                <div className="space-y-3">
                                    {SOCIAL_LINKS.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-neutral-100 group transition-colors duration-150"
                                        >
                                            <img
                                                src={social.icon}
                                                alt=""
                                                aria-hidden="true"
                                                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                                            />
                                            <span>{social.name}</span>
                                            <span className="text-neutral-600 group-hover:text-neutral-400 text-xs transition-colors">
                                                ↗
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Status Indicator removed */}
                        </div>

                    </div>
                </div>

                {/* ── Bottom Strip: Metadata & Colophon ── */}
                <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span>© {year} Vincent Harley R. Jovellano</span>
                        <span>·</span>
                        <span>Philippines (UTC+8)</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 text-neutral-500">
                        <span>Crafted with</span>
                        <span className="text-neutral-400">{TECH_STACK.join(" / ")}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}