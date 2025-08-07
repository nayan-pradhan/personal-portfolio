
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
    {
        title: "6 Degrees of Freedom Motion Platform",
        description: "An open-source 6 DoF motion platform capable of producing controlled highly dynamic motion in 3D space.",
        url: "https://github.com/nayan-pradhan/solo-6dof-motion-platform",
        researchPaperUrl: "https://arxiv.org/abs/2303.17974",
        stack: [
            {
                name: "Python",
                icon: (
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#3776ab">
                        <path d="M535.8 264.5C528.1 233.6 513.5 210.3 482.4 210.3L442.3 210.3L442.3 257.7C442.3 294.5 411.1 325.5 375.5 325.5L268.7 325.5C239.5 325.5 215.3 350.5 215.3 379.8L215.3 481.6C215.3 510.6 240.5 527.6 268.7 535.9C302.5 545.8 335 547.6 375.5 535.9C402.4 528.1 428.9 512.4 428.9 481.6L428.9 440.9L322.2 440.9L322.2 427.3L482.4 427.3C513.5 427.3 525 405.6 535.8 373.1C547 339.6 546.5 307.4 535.8 264.5zM382.2 508.7C374.6 509.2 367.3 505.5 363.3 499C359.4 492.4 359.4 484.3 363.3 477.7C367.3 471.2 374.6 467.5 382.2 468C389.8 467.5 397.1 471.2 401.1 477.7C405 484.3 405 492.4 401.1 499C397.1 505.5 389.8 509.2 382.2 508.7zM263.8 312.1L370.6 312.1C400.3 312.1 424 287.6 424 257.8L424 155.9C424 126.9 399.6 105.2 370.6 100.3C334.8 94.4 295.9 94.7 263.8 100.4C218.6 108.4 210.4 125.1 210.4 156L210.4 196.7L317.3 196.7L317.3 210.3L170.3 210.3C139.2 210.3 112 229 103.5 264.5C93.7 305.2 93.3 330.6 103.5 373.1C111.1 404.7 129.2 427.3 160.3 427.3L197 427.3L197 378.5C197 343.2 227.5 312.1 263.8 312.1zM257.2 128.7C268.5 128.7 277.6 137.8 277.6 149.1C277.6 160.4 268.5 169.5 257.2 169.5C245.9 169.5 236.8 160.4 236.8 149.1C236.8 137.8 245.9 128.7 257.2 128.7z"/>
                    </svg>
                )
            },
            {
                name: "PyBullet",
                icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" fill="#2563eb"/>
                        <circle cx="8" cy="8" r="2" fill="#ffffff"/>
                        <circle cx="16" cy="8" r="2" fill="#ffffff"/>
                        <circle cx="8" cy="16" r="2" fill="#ffffff"/>
                        <circle cx="16" cy="16" r="2" fill="#ffffff"/>
                        <circle cx="12" cy="12" r="1.5" fill="#fbbf24"/>
                        <path d="M8 8l8 8M16 8l-8 8" stroke="#fbbf24" strokeWidth="1"/>
                    </svg>
                )
            },
        ]
    },
    {
        title: "Waterlinked Underwater GPS G2 ROS Package",
        description: "ROS package for Waterlinked Underwater G2 GPS system, enabling precise underwater positioning and navigation for marine robotics applications.",
        url: "https://github.com/nayan-pradhan/waterlinked_underwater_gps_g2",
        demoUrl: "",
        stack: [
            {
                name: "ROS",
                icon: (
                    <svg className="w-5 h-5 fill-[#22314e] dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M352 64C352 46.3 337.7 32 320 32C302.3 32 288 46.3 288 64L288 128L192 128C139 128 96 171 96 224L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 224C544 171 501 128 448 128L352 128L352 64zM160 432C160 418.7 170.7 408 184 408L216 408C229.3 408 240 418.7 240 432C240 445.3 229.3 456 216 456L184 456C170.7 456 160 445.3 160 432zM280 432C280 418.7 290.7 408 304 408L336 408C349.3 408 360 418.7 360 432C360 445.3 349.3 456 336 456L304 456C290.7 456 280 445.3 280 432zM400 432C400 418.7 410.7 408 424 408L456 408C469.3 408 480 418.7 480 432C480 445.3 469.3 456 456 456L424 456C410.7 456 400 445.3 400 432zM224 240C250.5 240 272 261.5 272 288C272 314.5 250.5 336 224 336C197.5 336 176 314.5 176 288C176 261.5 197.5 240 224 240zM368 288C368 261.5 389.5 240 416 240C442.5 240 464 261.5 464 288C464 314.5 442.5 336 416 336C389.5 336 368 314.5 368 288zM64 288C64 270.3 49.7 256 32 256C14.3 256 0 270.3 0 288L0 384C0 401.7 14.3 416 32 416C49.7 416 64 401.7 64 384L64 288zM608 256C590.3 256 576 270.3 576 288L576 384C576 401.7 590.3 416 608 416C625.7 416 640 401.7 640 384L640 288C640 270.3 625.7 256 608 256z"/>
                    </svg>
                )
            },
            {
                name: "Python",
                icon: (
                   <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#3776ab">
                        <path d="M535.8 264.5C528.1 233.6 513.5 210.3 482.4 210.3L442.3 210.3L442.3 257.7C442.3 294.5 411.1 325.5 375.5 325.5L268.7 325.5C239.5 325.5 215.3 350.5 215.3 379.8L215.3 481.6C215.3 510.6 240.5 527.6 268.7 535.9C302.5 545.8 335 547.6 375.5 535.9C402.4 528.1 428.9 512.4 428.9 481.6L428.9 440.9L322.2 440.9L322.2 427.3L482.4 427.3C513.5 427.3 525 405.6 535.8 373.1C547 339.6 546.5 307.4 535.8 264.5zM382.2 508.7C374.6 509.2 367.3 505.5 363.3 499C359.4 492.4 359.4 484.3 363.3 477.7C367.3 471.2 374.6 467.5 382.2 468C389.8 467.5 397.1 471.2 401.1 477.7C405 484.3 405 492.4 401.1 499C397.1 505.5 389.8 509.2 382.2 508.7zM263.8 312.1L370.6 312.1C400.3 312.1 424 287.6 424 257.8L424 155.9C424 126.9 399.6 105.2 370.6 100.3C334.8 94.4 295.9 94.7 263.8 100.4C218.6 108.4 210.4 125.1 210.4 156L210.4 196.7L317.3 196.7L317.3 210.3L170.3 210.3C139.2 210.3 112 229 103.5 264.5C93.7 305.2 93.3 330.6 103.5 373.1C111.1 404.7 129.2 427.3 160.3 427.3L197 427.3L197 378.5C197 343.2 227.5 312.1 263.8 312.1zM257.2 128.7C268.5 128.7 277.6 137.8 277.6 149.1C277.6 160.4 268.5 169.5 257.2 169.5C245.9 169.5 236.8 160.4 236.8 149.1C236.8 137.8 245.9 128.7 257.2 128.7z"/>
                    </svg>
                )
            },
        ]
    },
    {
        title: "Amazon Review Analysis using Natural Language",
        description: "Using Machine Learning, Natural Language Processing (NLP), and Web Scraping in order to get real customer reviews for any product on Amazon and perform sentiment analysis that predicts whether the reviews are positive or negative.",
        url: "https://github.com/nayan-pradhan/AmazonReviewAnalysis_NLP",
        stack: [
            {
                name: "Python",
                icon: (
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#3776ab">
                        <path d="M535.8 264.5C528.1 233.6 513.5 210.3 482.4 210.3L442.3 210.3L442.3 257.7C442.3 294.5 411.1 325.5 375.5 325.5L268.7 325.5C239.5 325.5 215.3 350.5 215.3 379.8L215.3 481.6C215.3 510.6 240.5 527.6 268.7 535.9C302.5 545.8 335 547.6 375.5 535.9C402.4 528.1 428.9 512.4 428.9 481.6L428.9 440.9L322.2 440.9L322.2 427.3L482.4 427.3C513.5 427.3 525 405.6 535.8 373.1C547 339.6 546.5 307.4 535.8 264.5zM382.2 508.7C374.6 509.2 367.3 505.5 363.3 499C359.4 492.4 359.4 484.3 363.3 477.7C367.3 471.2 374.6 467.5 382.2 468C389.8 467.5 397.1 471.2 401.1 477.7C405 484.3 405 492.4 401.1 499C397.1 505.5 389.8 509.2 382.2 508.7zM263.8 312.1L370.6 312.1C400.3 312.1 424 287.6 424 257.8L424 155.9C424 126.9 399.6 105.2 370.6 100.3C334.8 94.4 295.9 94.7 263.8 100.4C218.6 108.4 210.4 125.1 210.4 156L210.4 196.7L317.3 196.7L317.3 210.3L170.3 210.3C139.2 210.3 112 229 103.5 264.5C93.7 305.2 93.3 330.6 103.5 373.1C111.1 404.7 129.2 427.3 160.3 427.3L197 427.3L197 378.5C197 343.2 227.5 312.1 263.8 312.1zM257.2 128.7C268.5 128.7 277.6 137.8 277.6 149.1C277.6 160.4 268.5 169.5 257.2 169.5C245.9 169.5 236.8 160.4 236.8 149.1C236.8 137.8 245.9 128.7 257.2 128.7z"/>
                    </svg>
                )
            },
            {
                name: "Jupyter Notebook",
                icon: (
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#f37726">
                        <path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z"/>
                    </svg>
                )
            },
        ]
    },
    {
        title: "Redis using Go",
        description: "A minimal Redis-like server implemented in Go, supporting basic key-value and hash operations with RESP protocol parsing and concurrent request handling.",
        url: "https://github.com/nayan-pradhan/redis-go",
        stack: [
            {
                name: "Go",
                icon: (
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#00add8">
                        <path d="M400.1 258.8C389.2 261.6 380.2 263.1 371 266.4C363.7 268.3 356.3 270.3 347.8 272.5L347.2 272.6C343 273.8 342.6 273.9 338.7 269.4C334 264.1 330.6 260.7 324.1 257.5C304.4 247.9 285.4 250.7 267.7 262.2C246.5 275.9 235.6 296.2 235.9 321.4C236.2 346.4 253.3 366.9 277.1 370.3C299.1 373.1 316.9 365.7 330.9 349.8C333 347.2 334.9 344.5 337 341.5C337.8 340.5 338.5 339.4 339.3 338.2L279.2 338.2C272.7 338.2 271.1 334.2 273.3 328.9C277.3 319.2 284.8 303 289.2 294.9C290.1 293.1 292.3 289.1 296.1 289.1L397.2 289.1C401.7 275.7 409 262.2 418.8 249.4C441.5 219.5 468.1 203.9 506 197.4C537.8 191.8 567.7 194.9 594.9 213.3C619.5 230.1 634.7 252.9 638.8 282.8C644.1 324.9 631.9 359.1 602.1 388.4C582.4 409.3 557.2 422.4 528.2 428.3C522.6 429.3 517.1 429.8 511.7 430.3C508.8 430.5 506 430.8 503.2 431.1C474.9 430.5 449 422.4 427.2 403.7C411.9 390.4 401.3 374.1 396.1 355.2C392.4 362.5 388.1 369.6 382.1 376.3C360.5 405.9 331.2 424.3 294.2 429.2C263.6 433.3 235.3 427.4 210.3 408.7C187.3 391.2 174.2 368.2 170.8 339.5C166.7 305.5 176.7 274.1 197.2 248.2C219.4 219.2 248.7 200.8 284.5 194.3C313.8 188.1 341.8 192.4 367.1 209.6C383.6 220.5 395.4 235.4 403.2 253.5C405.1 256.3 403.8 257.9 400.1 258.8zM48.3 264.4C47 264.4 46.7 263.8 47.4 262.8L54 254.4C54.6 253.5 56.2 252.9 57.4 252.9L168.7 252.9C169.9 252.9 170.2 253.8 169.6 254.7L164.3 262.8C163.7 263.8 162.1 264.7 161.2 264.7L48.4 264.4zM1.2 293.1C0 293.1-.4 292.4 .3 291.5L6.8 283.1C7.4 282.2 9 281.5 10.2 281.5L152.3 281.5C153.5 281.5 154.1 282.5 153.8 283.4L151.3 290.9C151 292.1 149.8 292.8 148.5 292.8L1.2 293.1zM75.7 319.9C75.1 320.8 75.4 321.7 76.6 321.7L144.6 322C145.5 322 146.8 321.1 146.8 319.9L147.4 312.4C147.4 311.1 146.8 310.2 145.5 310.2L83.2 310.2C82 310.2 80.7 311.1 80.1 312.1L75.7 319.9zM577.2 301.9C577 299.3 576.9 297.1 576.5 294.9C570.9 264.1 542.5 246.6 512.9 253.5C483.9 260 465.2 278.4 458.4 307.7C452.8 332 464.6 356.6 487 366.6C504.2 374.1 521.3 373.2 537.8 364.7C562.4 351.1 575.8 332 577.4 305.2C577.3 304 577.3 302.9 577.2 301.9z"/>
                    </svg>
                )
            },
            {
                name: "Redis",
                icon: (
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#ff4438">
                        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM264 208L344 208C383.8 208 416 240.2 416 280C416 308.9 399 333.8 374.4 345.3L404.6 395.6C411.4 407 407.7 421.7 396.4 428.5C385.1 435.3 370.3 431.6 363.5 420.3L322.5 352L288.1 352L288.1 408C288.1 421.3 277.4 432 264.1 432C250.8 432 240.1 421.3 240.1 408L240.1 232C240.1 218.7 250.8 208 264.1 208zM336 304L344 304C357.3 304 368 293.3 368 280C368 266.7 357.3 256 344 256L288 256L288 304L336 304z"/>
                    </svg>
                )
            },
        ]
    }, 
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 0
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut'
        }
    },
};

const Projects = () => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const inView = useInView(ref, { 
        once: true, 
        amount: isMobile ? 0.05 : 0.15 
    });

    // No animations on mobile to prevent double render
    const mobileContainerVariants = {
        hidden: {},
        visible: {},
    };

    const mobileItemVariants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
    };

    const currentContainerVariants = isMobile ? mobileContainerVariants : containerVariants;
    const currentItemVariants = isMobile ? mobileItemVariants : itemVariants;

    return (
        <section id="projects" ref={ref} className="py-20">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4 sm:px-6">
                {/* Left: Header */}
                <motion.div
                    className="md:w-1/3 flex flex-col justify-center md:justify-start mb-8 md:mb-0"
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    animate={isMobile ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 })}
                    transition={isMobile ? {} : { duration: 0.6, ease: 'easeOut' }}
                    style={{ willChange: 'transform, opacity' }}
                >
                    <h2 className="text-3xl font-bold text-left md:text-right">
                        Projects
                    </h2>
                </motion.div>
                {/* Right: Project Cards */}
                <div className="relative md:w-2/3 flex flex-col gap-6">
                    {/* Vertical timeline bar */}
                    <div className="hidden md:block absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-200 dark:from-green-900 dark:via-green-700 dark:to-green-900 rounded-full opacity-60 z-0"></div>
                    <motion.div
                        className="flex flex-col gap-12 relative z-10"
                        variants={currentContainerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                variants={currentItemVariants}
                                whileHover={isMobile ? {} : {
                                    scale: 1.04,
                                    boxShadow: "0 12px 32px 0 rgba(34, 197, 94, 0.18)",
                                    transition: { type: "tween", duration: 0.18, ease: "linear" },
                                }}
                                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Project Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    Code
                                                </a>
                                            )}
                                            {project.videoUrl && (
                                                <a
                                                    href={project.videoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm font-medium"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                    Video
                                                </a>
                                            )}
                                            {project.researchPaperUrl && (
                                                <a
                                                    href={project.researchPaperUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-sm font-medium"
                                                >
                                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                                        <path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z"/>
                                                    </svg>
                                                    Paper
                                                </a>
                                            )}
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors text-sm font-medium"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/>
                                                    </svg>
                                                    Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    {project.stack && project.stack.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, idx) => (
                                                <div
                                                    key={idx}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                                >
                                                    <div className="text-green-600 dark:text-green-400">
                                                        {tech.icon}
                                                    </div>
                                                    {tech.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;