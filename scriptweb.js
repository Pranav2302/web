
// Smooth scrolling to anchors
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.getElementById(targetId.slice(1));

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// Toggling visibility of FAQ details
const faqDetails = document.querySelectorAll("details");

faqDetails.forEach((detail) => {
  const summary = detail.querySelector("summary");

  summary.addEventListener("click", function () {
    detail.classList.toggle("open");
  });
});

// Dynamically changing content based on user interaction
const educationList = document.getElementById("education-list");
const workExperienceList = document.getElementById("work-experience-list");
const navLinks = document.querySelectorAll("nav li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.getElementById(
      this.getAttribute("href").slice(1)
    );

    educationList.classList.toggle("active", targetSection === educationList);
    workExperienceList.classList.toggle(
      "active",
      targetSection === workExperienceList
    );
  });
});

// Displaying a notification message (uncomment to use)
/*
const notificationButton = document.getElementById('notification-button');
const notificationMessage = document.getElementById('notification-message');

notificationButton.addEventListener('click', function () {
  notificationMessage.classList.add('show');
  setTimeout(() => {
    notificationMessage.classList.remove('show');
  }, 3000);
});
*/

// Implementing a contact form (uncomment to use)
/*
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Send the form data to a server using AJAX or another method
  // ...

  // Reset the form
  contactForm.reset();
});
*/
