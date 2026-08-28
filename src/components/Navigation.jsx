import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
];

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 120;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const offset = hash === 'hero' ? 0 : 80;
                    window.scrollTo({ top: element.offsetTop - offset, behavior: 'auto' });
                }
            }, 80);
            return () => {
                clearTimeout(timeoutId);
                window.removeEventListener('scroll', handleScroll);
            };
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = sectionId === 'hero' ? 0 : 80;
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    const navButtons = (compact = false) => (
        navItems.map((item) => (
            <motion.button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`${compact ? 'px-2.5 py-1.5 text-[13px]' : 'px-4 py-2 text-sm'} rounded-full transition-colors duration-300 font-medium ${
                    activeSection === item.id
                        ? 'bg-ink text-page'
                        : 'text-muted hover:text-ink hover:bg-surface'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={`Go to ${item.label} section`}
            >
                {item.label}
            </motion.button>
        ))
    );

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-page/80 backdrop-blur-xl border-b border-line'
                        : 'bg-transparent border-b border-transparent'
                }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
                    <button
                        type="button"
                        onClick={() => scrollToSection('hero')}
                        className="font-serif italic text-xl text-ink tracking-tight shrink-0"
                        aria-label="Go to top"
                    >
                        NP
                    </button>

                    <nav className="hidden md:flex gap-1 bg-surface/70 border border-line rounded-full p-1">
                        {navButtons()}
                    </nav>

                    <div className="flex items-center gap-1">
                        <SocialLinks />
                        <div className="w-px h-4 bg-line mx-1" />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-0.5 bg-surface/90 backdrop-blur-xl rounded-full shadow-lg border border-line p-1 max-w-[calc(100vw-1.25rem)]">
                {navButtons(true)}
            </nav>
        </>
    );
};

export default Navigation;
