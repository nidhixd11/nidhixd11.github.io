const revealElements = document.querySelectorAll(
  ".info-box, .section-box, .project-card, .timeline-item, .contact-card, .glass-card"
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function copyPhone() {
  navigator.clipboard.writeText("+916291385085").then(() => {
    showToast("Phone number copied!");
  }).catch(() => {
    showToast("Could not copy phone number");
  });
}

function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show-toast");

  setTimeout(() => {
    toast.classList.remove("show-toast");
  }, 2200);
}