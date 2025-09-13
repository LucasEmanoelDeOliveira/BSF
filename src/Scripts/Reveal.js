import { useEffect } from "react";

export default function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return; // previne erro se não houver elementos

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // anima só 1x
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
