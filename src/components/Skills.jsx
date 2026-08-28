import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
    {
        category: "Languages",
        items: ["Python", "C++", "Go", "JavaScript"],
    },
    {
        category: "AI",
        items: ["RAG", "Agentic loops", "Agent harnesses", "LLMs"],
    },
    {
        category: "Robotics & Perception",
        items: ["ROS / ROS2", "OpenCV", "PyBullet", "Computer Vision"],
    },
    {
        category: "Systems & Data",
        items: ["Kafka", "OPC UA", "MQTT", "Redis"],
    },
];

const Skills = () => {
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
        amount: isMobile ? 0.1 : 0.2,
    });

    return (
        <section id="skills" ref={ref} className="scroll-mt-24 py-20 md:py-28 px-5 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <SectionHeading index="03" title="Skills" />

                <motion.div
                    className="grid gap-8"
                    initial={isMobile ? false : { opacity: 0, y: 16 }}
                    animate={inView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <h3 className="text-sm tracking-[0.18em] uppercase text-muted mb-3">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3.5 py-1.5 rounded-full border border-line bg-surface text-sm text-ink"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
