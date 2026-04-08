import { translations, defaultLang } from '../i18n/ui.js';

export function getLang() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) {
    return localStorage.getItem('lang');
  }
  return defaultLang;
}

export function setLang(lang) {
  localStorage.setItem('lang', lang);
  updateUI(lang);
}

export function updateUI(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      // Check if it's an input/placeholder (optional)
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });

  // Handle Document Title
  let path = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
  if (path === 'proyectos') path = 'proyectos'; // Ensure consistency if needed
  const titleKey = `page.title.${path}`;
  if (translations[lang] && translations[lang][titleKey]) {
    document.title = translations[lang][titleKey];
  }

  // Handle Toggle Buttons
  const langToggleBtns = document.querySelectorAll(".lang-toggle-btn");
  langToggleBtns.forEach(btn => {
    const textSpan = btn.querySelector(".lang-text");
    if (textSpan) {
      textSpan.innerText = lang === 'en' ? 'ES' : 'EN';
    } else {
      btn.innerText = lang === 'en' ? 'ES' : 'EN';
    }
  });

  // Handle CV link HREF sync (text is now handled by nested i18n span)
  const cvLinks = document.querySelectorAll('.cv-link');
  cvLinks.forEach(link => {
    // link.href = lang === 'es' ? '/assets/cv_es.pdf' : '/assets/cv_en.pdf';
  });

  // Dispatch event for other scripts
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

export function toggleLang() {
  const current = getLang();
  const next = current === 'en' ? 'es' : 'en';
  setLang(next);
}
