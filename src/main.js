import { translations, modalDeepDives } from './data/translations.js';

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
}

function updateToggleButtons() {
  const toggles = document.querySelectorAll('.lang-btn');
  toggles.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === currentLang) {
      btn.className = 'lang-btn px-2.5 py-1 rounded-full bg-surface text-primary font-bold shadow-[0_1px_4px_rgba(58,48,42,0.08)] transition-all';
    } else {
      btn.className = 'lang-btn px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all';
    }
  });
}

function renderPageContent() {
  const t = translations[currentLang];

  // Title and Meta
  document.title = currentLang === 'es'
    ? 'Reymundo López | Arquitecto de Software & Especialista en IA'
    : 'Reymundo López | Staff Software Architect & AI Systems';

  // Navigation
  setText('nav-role', t.nav.role);
  setText('nav-status-badge', t.nav.statusBadge);
  setText('nav-link-services', t.nav.services);
  setText('nav-link-architecture', t.nav.architecture);
  setText('nav-link-experience', t.nav.experience);
  setText('nav-link-stack', t.nav.techStack);
  setText('nav-link-contact', t.nav.contact);
  setText('nav-download-cv', t.nav.downloadCv);
  setText('nav-get-in-touch', t.nav.getInTouch);

  // Drawer Mobile Nav
  setText('drawer-link-services', t.nav.services);
  setText('drawer-link-architecture', t.nav.architecture);
  setText('drawer-link-experience', t.nav.experience);
  setText('drawer-link-stack', t.nav.techStack);
  setText('drawer-link-contact', t.nav.contact);
  setText('drawer-download-cv', t.nav.downloadCv);
  setText('drawer-get-in-touch', t.nav.getInTouch);

  // CV Links
  const cvButtons = document.querySelectorAll('.cv-link');
  cvButtons.forEach(btn => {
    btn.setAttribute('href', `#contact`);
  });

  // Hero Section
  setText('hero-status-tag', t.hero.status);
  setText('hero-status-text', t.hero.statusText);
  setText('hero-location', t.hero.location);
  setText('hero-tagline', t.hero.tagline);
  setText('hero-tenure-badge', t.hero.tenureBadge);
  setText('hero-title', t.hero.title);
  setText('hero-desc', t.hero.description);

  // Hero Stats Cards
  const statsContainer = document.getElementById('hero-stats-grid');
  if (statsContainer) {
    statsContainer.innerHTML = t.hero.stats.map(st => `
      <div class="p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-3 border border-outline-variant/30 cursor-pointer group shadow-sm hover:shadow-md" data-stat-modal="${st.key}">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase tracking-wider text-on-surface-variant">${st.title}</span>
          <span class="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">info</span>
        </div>
        <div>
          <div class="font-headline text-3xl font-bold text-primary">${st.num}</div>
          <div class="text-[11px] text-on-surface-variant mt-0.5 leading-snug">${st.label}</div>
        </div>
      </div>
    `).join('');

    statsContainer.querySelectorAll('[data-stat-modal]').forEach(el => {
      el.addEventListener('click', () => {
        const key = el.getAttribute('data-stat-modal');
        openDetailModal(key);
      });
    });
  }

  // Capabilities / Services Section
  setText('services-eyebrow', t.services.eyebrow);
  setText('services-title', t.services.title);
  setText('services-subtitle', t.services.subtitle);

  const servicesContainer = document.getElementById('services-grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = t.services.items.map(item => `
      <div class="p-7 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-5 border border-outline-variant/30 group shadow-sm">
        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
            <span class="material-symbols-outlined text-xl">
              ${item.id === 'srv_software' ? 'terminal' : (item.id === 'srv_ai' ? 'smart_toy' : 'cloud_done')}
            </span>
          </div>
          <h3 class="font-headline text-xl font-bold text-on-surface">${item.title}</h3>
          <p class="text-xs text-on-surface-variant leading-relaxed font-light">${item.desc}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${item.tags.map(tg => `<span class="px-2 py-0.5 rounded bg-surface text-[10px] font-mono text-on-surface-variant">${tg}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Architecture Section
  setText('arch-eyebrow', t.architecture.eyebrow);
  setText('arch-title', t.architecture.title);
  setText('arch-subtitle', t.architecture.subtitle);

  const archContainer = document.getElementById('architecture-grid');
  if (archContainer) {
    archContainer.innerHTML = t.architecture.pillars.map(p => `
      <div class="p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-5 border border-outline-variant/30 group shadow-sm">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-primary font-bold">${p.pillarNum}</span>
            <button class="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary hover:bg-surface-container-high transition-colors" data-modal-btn="${p.id}" title="Read Details" type="button">
              <span class="material-symbols-outlined text-sm">info</span>
            </button>
          </div>
          <h3 class="font-headline text-lg font-semibold text-on-surface">${p.title}</h3>
          <p class="text-xs text-on-surface-variant font-light leading-relaxed">${p.desc}</p>
        </div>
        <div class="text-[11px] font-mono text-on-surface-variant bg-surface px-2.5 py-1 rounded w-fit border border-outline-variant/20">
          ${p.badge}
        </div>
      </div>
    `).join('');

    archContainer.querySelectorAll('[data-modal-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        openDetailModal(btn.getAttribute('data-modal-btn'));
      });
    });
  }

  // Experience Section
  setText('exp-eyebrow', t.experience.eyebrow);
  setText('exp-title', t.experience.title);
  setText('exp-subtitle', t.experience.subtitle);

  const expContainer = document.getElementById('experience-grid');
  if (expContainer) {
    expContainer.innerHTML = t.experience.roles.map(r => `
      <div class="p-6 rounded-2xl bg-surface hover:bg-surface-container transition-all flex flex-col justify-between gap-4 border border-outline-variant/30 group shadow-sm">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-primary">${r.period}</span>
            <button class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary hover:bg-surface-container-high transition-colors" data-modal-btn="${r.id}" title="View Details" type="button">
              <span class="material-symbols-outlined text-sm">info</span>
            </button>
          </div>
          <h3 class="font-headline text-xl font-bold text-on-surface">${r.title}</h3>
          <div class="text-xs font-semibold text-on-surface-variant">${r.company}</div>
          <p class="text-xs text-on-surface-variant font-light pt-1 leading-relaxed">${r.desc}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${r.tags.map(tg => `<span class="px-2 py-0.5 rounded bg-surface-container text-[10px] font-mono text-on-surface-variant">${tg}</span>`).join('')}
        </div>
      </div>
    `).join('');

    expContainer.querySelectorAll('[data-modal-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        openDetailModal(btn.getAttribute('data-modal-btn'));
      });
    });
  }

  // Tech Stack Section
  setText('stack-eyebrow', t.techStack.eyebrow);
  setText('stack-title', t.techStack.title);
  setText('stack-subtitle', t.techStack.subtitle);

  const stackContainer = document.getElementById('tech-stack-grid');
  if (stackContainer) {
    stackContainer.innerHTML = t.techStack.categories.map(cat => `
      <div class="p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-4 border border-outline-variant/30 group shadow-sm">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-primary font-bold tracking-wider">${cat.category}</span>
            <span class="material-symbols-outlined text-sm text-on-surface-variant/60">verified</span>
          </div>
          <h4 class="font-headline text-lg font-bold text-on-surface">${cat.title}</h4>
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${cat.skills.map(sk => `<span class="px-2 py-0.5 rounded bg-surface text-[11px] font-mono text-on-surface-variant border border-outline-variant/20">${sk}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Certifications Section
  setText('cert-eyebrow', t.certifications.eyebrow);
  setText('cert-title', t.certifications.title);
  setText('cert-subtitle', t.certifications.subtitle);

  const certContainer = document.getElementById('certifications-grid');
  if (certContainer) {
    certContainer.innerHTML = t.certifications.items.map(ci => `
      <div class="p-6 rounded-xl bg-surface flex flex-col justify-between gap-4 shadow-sm border border-outline-variant/30">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
            <span class="material-symbols-outlined">${ci.icon}</span>
          </div>
          <div>
            <div class="text-sm font-bold text-on-surface">${ci.title}</div>
            <div class="text-[11px] font-mono text-primary">${ci.issuer}</div>
          </div>
        </div>
        <p class="text-xs text-on-surface-variant leading-relaxed font-light">${ci.desc}</p>
        <div class="text-[11px] font-mono text-on-surface-variant flex items-center gap-1">
          <span class="material-symbols-outlined text-xs text-emerald-600">verified</span>
          ${ci.badge}
        </div>
      </div>
    `).join('');
  }

  // Autonomous AI Acceleration Section
  setText('ai-eyebrow', t.aiMultiplier.eyebrow);
  setText('ai-title', t.aiMultiplier.title);
  setText('ai-subtitle', t.aiMultiplier.subtitle);

  const aiContainer = document.getElementById('ai-multiplier-grid');
  if (aiContainer) {
    aiContainer.innerHTML = t.aiMultiplier.cards.map(ac => `
      <div class="p-6 rounded-2xl bg-surface hover:bg-surface-container transition-all flex flex-col justify-between gap-6 border border-outline-variant/30 group shadow-sm">
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <span class="material-symbols-outlined">${ac.icon}</span>
            </div>
            <span class="text-[11px] font-mono text-primary font-semibold bg-surface-container px-2 py-0.5 rounded">CI/CD</span>
          </div>
          <h3 class="font-headline text-xl font-semibold text-on-surface">${ac.title}</h3>
          <p class="text-xs text-on-surface-variant leading-relaxed font-light">${ac.desc}</p>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-outline-variant/30 text-xs font-mono">
          <span class="text-on-surface-variant">${ac.metricLabel}</span>
          <span class="text-primary font-bold">${ac.metricVal}</span>
        </div>
      </div>
    `).join('');
  }

  // Contact Section
  setText('contact-eyebrow', t.contact.eyebrow);
  setText('contact-title', t.contact.title);
  setText('contact-desc', t.contact.description);
  setText('contact-notice', t.contact.responseNotice);

  // Contact Cards
  const cards = t.contact.cards;
  setText('card-email-label', cards.email.label);
  setText('card-email-tag', cards.email.tag);
  setText('card-email-desc', cards.email.desc);

  setText('card-wa-label', cards.whatsapp.label);
  setText('card-wa-tag', cards.whatsapp.tag);
  setText('card-wa-desc', cards.whatsapp.desc);
  const waLink = document.getElementById('card-wa-link');
  if (waLink) {
    const encodedMsg = encodeURIComponent(cards.whatsapp.prefilled);
    waLink.setAttribute('href', `https://wa.me/524767280600?text=${encodedMsg}`);
  }

  // Floating Mobile WhatsApp Action
  const floatingWa = document.getElementById('floating-whatsapp-btn');
  if (floatingWa) {
    const encodedMsg = encodeURIComponent(cards.whatsapp.prefilled);
    floatingWa.setAttribute('href', `https://wa.me/524767280600?text=${encodedMsg}`);
    floatingWa.setAttribute('title', cards.whatsapp.tag);
  }

  setText('card-gh-label', cards.github.label);
  setText('card-gh-tag', cards.github.tag);
  setText('card-gh-desc', cards.github.desc);

  setText('card-li-label', cards.linkedin.label);
  setText('card-li-tag', cards.linkedin.tag);
  setText('card-li-desc', cards.linkedin.desc);

  // Footer
  setText('footer-role', t.footer.role);
  setText('footer-location', t.footer.location);
  setText('footer-core-title', t.footer.coreTitle);
  setText('footer-core-desc', t.footer.coreDesc);
  setText('footer-connect-title', t.footer.connectTitle);
  setText('footer-avail-title', t.footer.availTitle);
  setText('footer-avail-desc', t.footer.availDesc);
  setText('footer-schedule', t.footer.scheduleReview);
  setText('footer-copyright', t.footer.copyright);
  setText('footer-edition', t.footer.edition);

  // Modal static text
  setText('modal-close-btn-text', t.modal.close);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = text;
  }
}

export function openDetailModal(key) {
  const data = modalDeepDives[key] ? modalDeepDives[key][currentLang] : null;
  if (!data) return;

  const catEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');
  const statLabelEl = document.getElementById('modal-stat-label');
  const statValEl = document.getElementById('modal-stat-val');
  const tagsContainer = document.getElementById('modal-tags');

  if (catEl) catEl.textContent = data.cat;
  if (titleEl) titleEl.textContent = data.title;
  if (bodyEl) bodyEl.textContent = data.body;
  if (statLabelEl) statLabelEl.textContent = data.statLabel;
  if (statValEl) statValEl.textContent = data.statVal;

  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const sp = document.createElement('span');
      sp.className = 'px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-on-surface border border-outline-variant/30';
      sp.textContent = tag;
      tagsContainer.appendChild(sp);
    });
  }

  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

export function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Mobile Drawer Navigation
function initMobileDrawer() {
  const openBtn = document.getElementById('drawer-open-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    if (drawer) drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close drawer on navigation click
  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectInitialLanguage();

  // Language switcher buttons (Header & Drawer)
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-btn');
      setLanguage(targetLang);
    });
  });

  // Modal close events
  const modalCloseBtn = document.getElementById('modal-close-icon');
  const modalCloseFooterBtn = document.getElementById('modal-close-footer');
  const modalBackdrop = document.getElementById('modal-backdrop');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDetailModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener('click', closeDetailModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeDetailModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetailModal();
  });

  initMobileDrawer();
  renderPageContent();
  updateToggleButtons();
});
