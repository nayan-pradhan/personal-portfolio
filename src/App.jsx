import { useEffect } from 'react';
import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
    const { isDark, toggleTheme } = useTheme();

    let theme = isDark ? 'dark': '';
    
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-400 min-h-screen">
            <ThemeToggle />
            {/* <SideBar /> */}
            <main className="lg:ml-96">
                <Hero />
                {/* <About />
                <Experience />
                <Contact /> */}
            </main>
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