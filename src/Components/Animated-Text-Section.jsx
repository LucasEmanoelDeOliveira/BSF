function AnimatedTextSection() {
    return (
        <section id="animated-text-section" className="w-full inline-flex flex-nowrap bg-[var(--black-primary)] overflow-hidden">
            <div className="flex relative whitespace-nowrap py-15 px-7 roll-x-view">
                <ul className="flex items-center [&_li]:mx-10 text-[var(--orange-primary)] font-bold text-7xl highlight-text-2">
                    <li>24/7 Support</li>
                    <li>Community Management</li>
                    <li>Custom Bots</li>
                    <li>Reliable Performance</li>
                </ul>
                <ul className="flex items-center [&_li]:mx-10 text-[var(--orange-primary)] font-bold text-7xl highlight-text-2" aria-hidden="true">
                    <li>24/7 Support</li>
                    <li>Community Management</li>
                    <li>Custom Bots</li>
                    <li>Reliable Performance</li>
                </ul>
            </div>
        </section>
    );
}

export default AnimatedTextSection;