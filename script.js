// JS smooth scroll for Members link
const membersLink = document.getElementById("member");
const membersSection = document.getElementById("members-section");

membersLink.addEventListener("click", function (e) {
  e.preventDefault(); // prevent default link behavior
  const offset = 80; // height of fixed navbar
  const topPos =
    membersSection.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({
    top: topPos,
    behavior: "smooth",
  });
});

const navItems = document.querySelectorAll("nav ul li");

// Har item ke liye click event lagao
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Text ke base pe section ka ID find karo (Home -> #home, About -> #about, etc.)
    const sectionId = item.textContent.trim().toLowerCase();

    // Check karo agar section exist karta hai
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
