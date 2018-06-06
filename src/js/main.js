const navbar = document.querySelector('.navbar');
const [
  heroSection,
  skillsSection,
  projectsSection,
  footerSection
] = document.querySelectorAll('.section');

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

function adjustNavbar() {
  console.count('scroll');
  const [appearPoint, darkenPoint] = [
    skillsSection.offsetTop,
    projectsSection.children[1].offsetTop
  ];
  window.scrollY > appearPoint
    ? navbar.classList.remove('navbar--hidden')
    : navbar.classList.add('navbar--hidden');
  if (window.scrollY > darkenPoint) {
    navbar.classList.add('navbar--dark');
    navbar.classList.remove('navbar--light');
  } else {
    navbar.classList.add('navbar--light');
    navbar.classList.remove('navbar--dark');
  }
}

window.addEventListener('scroll', debounce(adjustNavbar, 15));
