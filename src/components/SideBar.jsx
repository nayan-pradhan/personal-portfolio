export default function SideBar({ activeSection = 'about', onNavClick }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-[#0a192f] text-white flex-col justify-between px-8 py-12">
      {/* Top Name Section */}
      <div>
        <h1 className="text-3xl font-bold">Nayan</h1>
        <p className="text-[#64ffda] mt-1">Software Engineer</p>
        <p className="text-sm text-[#8892b0] mt-4">
          I build accessible, scalable software and digital systems.
        </p>
      </div>

      {/* Nav Items */}
      <nav className="mt-12">
        <ul className="space-y-6 text-[#8892b0] text-xs uppercase tracking-widest font-mono">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => onNavClick?.(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-white font-bold before:content-["—"] before:mr-3 before:text-[#64ffda]'
                    : 'hover:text-[#64ffda]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex space-x-4 text-[#8892b0] mt-8">
        <a href="#" className="hover:text-[#64ffda]">GH</a>
        <a href="#" className="hover:text-[#64ffda]">LI</a>
      </div>
    </aside>
  );
}
