document.addEventListener("DOMContentLoaded", function() {
  // 1. Fade-in the hero text
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    setTimeout(() => {
      heroText.classList.add("visible");
    }, 300);
  }

  // 2. Toggle the subcommittees dropdown on click
  const subcommitteesLink = document.querySelector(".subcommittees-link");
  const dropdown = document.querySelector(".dropdown");
  if (subcommitteesLink && dropdown) {
    subcommitteesLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      // Toggle dropdown visibility
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
      // Prevent event from bubbling up so that clicking the link doesn't trigger the document click handler immediately
      e.stopPropagation();
    });
  }

  // 3. Close the dropdown when clicking outside of it
  document.addEventListener("click", function(e) {
    // If the click isn't inside the dropdown or on the subcommittees link, hide the dropdown
    if (!e.target.closest(".dropdown") && !e.target.closest(".subcommittees-link")) {
      if (dropdown) dropdown.style.display = "none";
    }
  });

  // 4. Close the dropdown when pressing the 'Esc' key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && dropdown) {
      dropdown.style.display = "none";
    }
  });

  // 5. Toggle the mobile menu (if applicable)
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav");
  if (mobileMenu && nav) {
    mobileMenu.addEventListener("click", () => {
      nav.classList.toggle("visible");
    });
  }
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
if (textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

anime.timeline()
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  });
