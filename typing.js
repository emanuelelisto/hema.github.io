    const typingText = document.getElementById('typing-text');
    const textToType = "Hi, I'm Emanuele";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingText.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 80); // Adjust the typing speed (milliseconds)
        }
    }

    // Call the typing function when the page is loaded
    window.onload = typeText;