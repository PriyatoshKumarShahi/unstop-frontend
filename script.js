AOS.init();

new Typed('.typed', {
    strings: ["Your Journey Begins Here!", "Learn. Build. Intern."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

const uploadForm = document.getElementById('uploadForm');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.querySelector('.progress-container');
const successMessage = document.getElementById('successMessage');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate a file upload
  progressContainer.style.display = 'block';
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      successMessage.style.display = 'block';
      progressBar.style.width = '0';
      progressContainer.style.display = 'none';
      uploadForm.reset();
    }
  }, 300);
});



  
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});