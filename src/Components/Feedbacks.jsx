function Feedbacks() {
    return(
        <section id="Feedbacks" className="relative py-[var(--spacing-24)] reverse-bots-bg">
            <div id="FeecbacksContainer" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="section-header" className="text-center mb-[var(--spacing-16)] reveal">
                    <h2 className="text-white text-3xl font-bold mb-3">What Our Clients Say</h2>
                    <p className="text-xl text-[var(--gray-medium)] mt-3">Trusted by thousands of Discord communities worldwide</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[var(--spacing-8)] reveal">
                    <div className="testimonial-card">
                        <div className="testimonial-content text-white mb-[var(--spacing-6)]">
                            <p>"1000/1000 very careful and kind. He kept in touch with me throughout the creation process, in addition to being very attentive and patient with my questions, the bot is also incredible, just the way I wanted! Great quality!🧡💛"</p>
                        </div>
                        <div className="testimonial-author flex items-center gap-[var(--spacing-4)]">
                            <img 
                                src="https://images-ext-1.discordapp.net/external/zwynvpvKEOnMF1THlMXKoJOW9z4jq1LOMA_1VsgKDxI/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1304546372124672020/5d7ce84df39aa6f0dadefe12129b4c6f.png" 
                                className="w-20 h-20 object-cover rounded-full"
                            />
                            <div className="author-info">
                                <h4 className="mb-[var(--spacing-1)] text-lg text-white">Miaucrakudo</h4>
                                <span className="text-[var(--gray-light)] text-sm">CattBuxx - 2K members</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content text-white mb-[var(--spacing-6)]">
                            <p>"The best discord bots are made here! <span className="highlight-text">BSF</span> always rocks their bots, delivering them as quickly as possible, beautiful and easy to use, I really like buying from <span className="highlight-text">BSF</span>. 100/10 keep it up!!"</p>
                        </div>
                        <div className="testimonial-author flex items-center gap-[var(--spacing-4)]">
                            <img 
                                src="https://cdn.discordapp.com/avatars/1310728215798480938/e4c22b68ba8cb0f4d19703289c3df875.png?size=2048" 
                                className="w-20 h-20 object-cover rounded-full"
                            />
                            <div className="author-info">
                                <h4 className="mb-[var(--spacing-1)] text-lg text-white">t3lersy</h4>
                                <span className="text-[var(--gray-light)] text-sm">Robux Express - 1K members</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content text-white mb-[var(--spacing-6)]">
                            <p>"Perfect, incredible, fast delivery, much sooner than expected. Impeccable work, super attentive and friendly, 10/10 for sure."</p>
                        </div>
                        <div className="testimonial-author flex items-center gap-[var(--spacing-4)]">
                            <img 
                                src="https://cdn.discordapp.com/avatars/947163705047666749/49b117a40d2eb03629015ebaf6ee14a5.png?size=2048" 
                                className="w-20 h-20 object-cover rounded-full"
                            />
                            <div className="author-info">
                                <h4 className="mb-[var(--spacing-1)] text-lg text-white">darkneszyh</h4>
                                <span className="text-[var(--gray-light)] text-sm">Sailor Moon Commerce - 1k members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedbacks;