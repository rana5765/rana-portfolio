function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }
  
document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = 'Md. Masud Rana';
    let currentIndex = 0;
    const typewriterElement = document.querySelector('.typewriter');
  
    function typeWriter() {
      if (currentIndex < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeWriter, 100);
      }
    }
  
    typeWriter();
  });
    
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 100 },
      size: { value: 3 },
      color: { value: "#ffffff" },
      move: { enable: true, speed: 1 },
      links: { enable: true, color: "#ffffff" }
    }
  });
  
 // Toggle menu on mobile devices
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
 
   
   