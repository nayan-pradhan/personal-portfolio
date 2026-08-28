import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experience = [
    {
        company: "Tesla",
        url: "https://www.tesla.com",
        logo: "/personal-portfolio/logos/tesla_motors_logo.jpeg",
        roles: [
            {
                title: "Sr. Software Engineer, SCADA",
                period: "2025 — Present",
                description: "Building AI applications for manufacturing, including knowledge-base RAG systems, agentic loops, and agent harnesses. Also contributing to global SCADA software: architecture for reliable data collection from robots and PLCs over OPC UA, plus data transmission, processing, and storage with Kafka, APIs, and internal platforms, and visualization tools for manufacturing KPIs."
            },
            {
                title: "Software Engineer, SCADA",
                period: "2023 — 2025",
            }
        ]
    },
    {
        company: "planblue",
        url: "https://www.planblue.com",
        logo: "/personal-portfolio/logos/planblue_logo.jpeg",
        roles: [
            {
                title: "Junior Development Engineer",
                period: "2022 — 2023",
                description: `Built software for underwater satellites (C++/Python), including video streaming, multi-sensor integration and fusion, camera algorithms, GPS/GNSS and navigation stack, and MQTT - ROS2 communication.`
            }
        ]
    },
    {
        company: "Max Planck Institute for Intelligent Systems",
        url: "https://www.is.mpg.de",
        logo: "/personal-portfolio/logos/maxplanck_logo.jpeg",
        roles: [
            {
                title: "Research Assistant",
                period: "2022",
                description: `Developed real-time control, simulation, and motion planning software for a 6-DoF quadruped robot, contributing research, sensor integration, and open-source tools using Python and PyBullet.`,
            }
        ]
    },
    {
        company: "WasteAnt",
        url: "https://wasteant.com",
        logo: "/personal-portfolio/logos/wasteant_gmbh_logo.jpeg",
        roles: [
            {
                title: "Student Software Developer",
                period: "2021 — 2022",
                description: `Built ROS-based computer vision and ML systems for waste quality assessment, including LSTM prediction, relay control, and node recovery frameworks in Python.`,
            }
        ]
    },
    {
        company: "Jacobs University Bremen",
        url: "https://www.jacobs-university.de",
        logo: "/personal-portfolio/logos/jacobs_university_logo.jpeg",
        roles: [
            {
                title: "Team Lead, Research & Teaching Assistant",
                period: "2020 — 2022",
                description: `Developed software and hardware for robotic systems (BlueROV2, DuckieBots, ESA Spherical Robot) using ROS, Python/C++, and OpenCV, contributing to research, teaching, and leading a team effort that earned awards at the 2022 RAMI Underwater Robotics Competition.`
            }
        ]
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Experience = () => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const inView = useInView(ref, {
        once: true,
        amount: 0.05,
    });

    const currentContainerVariants = isMobile ? { hidden: {}, visible: {} } : containerVariants;
    const currentItemVariants = isMobile
        ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
        : itemVariants;

    return (
        <section id="experience" ref={ref} className="scroll-mt-24 py-20 md:py-28 px-5 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <SectionHeading index="01" title="Experience" />

                <motion.div
                    className="relative flex flex-col"
                    variants={currentContainerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <div className="absolute left-[23px] top-3 bottom-3 w-px bg-line hidden sm:block" />

                    {experience.map((exp) => (
                        <motion.article
                            key={exp.company}
                            variants={currentItemVariants}
                            className="relative sm:pl-16 pb-12 last:pb-0 group"
                        >
                            <div className="hidden sm:block absolute left-[18px] top-5 h-3 w-3 rounded-full bg-page border-2 border-accent z-10 group-hover:bg-accent transition-colors" />

                            <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-colors duration-300 hover:border-accent/40">
                                <div className="flex items-start gap-4">
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt=""
                                            className="flex-shrink-0 w-12 h-12 object-contain rounded-lg bg-page ring-1 ring-line"
                                        />
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <a
                                            href={exp.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-semibold text-ink hover:text-accent transition-colors"
                                        >
                                            {exp.company}
                                        </a>
                                        {exp.roles.map((role, idx) => (
                                            <div
                                                key={idx}
                                                className={idx > 0 ? "mt-4 pt-4 border-t border-line" : "mt-1"}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                                                    <h3 className="font-medium text-ink">
                                                        {role.title}
                                                    </h3>
                                                    <span className="text-muted text-sm shrink-0 tabular-nums">
                                                        {role.period}
                                                    </span>
                                                </div>
                                                {role.description && (
                                                    <p className="mt-2 text-muted text-[15px] leading-relaxed">
                                                        {role.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
