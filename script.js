(function () {
  "use strict";

  const header = document.getElementById("topbar");
  const burger = document.getElementById("menuButton");
  const nav = document.getElementById("topnav");
  const year = document.getElementById("year");
  const cheddarScroll = document.querySelector(".cheddar-scroll");
  const hero = document.querySelector(".hero");

  if (year) year.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function scrollRange() {
    return Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }

  function clamp01(value) {
    return Math.min(1, Math.max(0, value));
  }

  function setScrollProgress() {
    const progress = clamp01(window.scrollY / scrollRange());
    const offset = progress * Math.max(0, window.innerHeight - 186);
    const heroExit = hero ? hero.offsetTop + hero.offsetHeight * 0.82 : window.innerHeight * 0.75;
    const fadeIn = clamp01((window.scrollY - heroExit) / 180);
    const fadeOut = clamp01((0.92 - progress) / 0.08);
    const visibility = Math.min(fadeIn, fadeOut);
    const isInteractive = visibility > 0.75;
    document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    document.documentElement.style.setProperty("--scroll-y", `${offset.toFixed(1)}px`);
    document.documentElement.style.setProperty("--scroll-visibility", visibility.toFixed(3));
    document.documentElement.style.setProperty("--scroll-peek", `${((1 - visibility) * 0.45).toFixed(3)}rem`);
    if (cheddarScroll) {
      cheddarScroll.classList.toggle("is-interactive", isInteractive);
      cheddarScroll.tabIndex = isInteractive ? 0 : -1;
      cheddarScroll.setAttribute("aria-hidden", String(!isInteractive));
      cheddarScroll.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
    }
  }

  function scrollToPointer(clientY) {
    if (!cheddarScroll) return;
    const rect = cheddarScroll.getBoundingClientRect();
    const progress = clamp01((clientY - rect.top) / rect.height);
    window.scrollTo({ top: progress * scrollRange(), behavior: "auto" });
  }

  window.addEventListener("scroll", setScrollProgress, { passive: true });
  window.addEventListener("resize", setScrollProgress);
  setScrollProgress();

  if (cheddarScroll) {
    cheddarScroll.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      cheddarScroll.setPointerCapture(event.pointerId);
      scrollToPointer(event.clientY);
    });
    cheddarScroll.addEventListener("pointermove", (event) => {
      if (cheddarScroll.hasPointerCapture(event.pointerId)) scrollToPointer(event.clientY);
    });
    cheddarScroll.addEventListener("keydown", (event) => {
      const page = window.innerHeight * 0.85;
      const keys = {
        ArrowDown: 80,
        ArrowUp: -80,
        PageDown: page,
        PageUp: -page,
        Home: -Infinity,
        End: Infinity,
      };
      if (!(event.key in keys)) return;
      event.preventDefault();
      const next = keys[event.key] === Infinity ? scrollRange() : keys[event.key] === -Infinity ? 0 : window.scrollY + keys[event.key];
      window.scrollTo({ top: next, behavior: "auto" });
    });
  }

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
