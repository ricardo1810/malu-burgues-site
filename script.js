(function () {
  "use strict";

  const header = document.getElementById("topbar");
  const burger = document.getElementById("menuButton");
  const nav = document.getElementById("topnav");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = burger.classList.toggle("open");
      nav.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  // Hero videos: ensure autoplay + seamless loop.
  document.querySelectorAll(".logo-ring video, .hero-bg-video, .gallery-media video").forEach((heroVideo) => {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute("playsinline", "");
    heroVideo.setAttribute("muted", "");
    heroVideo.loop = true;

    const tryPlay = () => {
      const p = heroVideo.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Retry once on first user gesture if browser blocks autoplay
          const unlock = () => {
            heroVideo.play().catch(() => {});
            window.removeEventListener("pointerdown", unlock);
          };
          window.addEventListener("pointerdown", unlock, { once: true });
        });
      }
    };

    if (heroVideo.readyState >= 2) tryPlay();
    else heroVideo.addEventListener("canplay", tryPlay, { once: true });

    // Avoid freeze on some mobile loop edge cases
    heroVideo.addEventListener("ended", () => {
      heroVideo.currentTime = 0;
      heroVideo.play().catch(() => {});
    });
  });
})();
