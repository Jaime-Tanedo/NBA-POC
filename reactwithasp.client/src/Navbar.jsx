const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black text-white px-16 py-4 flex items-center justify-between shadow-lg text-lg">
            <h1 className="text-7xl font-bold tracking-wide ">NBA</h1>

            <div className="flex gap-8 pr-8">
                <button onClick={() => scrollToSection("home")} className="hover:text-gray-400 transition">
                    Home
                </button>
                <button onClick={() => scrollToSection("highlights")} className="hover:text-gray-400 transition">
                    Highlights
                </button>
                <button onClick={() => scrollToSection("rumors")} className="hover:text-gray-400 transition">
                    Rumors
                </button>
            </div>
        </nav>
    );
}
