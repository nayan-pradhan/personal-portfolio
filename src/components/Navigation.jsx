import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight * 0.2;
                
                // Check if we've scrolled past hero section
                setIsScrolled(scrollPosition > heroBottom);
            }

            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = sectionId === 'hero' ? 0 : 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.div
            className={`fixed bottom-6 md:top-6 md:bottom-auto right-1/2 transform translate-x-1/2 z-50 transition-all duration-300`}
        >
            <nav className='flex gap-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-1'>
                {navItems.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                            activeSection === item.id
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        aria-label={`Go to ${item.label} section`}
                        title={item.label}
                    >
                        {item.label}
                    </motion.button>
                ))}
            </nav>
        </motion.div>
    );
};

export default Navigation;
