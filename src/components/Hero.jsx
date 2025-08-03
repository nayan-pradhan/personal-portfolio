const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center px-6 py-20">
            <div className="max-w-4xl">
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-200 mb-4">
                Hi, I'm <span className="text-white">Nayan</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                    I love building software!
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
                    
                </p>
                
                <a
                  href="#contact"
                  className="inline-block border border-gray-300 text-gray-300 px-8 py-4 rounded hover:bg-gray-300/10 transition-colors">
                    Get In Touch
                  </a>
            </div>
        </section>
    )
}

export default Hero;