function HowItWorks() {
    return (
        <section id="howitworks" className="how-it-works bots-bg">
            <div className="HowItWorksContainer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center mb-[var(--spacing-16)] reveal">
                    <h2 className="text-white text-3xl font-bold mb-3">How It Works</h2>
                    <p className="text-xl text-[var(--gray-medium)] mt-3">Simple process to get your perfect Discord bot</p>
                </div>

                <div className="process-timeline reveal">
                    <div className="process-step animate-on-scroll animate-in">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Tell Us Your Needs</h3>
                            <p>Share your server requirements, features you need, and any specific customizations you want.</p>
                        </div>
                    </div>

                    <div className="process-step animate-on-scroll animate-in">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>We Create Your Bot</h3>
                            <p>Our expert developers build your custom bot with all requested features and functionality.</p>
                        </div>
                    </div>

                    <div className="process-step animate-on-scroll animate-in">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Test &amp; Adjust</h3>
                            <p>We test the bot thoroughly and make any adjustments based on your feedback and requirements.</p>
                        </div>
                    </div>

                    <div className="process-step animate-on-scroll animate-in">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Deliver &amp; Support</h3>
                            <p>Deploy your bot to your server with full documentation and ongoing 24/7 support included.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;