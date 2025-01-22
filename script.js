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

aboutSection.classList.add('active');
 aboutHeader.classList.add('active');

window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollPosition = window.scrollY; // Get the current vertical scroll position

    if (window.innerWidth <= 979) {
        logo.style.top = (300 + scrollPosition) + 'px';
    } else {
        logo.style.top = (100 + scrollPosition) + 'px';
    }

});
