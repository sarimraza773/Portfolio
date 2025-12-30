(function () {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 10) header.classList.add("header--scrolled");
    else header.classList.remove("header--scrolled");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });

    // Close menu on link click (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("nav-open"));
    });

    // Close menu if you click outside
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("nav-open")) return;
      const clickedInside = nav.contains(e.target) || menuBtn.contains(e.target);
      if (!clickedInside) nav.classList.remove("nav-open");
    });
  }
})();
