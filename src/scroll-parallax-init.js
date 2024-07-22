document.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Adjust the hero content position based on scroll position
    let scrollY = window.scrollY;

    // Calculate the new position of the hero content
    let heroContentPosition = Math.max(scrollY, navbarHeight);

    heroContent.style.transform = `translateY(-${heroContentPosition}px)`;
});
