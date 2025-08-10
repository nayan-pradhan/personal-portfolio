import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
    const { isDark, toggleTheme } = useTheme();

    let theme = isDark ? 'dark': '';
    
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-400 min-h-screen">
            <Navigation />
            <SocialLinks />
            <ThemeToggle />
            <main className="lg:ml-5">
                <Hero />
                <Experience />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;