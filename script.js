(() => {
  const NAV = document.querySelector("nav");
  const NAV_HEIGHT = NAV ? NAV.offsetHeight : 0;
  const SPEED = 0.4; // 👈 0.4 = slower scroll, 0.6 = medium, 1 = fast

  document.querySelectorAll('nav a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          1200 / SPEED
        ); // 👈 timing control
        window.scrollTo(0, run);
        if (timeElapsed < 1200 / SPEED) requestAnimationFrame(animation);
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    });
  });
})();




