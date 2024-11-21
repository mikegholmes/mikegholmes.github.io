// Get the button element
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top');

// Add a click event listener to the button
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Append the button to the body
document.body.appendChild(backToTopButton);

// Function to show/hide the button based on scroll position
const toggleButton = () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// Initial call to show/hide the button
toggleButton();

// Add an event listener to the window's scroll event
window.addEventListener('scroll', toggleButton);
