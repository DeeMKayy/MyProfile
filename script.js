const aboutBtn =document.getElementById('aboutBtn');
const skillsBtn = document.getElementById('skillsBtn');
const projectsBtn = document.getElementById('projectsBtn');
const linksBtn = document.getElementById('linksBtn');
const carouselBtn = document.getElementById('carouselBtn');
const backBtn = document.getElementById('back');

const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skillContent');
const projectsSection = document.getElementById('projectContent');
const linksSection = document.getElementById('linkContent');
const carouselSection = document.getElementById('carousel');

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

backBtn.addEventListener('click', () => {
    hideAllSections();
});
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

carouselBtn.addEventListener('click', () => {
    hideAllSections();
    carouselSection.classList.add('active');
    // linksHeader.classList.add('active');
});
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 1440) {
        logo.style.top = (scrollPosition) + 'px';
    } else {
        logo.style.top = (scrollPosition) + 'px';
    }

});
