import avatarImage from '../assets/avatar.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center px-5 sm:px-6 pt-28 pb-28 md:min-h-[100svh] md:pb-24"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-16 right-[-8%] h-[420px] w-[420px] rounded-full blur-[110px]"
                    style={{ background: 'var(--glow)' }}
                />
            </div>

            <div className="relative max-w-5xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center">
                <div>
                    <p className="text-accent text-xs sm:text-sm tracking-[0.28em] uppercase font-medium mb-6">
                        Sr. Software Engineer · Tesla
                    </p>
                    <h1 className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4.5rem] leading-[0.95] text-ink mb-8">
                        Nayan Man
                        <br />
                        <span className="italic">Singh Pradhan</span>
                    </h1>
                    <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-4">
                        Hello world — I’m a software engineer passionate about robotics, artificial intelligence, and hardware-software integration.
                    </p>
                    <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                        I currently build AI applications and global SCADA software at Tesla. Off the clock I play basketball, try new food, and explore new places.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:nayan.pradhan@hotmail.com?subject=Portfolio%20Contact%20-%20Let's%20Connect!"
                            className="px-5 py-2.5 rounded-full bg-ink text-page text-sm font-medium hover:bg-accent transition-colors"
                        >
                            Get in touch
                        </a>
                        <a
                            href="#experience"
                            className="px-5 py-2.5 rounded-full border border-line text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
                        >
                            See experience
                        </a>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end order-first md:order-none">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-full border border-line" />
                        <img
                            src={avatarImage}
                            alt="Nayan Man Singh Pradhan"
                            className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover ring-1 ring-line shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
