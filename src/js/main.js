const navbar = document.querySelector('.navbar');
const [
  heroSection,
  skillsSection,
  projectsSection,
  footerSection
] = document.querySelectorAll('.section');

function toggleNavbar() {
  const topOfSkills = skillsSection.offsetTop;
  if (window.scrollY > topOfSkills) {
    navbar.classList.remove('navbar--hidden');
  } else {
    navbar.classList.add('navbar--hidden');
  }
}

function darkenNavbar() {
  const topOfProjects = projectsSection.children[1].offsetTop;
  if (window.scrollY > topOfProjects) {
    navbar.classList.remove('navbar--light');
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.add('navbar--light');
    navbar.classList.remove('navbar--dark');
  }
}

window.addEventListener('scroll', toggleNavbar);
window.addEventListener('scroll', darkenNavbar);
