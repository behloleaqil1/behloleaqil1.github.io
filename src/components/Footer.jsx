import React from "react";
import {FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter} from "react-icons/fi";
import {profile, navLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="relative z-10 mt-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shadow-glow">
                            <span className="font-display font-bold text-white text-lg">B</span>
                        </div>
                        <div>
                            <div className="font-display font-semibold text-white">{profile.firstName} {profile.lastName}</div>
                            <div className="text-xs text-muted font-mono uppercase tracking-wider">{profile.role}</div>
                        </div>
                    </div>
                    <p className="mt-5 text-secondary text-sm max-w-sm leading-relaxed">
                        Building thoughtful digital products from {profile.location}. Available for select
                        engagements — let's make something great.
                    </p>
                </div>

                <div className="md:col-span-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted mb-4">Sitemap</div>
                    <ul className="space-y-2">
                        {navLinks.map((l) => (
                            <li key={l.id}>
                                <a href={`#${l.id}`}
                                   className="text-white/80 hover:text-white text-sm transition-colors">
                                    {l.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted mb-4">Elsewhere</div>
                    <div className="flex gap-3">
                        <a href={`mailto:${profile.email}`}
                           className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent-2 transition-colors">
                            <FiMail/>
                        </a>
                        <a href={profile.socials.github} target="_blank" rel="noreferrer"
                           className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent-2 transition-colors">
                            <FiGithub/>
                        </a>
                        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
                           className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent-2 transition-colors">
                            <FiLinkedin/>
                        </a>
                        <a href={profile.socials.twitter} target="_blank" rel="noreferrer"
                           className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent-2 transition-colors">
                            <FiTwitter/>
                        </a>
                    </div>

                    <a href="#hero"
                       className="mt-8 inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors">
                        <FiArrowUp/> Back to top
                    </a>
                </div>
            </div>

            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
                    <div>© {new Date().getFullYear()} {profile.firstName} {profile.lastName} · Crafted with React, Three.js & care.</div>
                    <div className="font-mono">v2.0 · {profile.location}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
