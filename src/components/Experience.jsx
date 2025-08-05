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
                description: "Working on global SCADA software used for manufacturing. Working on software and architecture for data collection from robots and PLCs via OPC UA protocol, data tranmission, processing, and storage via Kafka, APIs, and internal tools, and data visualization to track KPIs.",
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
                description: `Built software for underwater satellites (C++/Python), including video streaming, multi-sensor integration and fusion, camera algorithms, GPS/GNSS and navigation stack, and MQTT - ROS2 communication.`
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
                description: `Developed real-time control, simulation, and motion planning software for a 6-DoF quadruped robot, contributing research, sensor integration, and open-source tools using Python and PyBullet.`,
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
                description: `Built ROS-based computer vision and ML systems for waste quality assessment, including LSTM prediction, relay control, and node recovery frameworks in Python.`,
            }
        ]
    }, 
    {
        company: "Jacobs University Bremen",
        url: "https://www.jacobs-university.de",
        logo: "/logos/jacobs_university_logo.jpeg",
        roles: [
            // {
            //     title: "Team Lead - RAMI Underwater Marine Robotics Competition",
            //     period: "2022 - 2022",
            //     description: `Led a 10-member team in the 2022 RAMI Underwater Robotics Competition, developing autonomous navigation and vision-based mission software (ROS, Python/C++, OpenCV) for the BlueROV2 — winning 3 awards.`,
            // },
            {
                title: "Team Lead, Research & Teaching Assistant",
                period: "2020- 2022",
                description: `Developed software and hardware for robotic systems (BlueROV2, DuckieBots, ESA Spherical Robot) using ROS, Python/C++, and OpenCV, contributing to research, teaching, and leading a team effort that earned awards at the 2022 RAMI Underwater Robotics Competition.`
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
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4 sm:px-6">
                {/* Left: Header */}
                <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-left md:text-right">Experience</h2>
                </div>
                {/* Right: Experience Cards with Timeline */}
                <div className="relative md:w-2/3 flex flex-col gap-6">
                    {/* Vertical timeline bar */}
                    <div className="hidden md:block absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900 rounded-full opacity-60 z-0"></div>
                    <motion.div
                        className="flex flex-col gap-12 relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {experience.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.04,
                                    boxShadow: "0 12px 32px 0 rgba(31, 38, 135, 0.18)",
                                    transition: { type: "tween", duration: 0.18, ease: "linear" },
                                }}
                                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex items-start gap-4 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                            >
                                {/* Logo (no circle) */}
                                {exp.logo && (
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="flex-shrink-0 w-16 h-16 object-contain"
                                        style={{ borderRadius: "8px" }}
                                    />
                                )}
                                <div className="flex-1">
                                    <a
                                        href={exp.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold text-blue-700 dark:text-blue-400 hover:underline"
                                    >
                                        {exp.company}
                                    </a>
                                    {/* Multiple roles per company */}
                                    {exp.roles.map((role, idx) => (
                                        <div key={idx} className={idx > 0 ? "mt-4 pt-4 border-t border-blue-100 dark:border-gray-700" : "mt-1"}>
                                            <div className="font-semibold text-gray-700 dark:text-gray-200 text-base">{role.title}</div>
                                            <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">{role.period}</div>
                                            <div className="whitespace-pre-line text-gray-800 dark:text-gray-300 text-[15px] leading-relaxed">
                                                {role.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;