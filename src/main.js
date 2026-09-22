import { translations } from './data/translations.js';

let currentLang = 'en';

function detectInitialLanguage() {
  const saved = localStorage.getItem('preferred_lang');
  if (saved && (saved === 'en' || saved === 'es')) {
    return saved;
  }
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  return 'en';
}

export function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'es') return;
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang;
  renderPageContent();
  updateToggleButtons();

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'language_switch', {
      language: lang
    });
  }
}

function updateToggleButtons() {
  const toggles = document.querySelectorAll('.lang-btn');
  toggles.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === currentLang) {
      btn.className = 'lang-btn px-2.5 py-0.5 rounded-full bg-brand-surface text-brand-accent font-bold shadow-sm transition-all cursor-pointer';
    } else {
      btn.className = 'lang-btn px-2.5 py-0.5 rounded-full text-brand-textSecondary hover:text-brand-textPrimary font-semibold transition-all cursor-pointer';
    }
  });
}

function renderPageContent() {
  const t = translations[currentLang];

  // Document Title
  document.title = currentLang === 'es'
    ? 'Reymundo López — Consultor de Software & Full-Stack | Portafolio'
    : 'Reymundo López — Software Consultant & Full-Stack Engineer | Portfolio';

  // Navigation
  setText('nav-role', t.nav.role);
  setText('nav-link-whatido', t.nav.whatIDo);
  setText('nav-link-howiwork', t.nav.howIWork);
  setText('nav-link-cv', t.nav.cvLink);
  setText('nav-link-contact', t.nav.contact);
  setText('nav-get-in-touch', t.nav.getInTouch);

  // Drawer Nav (Mobile)
  setText('drawer-link-whatido', t.nav.whatIDo);
  setText('drawer-link-howiwork', t.nav.howIWork);
  setText('drawer-link-cv', t.nav.cvLink);
  setText('drawer-link-contact', t.nav.contact);
  setText('drawer-get-in-touch', t.nav.getInTouch);

  // Hero Section
  setText('hero-badge-experience', t.hero.experienceBadge);
  setText('hero-badge-engagement', t.hero.engagementBadge);
  setText('hero-location', t.hero.location);
  setText('hero-consultant-tag', t.hero.consultantTag);
  setText('hero-title', t.hero.title);
  setText('hero-subtitle', t.hero.subtitle);
  setText('hero-cta-primary', t.hero.ctaPrimary);
  setText('hero-cta-secondary', t.hero.ctaSecondary);

  // Proof Strip (Organizations)
  setText('proof-strip-title', t.proofStrip.title);
  setText('proof-org1-title', t.proofStrip.org1Title);
  setText('proof-org1-sub', t.proofStrip.org1Sub);
  setText('proof-org2-title', t.proofStrip.org2Title);
  setText('proof-org2-sub', t.proofStrip.org2Sub);
  setText('proof-org3-title', t.proofStrip.org3Title);
  setText('proof-org3-sub', t.proofStrip.org3Sub);
  setText('proof-org4-title', t.proofStrip.org4Title);
  setText('proof-org4-sub', t.proofStrip.org4Sub);

  // "What I Do" (Solutions)
  setText('whatido-eyebrow', t.whatIDo.eyebrow);
  setText('whatido-title', t.whatIDo.title);
  setText('whatido-subtitle', t.whatIDo.subtitle);

  const servicesContainer = document.getElementById('whatido-grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = t.whatIDo.services.map(srv => {
      let iconHtml = '';
      if (srv.icon === 'ai') {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`;
      } else if (srv.icon === 'code') {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;
      } else if (srv.icon === 'rocket') {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`;
      } else {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`;
      }

      return `
        <div class="bg-brand-surface p-6 rounded-2xl border border-brand-border/80 hover:border-brand-accent transition-all flex flex-col justify-between gap-5 shadow-sm group">
          <div class="space-y-3">
            <div class="w-11 h-11 rounded-xl bg-[#f4ece3] border border-brand-border/80 flex items-center justify-center group-hover:bg-brand-accent transition-colors shadow-sm">
              ${iconHtml}
            </div>
            <div class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-brand-tagBg text-brand-accent border border-brand-border/60">
              ${srv.tag}
            </div>
            <h3 class="font-serif-headline text-xl text-brand-textPrimary font-semibold leading-tight">${srv.title}</h3>
            <p class="text-xs sm:text-sm text-brand-textSecondary font-light leading-relaxed">${srv.desc}</p>
          </div>
          <div class="pt-3 border-t border-brand-border/60 flex items-center gap-2 text-[11px] font-medium text-brand-textPrimary">
            <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>${srv.takeaway}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // "How I Work" (Process & Engagement Models)
  setText('howiwork-eyebrow', t.howIWork.eyebrow);
  setText('howiwork-title', t.howIWork.title);
  setText('howiwork-subtitle', t.howIWork.subtitle);

  const stepsContainer = document.getElementById('howiwork-steps-grid');
  if (stepsContainer) {
    stepsContainer.innerHTML = t.howIWork.steps.map(step => {
      let iconHtml = '';
      if (step.icon === 'chat') {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`;
      } else if (step.icon === 'plan') {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>`;
      } else {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
      }

      return `
        <div class="bg-brand-surface p-6 rounded-2xl border border-brand-border/80 shadow-sm flex flex-col justify-between gap-4 hover:border-brand-accent/60 transition-all">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-brand-accent bg-[#fbf2eb] px-2.5 py-0.5 rounded-full border border-brand-accent/20">
              ${step.num}
            </span>
            <div class="w-9 h-9 rounded-xl bg-[#f4ece3] border border-brand-border/80 flex items-center justify-center">
              ${iconHtml}
            </div>
          </div>
          <div>
            <h3 class="font-bold text-base text-brand-textPrimary mb-1.5">${step.title}</h3>
            <p class="text-xs sm:text-sm text-brand-textSecondary font-light leading-relaxed">${step.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // Engagement Models Sub-grid
  setText('howiwork-models-eyebrow', t.howIWork.modelsEyebrow);
  setText('howiwork-models-title', t.howIWork.modelsTitle);
  setText('howiwork-models-subtitle', t.howIWork.modelsSubtitle);

  const modelsContainer = document.getElementById('howiwork-models-grid');
  if (modelsContainer) {
    modelsContainer.innerHTML = t.howIWork.models.map(m => {
      let iconSvg = '';
      if (m.icon === 'target') {
        iconSvg = `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
      } else if (m.icon === 'briefcase') {
        iconSvg = `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`;
      } else {
        iconSvg = `<svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
      }

      return `
        <div class="bg-brand-surface p-6 rounded-2xl border border-brand-border/80 shadow-sm flex flex-col justify-between gap-4 hover:border-brand-accent transition-all">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f4ece3] text-brand-textPrimary border border-brand-border/70">
              ${m.badge}
            </span>
            <div class="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center">
              ${iconSvg}
            </div>
          </div>
          <div>
            <h4 class="font-serif-headline text-lg text-brand-textPrimary font-semibold mb-1">${m.title}</h4>
            <p class="text-xs sm:text-sm text-brand-textSecondary font-light leading-relaxed">${m.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // Technical Specs & CV Banner
  setText('tech-card-eyebrow', t.techCard.eyebrow);
  setText('tech-card-title', t.techCard.title);
  setText('tech-card-desc', t.techCard.desc);
  setText('tech-card-btn', t.techCard.btn);
  setText('tech-card-pdf', t.techCard.pdfBtn);

  // Contact Section
  setText('contact-eyebrow', t.contact.eyebrow);
  setText('contact-title', t.contact.title);
  setText('contact-subtitle', t.contact.subtitle);
  setText('contact-wa-btn-text', t.contact.whatsappBtn);
  setText('contact-wa-sub', t.contact.whatsappSub);

  const waBtn = document.getElementById('contact-main-whatsapp');
  if (waBtn) {
    const encoded = encodeURIComponent(t.contact.cards.whatsapp.prefilled);
    waBtn.setAttribute('href', `https://wa.me/524767280600?text=${encoded}`);
  }

  // Floating Mobile WhatsApp Action
  const floatingWa = document.getElementById('floating-whatsapp-btn');
  if (floatingWa) {
    const encoded = encodeURIComponent(t.contact.cards.whatsapp.prefilled);
    floatingWa.setAttribute('href', `https://wa.me/524767280600?text=${encoded}`);
  }

  // Contact Cards
  const cards = t.contact.cards;
  setText('card-wa-label', cards.whatsapp.label);
  setText('card-wa-val', cards.whatsapp.value);
  setText('card-wa-tag', cards.whatsapp.tag);

  setText('card-email-label', cards.email.label);
  setText('card-email-val', cards.email.value);
  setText('card-email-tag', cards.email.tag);

  setText('card-li-label', cards.linkedin.label);
  setText('card-li-val', cards.linkedin.value);
  setText('card-li-tag', cards.linkedin.tag);

  setText('card-gh-label', cards.github.label);
  setText('card-gh-val', cards.github.value);
  setText('card-gh-tag', cards.github.tag);

  // Footer
  setText('footer-tagline', t.footer.tagline);
  setText('footer-location', t.footer.location);
  setText('footer-copyright', t.footer.copyright);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectInitialLanguage();
  document.documentElement.lang = currentLang;
  renderPageContent();
  updateToggleButtons();

  // Language Toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      setLanguage(lang);
    });
  });

  // Mobile Drawer Toggle
  const drawerOpenBtn = document.getElementById('drawer-open-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (drawerOpenBtn) drawerOpenBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close drawer when a link is clicked
  const drawerLinks = mobileDrawer ? mobileDrawer.querySelectorAll('nav a, a[id="drawer-get-in-touch"]') : [];
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
});
