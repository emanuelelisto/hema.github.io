    const typingText = document.getElementById('typing-text');
    const textToType = "Hi, I'm Hema";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingText.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the typing speed (milliseconds)
        }
    }

    // Call the typing function when the page is loaded
    window.onload = typeText;