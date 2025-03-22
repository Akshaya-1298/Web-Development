//script.js

document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-link');

        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
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
 
function changeReadMore() {
    const mycontent =
        document.getElementById('mybox1id');
    const mybutton =
        document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none'
        || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Learn Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Learn More';
    }
}


window.addEventListener("scroll",function() {
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('.nav-link');

    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 50;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});