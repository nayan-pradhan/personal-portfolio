import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

// import About from './components/About'
// import Experience from './components/Experience'
// import Contact from './components/Contact'
// import SideBar from './components/SideBar'

function App() {
    return (
        <ThemeProvider>
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
        </ThemeProvider>
    )
}

export default App;