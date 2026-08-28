import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
    return (
        <div className="bg-page text-ink min-h-screen">
            <Navigation />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
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
