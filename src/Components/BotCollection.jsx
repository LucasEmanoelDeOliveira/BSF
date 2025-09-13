import { useState, useEffect } from "react";

function BotCollection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const bots = [
    {
      id: 1,
      title: "Custom Bot",
      category: ["administrator", "support", "community"],
      icon: "⚙️",
      tag: "Multi-Funcionality",
      description:
        "This custom bot is completely made by you! The systems are fully customizable, however you want.",
      features: ["Anti-Raid", "Ticket", "Robux Calculator"],
      link: "https://discord.gg/Yct2WnHqCQ",
      best: true
    },
    {
      id: 2,
      title: "Guardian Bot",
      category: ["administrator"],
      icon: "🛡️",
      tag: "Administrator",
      description:
        "A bot with advanced moderation systems, for the security of your server.",
      features: ["Anti-Raid", "Auto-Mod", "Re-Captcha"],
      link: "https://discord.gg/Yct2WnHqCQ"
    },
    {
      id: 3,
      title: "Helper Bot",
      category: ["support"],
      icon: "💼",
      tag: "Support",
      description:
        "A bot with systems to help your store take off in sales of various things.",
      features: ["Ticket", "Auto-Service", "Transcripts"],
      link: "https://discord.gg/Yct2WnHqCQ"
    },
    {
      id: 4,
      title: "Community Bot",
      category: ["community"],
      icon: "🦸‍♀️",
      tag: "Community",
      description:
        "A bot with fun systems for a community, being effective for server animation.",
      features: ["Auto-Response", "Community Status", "Welcome Messages"],
      link: "https://discord.gg/Yct2WnHqCQ"
    }
  ];

  const filteredBots =
    activeFilter === "all"
      ? bots
      : bots.filter((bot) => bot.category.includes(activeFilter));

  // Hook para animação reveal em cascata
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = entry.target.dataset.delay || "0s";
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredBots]);

  return (
    <section id="bots" className="relative py-[var(--spacing-24)] reverse-bots-bg">
      <div id="grid-bg" className="absolute w-full h-full top-0 left-0 grid-bg"></div>
      <div id="bots-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="bots-container-header" className="text-center mb-[var(--spacing-16)] reveal" data-delay="0s">
          <h2 className="text-3xl font-bold text-white mb-3">Our Bots Collection</h2>
          <p className="text-xl text-[var(--gray-medium)] mt-3">
            Discover powerful bots designed to enhance your Discord experience
          </p>
        </div>

        {/* Filtros */}
        <div id="bots-filter" className="flex justify-center gap-[var(--spacing-4)] mb-[var(--spacing-16)] flex-wrap reveal" data-delay="0.1s">
          {["all", "administrator", "support", "community"].map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all" ? "All Bots" : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de bots */}
        <div id="bots-grid" className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-1200 mx-auto">
          {filteredBots.map((bot, index) => (
            <div
              key={bot.id}
              className={`bot-card ${bot.best ? "best" : ""} reveal`}
              data-category={bot.category.join(" ")}
              data-delay={`${index * 0.1}s`} // delay em cascata
            >
              <div className="bot-icon-container highlight mb-3">{bot.icon}</div>
              <h3 className="bot-title">{bot.title}</h3>
              <span className="bot-category-tag highlight">{bot.tag}</span>
              <p className="bot-description">{bot.description}</p>
              <div className="bot-features flex gap-[var(--spacing-2)] justify-center flex-wrap mb-[var(--spacing-6)]">
                {bot.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
              <a href={bot.link} target="_blank" className="button button-medium bot-action-button">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BotCollection;