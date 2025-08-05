import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
    {
        company: "Tesla",
        url: "https://www.tesla.com",
        logo: "/logos/tesla_motors_logo.jpeg",
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
        logo: "/logos/planblue_logo.jpeg",
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
        logo: "/logos/maxplanck_logo.jpeg",
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
        logo: "/logos/wasteant_gmbh_logo.jpeg",
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
        logo: "/logos/jacobs_university_logo.jpeg",
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

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Experience = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true , amount: 0.5});

    return (
        <section id="experience" ref={ref} className="py-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Left: Header */}
                <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-left md:text-right">Experience</h2>
                </div>
                {/* Right: Experience Cards */}
                <motion.div
                    className="md:w-2/3 flex flex-col gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                                transition: { type: "spring", stiffness: 300 },
                            }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4"
                        >
                            {exp.logo && (
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="w-16 h-16 object-contain"
                                    style={{ borderRadius: "10px" }}
                                />
                            )}
                            <div>
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
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;