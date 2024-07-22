document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing');
    const text = "Hi, I'm Nikita Pelagecha";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 120); // Adjust typing speed here
        }
    }

    type();
});



