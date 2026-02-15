const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY
  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


(function() {
    emailjs.init("4iNmBJBSbFKnpor8Y");
})();

const contactForm = document.getElementById("contactform");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_o28u7yn", "template_1f39vri", this)
            .then(function() {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch(function(error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message.");
            });
    });
}
const now = new Date().toLocaleString();
emailjs.send("service_o28u7yn", "template_1f39vri", {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
    time: now
});

(function initThemeToggle(){
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-toggle-icon');
  if(!btn || !icon) return;

  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');
  if (initial === 'light') {
    root.dataset.theme = 'light';
    icon.className = 'bx bx-sun';
  } else {
    delete root.dataset.theme;
    icon.className = 'bx bx-moon';
  }

  btn.addEventListener('click', () => {
    const isLight = root.dataset.theme === 'light';
    if (isLight) {
      delete root.dataset.theme;
      localStorage.setItem('theme', 'dark');
      icon.className = 'bx bx-moon';
    } else {
      root.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
      icon.className = 'bx bx-sun';
    }
  });
})();
