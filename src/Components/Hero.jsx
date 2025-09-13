function Hero() {
    return (
        <section
            id="home"
            className="flex relative bg-gradient-to-r from-[var(--black-primary)] to-[var(--black-secondary)] min-h-screen items-center justify-center"
        >
            <div id="particles-container" className="absolute w-full h-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative items-center z-10 max-w-[1200px] px-8">
                <div className="hero-content text-center md:text-left reveal">
                    <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">
                        Transform your Discord server with{" "}
                        <span className="highlight-text">custom bots</span>
                    </h1>
                    <p className="text-[var(--gray-dark)] font-bold text-lg md:text-xl pt-4">
                        Professional Discord bot development and sales. Enhance your community with powerful, reliable bots tailored to your server's needs.
                    </p>
                    <div className="hero-buttons flex gap-[var(--spacing-6)] my-10 justify-center md:justify-start reveal">
                        <a href="#bots" className="button button-large highlight text-white">
                            View our Bots
                        </a>
                        <a
                            href="https://discord.gg/Yct2WnHqCQ" target="_blank"
                            className="button button-large highlight-outline text-white"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="bot-showcase flex justify-center reveal">
                        <div className="discord-mockup bg-[var(--gray-dark)] rounded-sm w-full md:w-[400px] shadow-[var(--shadow-x1)] overflow-hidden">
                            <div className="mockup-header flex bg-[var(--gray-light)] px-5 py-1 gap-[var(--spacing-3)] items-center">
                                <div className="mockup-buttons flex items-center gap-[var(--spacing-3)]">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <span className="mockup-title text-white font-bold"># general</span>
                            </div>
                            <div className="mockup-content p-5">
                                <div className="bot-message flex gap-3">
                                    <div className="bot-avatar highlight w-18 h-15 rounded-full"></div>
                                    <div className="message-content">
                                        <span className="bot-name text-white text-3xl font-bold">
                                            BSF Bot
                                        </span>
                                        <span className="bg-[var(--orange-primary)] ml-5 rounded-sm px-1 text-white font-bold text-xs">
                                            BOT
                                        </span>
                                        <p className="text-white">
                                            Welcome to your enhanced Discord server! 🎉
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;