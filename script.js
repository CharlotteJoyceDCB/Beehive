document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

const backToTopButton = document.getElementById("back-to-top");
  // Show or hide the button when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  // Smooth scrolling back to top on click
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  


