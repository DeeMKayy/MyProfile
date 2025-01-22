const aboutBtn =document.getElementById('aboutBtn');
const skillsBtn = document.getElementById('skillsBtn');
const projectsBtn = document.getElementById('projectsBtn');
const linksBtn = document.getElementById('linksBtn');

const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skillContent');
const projectsSection = document.getElementById('projectContent');
const linksSection = document.getElementById('linkContent');

const skillHeader = document.getElementById('skills');
const aboutHeader = document.getElementById('description');
const projectHeader = document.getElementById('projects');
const linksHeader = document.getElementById('links');

function hideAllSections() {
    document.querySelectorAll('.content').forEach((section) => {
        section.classList.remove('active');
    });

    document.querySelectorAll('.head').forEach((section) => {
        section.classList.remove('active');
    });
}
aboutBtn.addEventListener('click', () => {
    hideAllSections();
    aboutSection.classList.add('active');
    aboutHeader.classList.add('active');
});

skillsBtn.addEventListener('click', () => {
    hideAllSections();
    skillsSection.classList.add('active');
    skillHeader.classList.add('active');
});

projectsBtn.addEventListener('click', () => {
    hideAllSections();
    projectsSection.classList.add('active');
    projectHeader.classList.add('active');
});

linksBtn.addEventListener('click', () => {
    hideAllSections();
    linksSection.classList.add('active');
    linksHeader.classList.add('active');
});

// Optionally, show the "About" section by default on page load
aboutSection.classList.add('active');
 aboutHeader.classList.add('active');

// script.js
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollPosition = window.scrollY; // Get the current vertical scroll position

    // Set the top position of the image based on scroll
    logo.style.top = (300 + scrollPosition) + 'px';
});
