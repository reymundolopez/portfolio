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
      btn.className = 'lang-btn px-2.5 py-1 rounded-full bg-surface text-primary font-bold shadow-[0_1px_4px_rgba(58,48,42,0.08)] transition-all';
    } else {
      btn.className = 'lang-btn px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all';
    }
  });
}

function renderPageContent() {
  const t = translations[currentLang];

  // Document Title
  document.title = currentLang === 'es'
    ? 'Reymundo López | Arquitecto de Software & Sistemas con IA'
    : 'Reymundo López | Software Architect & AI Systems';

  // Navigation
  setText('nav-role', t.nav.role);
  setText('nav-status-badge', t.nav.statusBadge);
  setText('nav-link-whatido', t.nav.whatIDo);
  setText('nav-link-superpowers', t.nav.superpowers);
  setText('nav-link-trackrecord', t.nav.trackRecord);
  setText('nav-link-contact', t.nav.contact);
  setText('nav-get-in-touch', t.nav.getInTouch);

  // Drawer Nav (Mobile)
  setText('drawer-link-whatido', t.nav.whatIDo);
  setText('drawer-link-superpowers', t.nav.superpowers);
  setText('drawer-link-trackrecord', t.nav.trackRecord);
  setText('drawer-link-contact', t.nav.contact);
  setText('drawer-get-in-touch', t.nav.getInTouch);

  // Hero Section
  setText('hero-status-tag', t.hero.status);
  setText('hero-status-text', t.hero.statusText);
  setText('hero-location', t.hero.location);
  setText('hero-greeting', t.hero.greeting);
  setText('hero-title', t.hero.title);
  setText('hero-subtitle', t.hero.subtitle);
  setText('hero-cta-primary', t.hero.ctaPrimary);
  setText('hero-cta-secondary', t.hero.ctaSecondary);

  // Hero Stats Cards (with click to modal)
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

  // Superpowers Section
  setText('superpowers-eyebrow', t.superpowers.eyebrow);
  setText('superpowers-title', t.superpowers.title);
  const superpowersContainer = document.getElementById('superpowers-grid');
  if (superpowersContainer) {
    superpowersContainer.innerHTML = t.superpowers.items.map(item => `
      <div class="p-6 rounded-2xl bg-surface flex flex-col justify-between gap-4 border border-outline-variant/30 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-xl">${item.icon}</span>
          </div>
          <h3 class="font-headline text-lg font-bold text-on-surface">${item.title}</h3>
        </div>
        <p class="text-xs text-on-surface-variant font-light leading-relaxed">${item.desc}</p>
      </div>
    `).join('');
  }

  // "What I Do" (Services) Section
  setText('whatido-eyebrow', t.whatIDo.eyebrow);
  setText('whatido-title', t.whatIDo.title);
  setText('whatido-subtitle', t.whatIDo.subtitle);

  const servicesContainer = document.getElementById('whatido-grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = t.whatIDo.services.map(srv => `
      <div class="p-7 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-6 border border-outline-variant/30 group shadow-sm">
        <div class="space-y-3">
          <div class="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-sm">
            <span class="material-symbols-outlined text-2xl">${srv.icon}</span>
          </div>
          <h3 class="font-headline text-2xl font-bold text-on-surface leading-tight">${srv.title}</h3>
          <p class="text-xs font-mono font-bold text-primary tracking-wide uppercase">${srv.summary}</p>
          <p class="text-xs text-on-surface-variant font-light leading-relaxed">${srv.details}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-2 border-t border-outline-variant/20">
          ${srv.tags.map(tg => `<span class="px-2 py-0.5 rounded bg-surface text-[11px] font-mono text-on-surface-variant border border-outline-variant/20">${tg}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Track Record & Proof Section
  setText('trackrecord-eyebrow', t.trackRecord.eyebrow);
  setText('trackrecord-title', t.trackRecord.title);
  setText('trackrecord-subtitle', t.trackRecord.subtitle);
  setText('trackrecord-prompt', t.trackRecord.clickPrompt);

  const milestonesContainer = document.getElementById('milestones-grid');
  if (milestonesContainer) {
    milestonesContainer.innerHTML = t.trackRecord.milestones.map(m => `
      <div class="p-6 rounded-2xl bg-surface hover:bg-surface-container transition-all flex flex-col justify-between gap-4 border border-outline-variant/30 group shadow-sm cursor-pointer" data-modal-btn="${m.id}">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-primary">${m.period}</span>
            <div class="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-sm">info</span>
            </div>
          </div>
          <h4 class="font-headline text-xl font-bold text-on-surface">${m.title}</h4>
          <div class="text-xs font-semibold text-on-surface-variant">${m.org}</div>
          <p class="text-xs text-on-surface-variant font-light pt-1 leading-relaxed">${m.summary}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${m.tags.map(tg => `<span class="px-2 py-0.5 rounded bg-surface-container text-[10px] font-mono text-on-surface-variant">${tg}</span>`).join('')}
        </div>
      </div>
    `).join('');

    milestonesContainer.querySelectorAll('[data-modal-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        openDetailModal(btn.getAttribute('data-modal-btn'));
      });
    });
  }

  // Credentials
  setText('credentials-title', t.trackRecord.credentialsTitle);
  const credentialsContainer = document.getElementById('credentials-grid');
  if (credentialsContainer) {
    credentialsContainer.innerHTML = t.trackRecord.credentials.map(c => `
      <div class="p-5 rounded-xl bg-surface flex items-center gap-4 border border-outline-variant/30 shadow-sm">
        <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
          <span class="material-symbols-outlined">${c.icon}</span>
        </div>
        <div>
          <div class="text-sm font-bold text-on-surface">${c.title}</div>
          <div class="text-[11px] font-mono text-primary font-medium">${c.issuer}</div>
          <div class="text-[11px] text-on-surface-variant font-light mt-0.5">${c.note}</div>
        </div>
      </div>
    `).join('');
  }

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

  // Modal close label
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

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'view_case_study', {
        case_study_id: key,
        title: data.title,
        language: currentLang
      });
    }
  }
}

export function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

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

  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  currentLang = detectInitialLanguage();

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-btn');
      setLanguage(targetLang);
    });
  });

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

  // Track WhatsApp conversion clicks
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'contact',
          event_label: 'whatsapp_click',
          button_id: link.id || 'whatsapp_link',
          language: currentLang
        });
      }
    });
  });
});
