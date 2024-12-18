// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Highlight current menu item
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll(".navbar a");
  
    menuItems.forEach((item) => {
      if (item.getAttribute("href") === currentPath) {
        item.style.fontWeight = "bold";
        item.style.textDecoration = "underline";
      }
    });
  
    // Smooth scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Example of dynamic content (can be extended as needed)
    const bioSection = document.querySelector(".bio-content");
    if (bioSection) {
      bioSection.innerHTML += "<p>Feel free to connect with me via email or social media for collaborations!</p>";
    }
  });
  