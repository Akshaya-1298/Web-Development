document.querySelector('.profile-img').addEventListener('click', () => {
    const img = document.querySelector('.profile-img');
    img.style.border = "5px solid #4caf50";
  });

  

  
  // JavaScript to show the default content (Home) on page load and toggle between sections
  window.onload = function () {
    // Show the home section by default
    document.getElementById('ome').classList.add('active');

    // Handle navbar click events
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Hide all content sections
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the content corresponding to the clicked link
            const target = document.getElementById(this.getAttribute('data-target'));
            target.classList.add('active');
        });
    });
};


// sucess/error message//

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate submission result
  const success = true; // Change to false to simulate error

  if (success) {
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
    form.reset();
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
});