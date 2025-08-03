import SideBar from './components/SideBar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="flex bg-[#0a192f] text-white">
      <SideBar />
      <main className="ml-64 w-full px-6">
        <Hero />
        {/* Add more sections: About, Experience, Projects */}
      </main>
    </div>
  );
}
