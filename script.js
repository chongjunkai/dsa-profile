const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const progress = document.querySelector('.scroll-progress span');
const videoDialog = document.querySelector('.video-dialog');
const videoTrigger = document.querySelector('.video-trigger');
const videoClose = document.querySelector('.dialog-close');
const videoFrame = videoDialog.querySelector('iframe');

const updateHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${percentage}%`;
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navigationItems = [...navLinks.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navigationItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

const closeVideo = () => {
  if (typeof videoDialog.close === 'function' && videoDialog.open) {
    videoDialog.close();
  } else {
    videoDialog.removeAttribute('open');
  }
  videoDialog.classList.remove('is-open');
  videoFrame.removeAttribute('src');
  document.body.classList.remove('dialog-open');
};

videoTrigger.addEventListener('click', () => {
  videoFrame.src = videoFrame.dataset.src;
  if (typeof videoDialog.showModal === 'function') {
    videoDialog.showModal();
  } else {
    videoDialog.setAttribute('open', '');
    videoDialog.classList.add('is-open');
  }
  document.body.classList.add('dialog-open');
});
videoClose.addEventListener('click', closeVideo);
videoDialog.addEventListener('click', (event) => {
  if (event.target === videoDialog) closeVideo();
});
videoDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeVideo();
});
