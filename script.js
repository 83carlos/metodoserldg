const registrationUrl = "https://api.whatsapp.com/send/?phone=5583988281120&text&type=phone_number&app_absent=0";

const registrationLinks = document.querySelectorAll('a[href="#inscricao"]');

registrationLinks.forEach((link) => {
  if (!registrationUrl) return;

  link.setAttribute("href", registrationUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll("details[open]").forEach((openItem) => {
      if (openItem !== item) {
        openItem.open = false;
      }
    });
  });
});

document.querySelectorAll(".primary-button, .secondary-button, .sticky-cta a, .top-cta").forEach((button) => {
  button.addEventListener("pointerdown", () => button.classList.add("is-pressed"));
  button.addEventListener("pointerup", () => button.classList.remove("is-pressed"));
  button.addEventListener("pointerleave", () => button.classList.remove("is-pressed"));
});

const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll("[data-reveal]");

if (motionAllowed && "IntersectionObserver" in window) {
  revealTargets.forEach((element) => element.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -24px 0px",
      threshold: 0.06,
    }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
