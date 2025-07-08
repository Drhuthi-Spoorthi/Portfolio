const heading = document.querySelector('.heading');
const getInTouchBtn = document.querySelector('.nav ul li button');
const tags = document.querySelectorAll('.nav ul li a')


const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');

function updateStyles(section) {
    if (section === section1) {
        heading.style.color = '#e7f049';
        getInTouchBtn.style.backgroundColor = '#e7f049';
        getInTouchBtn.style.color = 'black';
    } else if (section === section2) {
        heading.style.color = 'black';
        getInTouchBtn.style.backgroundColor = 'black';
        getInTouchBtn.style.color = 'white';
    } else if (section === section3) {
        heading.style.color = 'black';
        getInTouchBtn.style.backgroundColor = '#e7f049';
        getInTouchBtn.style.color = 'black';
        tags.forEach(item=>item.style.color = 'black')
    }
}

function resetStyles() {
    heading.style.color = 'black';
    getInTouchBtn.style.backgroundColor = 'black';
    getInTouchBtn.style.color = 'white';
}

// Add event listeners
[section1, section2, section3].forEach(section => {
    section.addEventListener('mouseenter', () => updateStyles(section));
    section.addEventListener('mouseleave', resetStyles);
});

//Skills section functionality
const skills = document.querySelector('.skills h2');
const education = document.querySelector('.education h2');
const projects = document.querySelector('.projects h2');

const skillsCont = document.querySelector('.skills-detail');
const educationCont = document.querySelectorAll('.details');
const projectsCont = document.querySelectorAll('.project-details');

function switchSection() {
    skills.addEventListener("click", () => {
        skillsCont.hidden = false;
        educationCont.forEach(item => item.hidden = true);
        projectsCont.forEach(item => item.hidden = true);
        skills.style.color = '#c42727';
        projects.style.color = 'black';
        education.style.color = 'black';
        skills.classList.add('active');
        projects.classList.remove('active');
        education.classList.remove('active')
    });

    education.addEventListener("click", () => {
        skillsCont.hidden = true;
        educationCont.forEach(item => item.hidden = false);
        projectsCont.forEach(item => item.hidden = true);
        education.style.color = '#c42727';
        projects.style.color = 'black';
        skills.style.color = 'black';
        skills.classList.remove('active');
        projects.classList.remove('active');
        education.classList.add('active')
    });

    projects.addEventListener("click", () => {
        skillsCont.hidden = true;
        educationCont.forEach(item => item.hidden = true);
        projectsCont.forEach(item => item.hidden = false);
        projects.style.color = '#c42727';
        skills.style.color = 'black';
        education.style.color = 'black'
        skills.classList.remove('active');
        projects.classList.add('active');
        education.classList.remove('active')
    });
}

switchSection();