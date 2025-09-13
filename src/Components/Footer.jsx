function Footer() {
    const handleScroll = (id) => {
    const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="footer" className="relative py-[var(--spacing-16)] bg-[var(--black-secondary)]">
            <div id="FooterContainer" className="flex gap-[var(--spacing-8)] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 justify-around">
                <div id="FooterBrand" className="max-w-lg">
                    <h1 className="highlight-text text-3xl font-bold">Bot'S Factory</h1>
                    <p className="text-[var(--gray-light)]">Professional Discord bot development and sales. Transform your server with custom bots designed for your community.</p>
                </div>
                <div id="FooterFeatures">
                    <h1 className="text-xl text-white font-bold">Services</h1>
                    <ul className="text-[var(--gray-light)]">
                        <li>
                            <a href="https://discord.gg/Yct2WnHqCQ" target="_blank">Discord Server</a>
                        </li>
                        <li><button onClick={() => handleScroll("bots")}>Bots</button></li>
                        <li><button onClick={() => handleScroll("Feedbacks")}>Feedbacks</button></li>
                        <li><button onClick={() => handleScroll("howitworks")}>How it Works</button></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-[var(--spacing-4)]">
                <span className="text-[var(--gray-light)]">© 2025 Bot'S Factory. All rights reserved.</span>
            </div>
        </section>
    )
}

export default Footer;