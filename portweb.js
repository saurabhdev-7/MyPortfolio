// === Fix anchor spacing due to fixed header ===
const headerOffset = document.querySelector("header").offsetHeight;

// Smooth scroll with offset
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").trim().replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - headerOffset,
        behavior: "smooth"
      });
    }
  });
});

// === Add 'active' class to nav on scroll ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerOffset - 1;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.parentElement.classList.add("active");
    }
  });
});

// === Contact form basic validation ===
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Thanks ${name}, your message has been sent!`);
    contactForm.reset();
  });
}
