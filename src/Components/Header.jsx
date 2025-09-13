import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = (id) => {
    const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <section id="header" className="fixed top-[var(--spacing-4)] left-1/2 -translate-x-1/2 z-1000 w-full max-w-[1200px] px-8">
            <nav id="nav-container" className="flex items-center justify-between p-[var(--spacing-4)] bg-[var(--black-primary)] rounded-xl reveal">
                <div id="nav-brand" className="flex items-center">
                    <img src="/BSF/Images/Logo.png" alt="BSF Logo" style={{ width: "50px", margin: "0px 15px 0px 0px" }} />
                    <span className="highlight-text text-2xl font-bold">Bot'S Factory</span>
                </div>
                
                <div className="hidden md:flex flex-grow justify-end items-center">
                    <ul className="flex gap-[var(--spacing-8)]">
                    <li><button onClick={() => handleScroll("home")} className="nav-link">Home</button></li>
                    <li><button onClick={() => handleScroll("bots")} className="nav-link">Bots</button></li>
                    <li><button onClick={() => handleScroll("about")} className="nav-link">About</button></li>
                    </ul>
                    <div id="nav-cta" className="ml-8">
                        <a href="https://discord.gg/Yct2WnHqCQ" target="_blank" className="button button-medium highlight text-white">Join Discord</a>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center py-4 px-8 bg-[var(--black-primary)] rounded-b-xl shadow-xl space-y-4">
                    <ul className="flex flex-col items-center space-y-4 w-full">
                        <li><a href="#" className="nav-link text-lg">Home</a></li>
                        <li><a href="#" className="nav-link text-lg">Bots</a></li>
                        <li><a href="#" className="nav-link text-lg">About</a></li>
                        <li><a href="#" className="nav-link text-lg">Contact</a></li>
                    </ul>
                    <div id="nav-cta">
                        <a href="https://discord.gg/Yct2WnHqCQ" target="_blank" className="button button-medium highlight text-white w-full text-center">Join Discord</a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Header;