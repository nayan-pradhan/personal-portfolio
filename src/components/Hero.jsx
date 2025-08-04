import { useContext } from "react";
import { ThemeProvider, useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <section id="hero" className="min-h-screen flex items-center px-6 py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl">
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-200 mb-4">
                Hi, I'm <span className="text-gray-800 dark:text-white">Nayan</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                    I love building software!
                </h2>
                {/* <a
                  href="#contact"
                  className="inline-block border border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-4 rounded hover:bg-gray-700/10 dark:hover:bg-gray-300/10 transition-colors">
                    Get In Touch
                  </a> */}
            </div>
        </section>
    )
}

export default Hero;