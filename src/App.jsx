import Hero from './components/Hero'
// import About from './components/About'
// import Experience from './components/Experience'
// import Contact from './components/Contact'
// import SideBar from './components/SideBar'

function App() {
    return (
        <div className="bg-neutral-900 text-gray-400">
            {/* <SideBar /> */}
            <main className="lg:ml-96">
                <Hero />
                {/* <About />
                <Experience />
                <Contact /> */}
            </main>
        </div>
    )
}

export default App;