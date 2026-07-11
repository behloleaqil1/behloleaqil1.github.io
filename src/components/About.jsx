import React from "react";
import {motion} from "framer-motion";
import {FiAward, FiBookOpen, FiCode, FiCpu, FiMapPin, FiZap} from "react-icons/fi";
import {HiSparkles} from "react-icons/hi";
import {styles} from "../style.js";
import {profile, services, technologies} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import SectionWrapper from "../hoc/index.js";
import {cn} from "../utils/cn.js";

const Tile = ({className, children, glow = "accent", delay = 0}) => (
    <motion.div
        variants={fadeIn("up", "spring", delay, 0.7)}
        className={cn(
            "relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 glass overflow-hidden group transition-all duration-500 hover:-translate-y-1 min-h-[160px]",
            className
        )}
    >
        <div
            className={cn(
                "pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700",
                glow === "accent" && "bg-accent",
                glow === "cyan" && "bg-accent-2",
                glow === "rose" && "bg-accent-4",
                glow === "lime" && "bg-accent-3"
            )}
        />
        <div className="relative z-10 h-full">{children}</div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mb-14">
                <p className={styles.sectionSubText}>·  About me</p>
                <h2 className={`${styles.sectionHeadText} mt-3`}>
                    Engineer. <span className="text-gradient-accent">AI builder.</span> Mentor.
                </h2>
                <p className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Full-stack engineer with 8+ years building enterprise apps, financial platforms and
                    branchless-banking systems. I design microservices, untangle legacy schemas, and ship
                    on Angular, React, Next.js, Spring Boot and Node.js — with Java, TypeScript, PHP and
                    Python on AWS and Azure.
                </p>
            </motion.div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 sm:auto-rows-[170px] gap-4 sm:gap-5">
                {/* Big intro tile */}
                <Tile className="sm:col-span-6 lg:col-span-7 row-span-2" glow="accent" delay={0}>
                    <div className="flex flex-col h-full justify-between">
                        <HiSparkles className="text-accent-2 text-3xl"/>
                        <div>
                            <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold leading-tight">
                                Reliability at banking scale, with the polish of a craft project.
                            </h3>
                            <p className="mt-3 text-secondary leading-relaxed">
                                I've shipped branchless-banking systems trusted by millions — EasyPaisa, JazzCash,
                                ZTBL — and I'll still rewrite a CSS animation six times until it feels right.
                                Platform discipline and visual craft are the same skill; I just want to feel
                                both in the product.
                            </p>
                        </div>
                    </div>
                </Tile>

                {/* Location */}
                <Tile className="sm:col-span-3 lg:col-span-5" glow="cyan" delay={0.05}>
                    <div className="flex flex-col h-full justify-between">
                        <FiMapPin className="text-accent-2 text-2xl"/>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted">Based in</div>
                            <div className="font-display text-2xl text-white font-semibold mt-1">{profile.location}</div>
                            <div className="text-secondary text-sm mt-1">UTC +5 · {profile.availability}</div>
                        </div>
                    </div>
                </Tile>

                {/* Currently */}
                <Tile className="sm:col-span-3 lg:col-span-5" glow="lime" delay={0.1}>
                    <div className="flex flex-col h-full justify-between">
                        <FiZap className="text-accent-3 text-2xl"/>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted">Currently</div>
                            <div className="font-display text-xl text-white font-semibold mt-1 leading-snug">
                                Senior SWE at <span className="text-accent-3">Elixir Technologies</span>
                            </div>
                            <div className="text-secondary text-sm mt-1">Angular · Spring Boot · Node.js · PostgreSQL</div>
                        </div>
                    </div>
                </Tile>

                {/* Tech orbit */}
                <Tile className="sm:col-span-6 lg:col-span-7 row-span-2 overflow-hidden" glow="accent" delay={0.15}>
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between">
                            <FiCode className="text-accent text-2xl"/>
                            <span className="text-xs font-mono uppercase tracking-wider text-muted">Daily stack</span>
                        </div>
                        <div className="mt-4 flex-1 flex flex-wrap gap-2 content-start overflow-hidden">
                            {technologies.slice(0, 22).map((t) => (
                                <div
                                    key={t.name}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all"
                                >
                                    <img src={t.icon} alt="" width="16" height="16" loading="lazy" decoding="async" className="w-4 h-4 object-contain opacity-80"/>
                                    <span className="text-xs text-white/90 font-medium">{t.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 text-xs font-mono text-muted">
                            // 30+ technologies in active rotation — full list below
                        </div>
                    </div>
                </Tile>

                {/* AI focus */}
                <Tile className="sm:col-span-3 lg:col-span-5" glow="rose" delay={0.18}>
                    <div className="flex flex-col h-full justify-between">
                        <FiCpu className="text-accent-4 text-2xl"/>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted">Focus</div>
                            <div className="font-display text-lg text-white font-semibold mt-1 leading-snug">
                                Production systems, not demos
                            </div>
                            <div className="text-secondary text-sm mt-1">
                                Microservices · GraphQL · offline-first data · CI/CD
                            </div>
                        </div>
                    </div>
                </Tile>

                {/* Education */}
                <Tile className="sm:col-span-3 lg:col-span-5" glow="lime" delay={0.22}>
                    <div className="flex flex-col h-full justify-between">
                        <FiBookOpen className="text-accent-3 text-2xl"/>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted">Education</div>
                            <div className="font-display text-lg text-white font-semibold mt-1 leading-snug">
                                {profile.education.degree}
                            </div>
                            <div className="text-secondary text-sm mt-1">
                                {profile.education.school} · {profile.education.years}
                            </div>
                        </div>
                    </div>
                </Tile>

                {/* Services */}
                {services.map((s, i) => (
                    <Tile
                        key={s.title}
                        className="sm:col-span-3 lg:col-span-3"
                        glow={["accent", "cyan", "rose", "lime"][i % 4]}
                        delay={0.28 + i * 0.05}
                    >
                        <div className="flex flex-col h-full justify-between">
                            <img src={s.icon} alt="" width="40" height="40" loading="lazy" decoding="async" className="w-10 h-10 object-contain opacity-90"/>
                            <div>
                                <div className="font-display text-white font-semibold text-base">{s.title}</div>
                                <div className="text-secondary text-xs mt-1 leading-relaxed">{s.description}</div>
                            </div>
                        </div>
                    </Tile>
                ))}

                {/* Highlight reel */}
                <Tile className="sm:col-span-6 lg:col-span-12" glow="accent" delay={0.5}>
                    <div className="flex items-center gap-5 h-full">
                        <FiAward className="text-accent text-3xl shrink-0"/>
                        <div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted">Highlight reel</div>
                            <div className="text-white font-display text-lg sm:text-xl mt-1">
                                EasyPaisa & JazzCash branchless banking · FoodPanda maps via TPL Trakker ·
                                MySimpleRx · FlexiGolf · UGAP · EdFry · ZTBL agricultural banking on Angular.
                            </div>
                        </div>
                    </div>
                </Tile>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
