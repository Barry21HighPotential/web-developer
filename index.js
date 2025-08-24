// JavaScript for mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// --- Clipboard functionality ---
        const copyEmailButton = document.getElementById('copy-email-button');
        const copyPhoneButton = document.getElementById('copy-phone-button');
        const copyFeedback = document.getElementById('copy-feedback');

        // Function to handle the copy action and show feedback
        function copyToClipboard(textToCopy, feedbackMessage) {
            // A temporary textarea is created to execute the copy command
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = textToCopy;
            // Make it invisible
            tempTextArea.style.position = 'absolute';
            tempTextArea.style.left = '-9999px';
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            // Show feedback message
            copyFeedback.textContent = feedbackMessage;
            copyFeedback.classList.remove('opacity-0');
            setTimeout(() => {
                copyFeedback.classList.add('opacity-0');
            }, 2000); // Hide after 2 seconds
        }

        // Event listener for email copy button
        copyEmailButton.addEventListener('click', () => {
            const emailToCopy = document.getElementById('email').textContent;
            copyToClipboard(emailToCopy, 'Email copied to clipboard!');
        });
        
        // Event listener for phone copy button
        copyPhoneButton.addEventListener('click', () => {
            const phoneToCopy = document.getElementById('phone').textContent;
            copyToClipboard(phoneToCopy, 'Phone number copied to clipboard!');
        });