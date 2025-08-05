import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
    {
        url: "https://www.tesla.com",
        company: "Tesla",
        roles: [
            {
                title: "Software Engineer, SCADA",
                period: "2023 - Present",
                description: "Worked on ..",
            }
        ]
    },
    {
        company: "planblue",
        url: "https://www.planblue.com",
        roles: [
            {
                title: "Junior Development Engineer",
                period: "2022 - 2023",
                description: "Worked on ..",
            }
        ]
    },
    {
        company: "Max Planck Institute for Intelligent Systems",
        url: "https://www.is.mpg.de",
        roles: [
            {
                title: "Research Assistant",
                period: "2022 - 2022",
                description: "Worked on ..",
            }
        ]
    },
    {
        company: "WasteAnt",
        url: "https://wasteant.com",
        roles: [
            {
                title: "Student Software Developer",
                period: "2021 - 2022",
                description: "Worked on ..",
            }
        ]
    }, 
    {
        company: "Jacobs University Bremen",
        url: "https://www.jacobs-university.de",
        roles: [
            {
                title: "Team Lead - RAMI Underwater Marine Robotics Competition",
                period: "2022 - 2022",
                description: "Worked on ..",
            },
            {
                title: "Research & Teaching Assistant",
                period: "2020- 2022",
                description: "Worked on ..",
            }
        ]
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 },
    }),
};

const Experience = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <section id="experience" ref={ref} className="py-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto flex flex-col gap-8">
                {experience.map((exp, i) => (
                    <motion.div
                        key={exp.company}
                        custom={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={itemVariants}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                    >
                        <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-semibold text-blue-600 hover:underline"
                        >
                            {exp.company}
                        </a>
                        <div className="mt-2 flex flex-col gap-4">
                            {exp.roles.map((role, idx) => (
                                <div key={idx}>
                                    <div className="font-medium">{role.title}</div>
                                    <div className="text-gray-500 text-sm">{role.period}</div>
                                    <div className="mt-1">{role.description}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;