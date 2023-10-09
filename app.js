// Get all accordion headers and content
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');

// Add click event listener to each accordion header
accordionHeaders.forEach((header, index) => {
    const toggleButton = header.querySelector('.accordion-toggle'); // Get the button

    header.addEventListener('click', () => {
        // Toggle the display of the associated content
        accordionContents[index].classList.toggle('active');

        // Toggle the plus/minus icon
        toggleButton.textContent = toggleButton.textContent === '+' ? '-' : '+';

        // Toggle the class for the active header
        header.classList.toggle('active');
    });
});