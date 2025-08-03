
const NavBar = () => {
   
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-50">
            <div className="max-w-6x1 mx-auto flex justify-between items-center p-5">
                {/* <div className="text-white font-bold text-lg">Nayan</div> */}

                {/* Desktop links */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    <li>
                        <a href="#hero" className="hover:text-white">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-white">About</a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-white">Experience</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
};

export default NavBar;