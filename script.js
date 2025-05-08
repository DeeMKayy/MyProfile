const aboutBtn =document.getElementById('aboutBtn');
const skillsBtn = document.getElementById('skillsBtn');
const projectsBtn = document.getElementById('projectsBtn');
const linksBtn = document.getElementById('linksBtn');
const carouselBtn = document.getElementById('carouselBtn');
const backBtn = document.getElementById('back');

const menu = document.querySelector('.menu-icon');
const list = document.querySelector('.menu-dropdown')
const navItems = document.querySelectorAll('.list-item');
const linksDDbtn = document.getElementById('linksDropdownBtn');
const aboutDDbtn = document.getElementById('aboutDropdownBtn');
const skillsDDbtn = document.getElementById('skillsDropdownBtn');
const projectsDDbtn = document.getElementById('projectsDropdownBtn');

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

// carouselBtn.addEventListener('click', () => {
//     hideAllSections();
//     carouselSection.classList.add('active');
//     // linksHeader.classList.add('active');
// });
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 1440) {
        logo.style.top = (scrollPosition) + 'px';
    } else {
        logo.style.top = (scrollPosition) + 'px';
    }

});

menu.addEventListener('click', () => {
    if (list.style.display === 'flex') {
        list.style.display = 'none';
      } else {
        list.style.display = 'flex';
        list.style.flexDirection = 'column';
        list.style.gap = '20px';
        list.style.padding = '10px';
        list.style.margin = '0';
        list.style.backgroundColor = 'black';
        list.style.borderRadius = '5%';

        navItems.forEach((item) => {
            item.style.display = 'block';
        })
      }    
});

aboutDDbtn.addEventListener('click', () => {
    hideAllSections();
    aboutSection.classList.add('active');
    aboutHeader.classList.add('active');
    list.style.display = 'none';
    navItems.forEach((item) => {
        item.style.display = 'none';
    })
});

skillsDDbtn.addEventListener('click', () => {
    hideAllSections();
    skillsSection.classList.add('active');
    skillHeader.classList.add('active');
    list.style.display = 'none';
    navItems.forEach((item) => {
        item.style.display = 'none';
    })
});
projectsDDbtn.addEventListener('click', () => {
    hideAllSections();
    projectsSection.classList.add('active');
    projectHeader.classList.add('active');
    list.style.display = 'none';
    navItems.forEach((item) => {
        item.style.display = 'none';
    })
});
linksDDbtn.addEventListener('click', () => {
    hideAllSections();
    linksSection.classList.add('active');
    linksHeader.classList.add('active');
    list.style.display = 'none';
    navItems.forEach((item) => {
        item.style.display = 'none';
    });
});