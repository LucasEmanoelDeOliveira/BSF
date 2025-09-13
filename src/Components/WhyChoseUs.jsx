function WhyChooseUs() {
    return (
        <section id="about" className="relative py-[var(--spacing-24)] bots-bg">
            <div id="WhyChooseUsContainer" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="section-header" className="text-center mb-[var(--spacing-16)] reveal">
                    <h2 className="text-white text-3xl font-bold mb-3">Why Choose Us</h2>
                    <p className="text-xl text-[var(--gray-medium)] mt-3">We deliver exceptional Discord bots with unmatched quality and support</p>
                </div>
            <div className="grid gap-[var(--spacing-8)] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 reveal">
                    <div className="feature-card">
                        <div className="feature-icon">🔧</div>
                        <h3 className="text-white font-bold text-xl mb-[var(--spacing-4)]">Custom Bots</h3>
                        <p className="text-[var(--gray-light)]">Tailored Discord bots designed specifically for your server's unique needs and requirements.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3 className="text-white font-bold text-xl mb-[var(--spacing-4)]">24/7 Support</h3>
                        <p className="text-[var(--gray-light)]">Round-the-clock technical support and maintenance to keep your bots running smoothly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🏆</div>
                        <h3 className="text-white font-bold text-xl mb-[var(--spacing-4)]">Proven Experience</h3>
                        <p className="text-[var(--gray-light)]">Over 5 years of Discord bot development with 50+ successful projects delivered.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">✨</div>
                        <h3 className="text-white font-bold text-xl mb-[var(--spacing-4)]">Quality Guarantee</h3>
                        <p className="text-[var(--gray-light)]">100% satisfaction guarantee with ongoing updates and feature enhancements included.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;