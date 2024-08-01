document.addEventListener('DOMContentLoaded', function () {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const links = document.querySelectorAll('.navbar a'); // Select all links in the navbar
  const textElements = document.querySelectorAll('h3, p'); // Select text elements you want to react to

  // Update cursor dot position on mouse move
  window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
  });

  // Change cursor dot style on hover over links
  links.forEach(link => {
      link.addEventListener('mouseenter', function () {
          cursorDot.style.backgroundColor = 'rgb(0, 90, 165)'; // Change color when hovering
      });

      link.addEventListener('mouseleave', function () {
          cursorDot.style.backgroundColor = 'rgb(227, 217, 217)'; // Reset color
          cursorDot.style.transform = 'scale(1)'; // Reset size
      });
  });

  // Hover effect for text elements
  textElements.forEach(element => {
    element.addEventListener('mouseenter', function () {
        cursorDot.style.opacity = 0.75;
        cursorDot.style.width = '3px'; // Wider for pill shape
        cursorDot.style.height = '20px'; // Make it shorter for pill shape
        cursorDot.style.borderRadius = '20px'; // Rounded ends for pill shape
    });

    element.addEventListener('mouseleave', function () {
        cursorDot.style.backgroundColor = 'rgb(227, 217, 217)'; // Reset color
        cursorDot.style.width = '15px'; // Reset to original width
        cursorDot.style.height = '15px'; // Reset to original height
        cursorDot.style.borderRadius = '50%'; // Reset to original rounded shape
    });
});

  // Click action for the cursor dot
  document.addEventListener('mousedown', function () {
      cursorDot.style.backgroundColor = 'rgb(255, 0, 0)'; // Change color on click (red for example)
      cursorDot.style.transform = 'scale(1.35)'; // Enlarge the dot on click
  });

  // Reset cursor dot when mouse is released
  document.addEventListener('mouseup', function () {
      cursorDot.style.backgroundColor = 'rgb(227, 217, 217)'; // Reset color
      cursorDot.style.transform = 'scale(1)'; // Reset size
  });
});
