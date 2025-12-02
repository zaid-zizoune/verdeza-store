const images = document.querySelectorAll('.slideshow img');
let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 3000);

 window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.slideshow img'); // استخدم class الصحيح
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');  // اخفاء الصورة الحالية
    current = (current + 1) % images.length;     // الانتقال للصورة التالية
    images[current].classList.add('active');     // اظهار الصورة الجديدة
  }, 3000);
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPos = window.scrollY + window.innerHeight / 2; // نقطة منتصف الشاشة

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

