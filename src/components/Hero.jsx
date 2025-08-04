import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { isDark } = useTheme();

    return (
       <section
            id="hero"
            className="min-h-screen flex items-left px-6 py-20 bg-white dark:bg-gray-900"
        >
            <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-12">
                {/* Left column */}
                <div className="md:w-2/5 flex flex-col justify-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-200 mb-4">
                        Nayan Man Singh Pradhan
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        Software Engineer
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        I build software!
                    </p>
                </div>
                {/* Right column */}
                <div className="md:w-3/5 flex flex-col justify-center">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Hello world! I’m a developer passionate about robotics, artificial intelligence, and hardware-software integration.
                        <br /><br />
                        Currently, I’m focused on building modern web apps and learning new technologies. In my spare time, I enjoy playing basketball, trying new food, and exploring new places.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;