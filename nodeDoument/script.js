document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Find the text content in the same container
        const container = button.parentElement;
        const textToCopy = container.querySelector('.copy-text').innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            // Visual feedback
            const originalText = button.innerText;
            button.innerText = "Copied!";
            button.classList.add('success');

            setTimeout(() => {
                button.innerText = originalText;
                button.classList.remove('success');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
