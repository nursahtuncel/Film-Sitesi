const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    const list = movieLists[i];
    const firstImage = list.querySelector("img");
    const scrollAmount = firstImage.clientWidth + 30; // kaydırma miktarı
    const duration = 800; // 800ms = 0.8 saniye
    const start = list.scrollLeft;
    console.log(list.scrollLeft, list.clientWidth, list.scrollWidth);
    const end = (list.scrollLeft + list.clientWidth >= list.scrollWidth) ? 0 : start + scrollAmount;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0-1 arası
      list.scrollLeft = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  });
});

// dark mode
const ball = document.querySelector(".toggle-ball");
ball.addEventListener("click", () => {
  const items = document.querySelectorAll(".container, .navbar,.sidebar,sidebar i,.toggle-ball,.movie-list-filter select , .toggle");
items.forEach(item => {
  item.classList.toggle("active");
});
  ;});

