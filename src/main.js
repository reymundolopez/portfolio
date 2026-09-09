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
    ? 'Reymundo López — Arquitecto de Software & IA | El Creador de Software'
    : 'Reymundo López — Software Architect & AI | The Software Creator';

  // Navigation
  setText('nav-role', t.nav.role);
  setText('nav-status-badge', t.nav.statusBadge);
  setText('nav-link-superpowers', t.nav.superpowers);
  setText('nav-link-whatido', t.nav.whatIDo);
  setText('nav-link-trackrecord', t.nav.trackRecord);
  setText('nav-link-contact', t.nav.contact);
  setText('nav-get-in-touch', t.nav.getInTouch);

  // Drawer Nav (Mobile)
  setText('drawer-link-superpowers', t.nav.superpowers);
  setText('drawer-link-whatido', t.nav.whatIDo);
  setText('drawer-link-trackrecord', t.nav.trackRecord);
  setText('drawer-link-contact', t.nav.contact);
  setText('drawer-get-in-touch', t.nav.getInTouch);

  // Hero Section
  setText('hero-status-tag', t.hero.status);
  setText('hero-status-text', t.hero.statusText);
  setText('hero-moniker-es', t.hero.monikerEs);
  setText('hero-moniker-en', t.hero.monikerEn);
  setText('hero-location', t.hero.location);
  setText('hero-consultant-tag', t.hero.consultantTag);
  setText('hero-title', t.hero.title);
  setText('hero-subtitle', t.hero.subtitle);
  setText('hero-cta-primary', t.hero.ctaPrimary);
  setText('hero-cta-secondary', t.hero.ctaSecondary);

  // Hero Stats Cards (with click to modal)
  const statsContainer = document.getElementById('hero-stats-grid');
  if (statsContainer) {
    statsContainer.innerHTML = t.hero.stats.map(st => `
      <div class="bg-brand-surface/90 backdrop-blur-md p-4 rounded-xl border border-brand-border/80 hover:border-brand-accent transition-all cursor-pointer group shadow-sm flex flex-col justify-between gap-2" data-stat-modal="${st.key}">
        <div class="flex items-center justify-between text-[11px] font-mono text-brand-textMuted uppercase tracking-wider">
          <span>${st.title}</span>
          <span class="w-5 h-5 rounded-full bg-brand-bg flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </span>
        </div>
        <div>
          <div class="font-serif-headline text-2xl sm:text-3xl text-brand-textPrimary font-semibold">${st.num}</div>
          <div class="text-[11px] text-brand-textSecondary mt-0.5 leading-snug">${st.label}</div>
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
    superpowersContainer.innerHTML = t.superpowers.items.map(item => {
      let iconHtml = '';
      if (item.codeBadge) {
        iconHtml = `<span class="text-sm font-mono font-bold text-brand-accent">&lt;/&gt;</span>`;
      } else if (item.icon === 'lightning') {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`;
      } else {
        iconHtml = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;
      }

      return `
        <div class="bg-brand-surface p-6 rounded-2xl border border-brand-border/80 shadow-sm flex flex-col justify-between gap-4 hover:border-brand-accent/60 transition-all">
          <div class="flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-[#f4ece3] border border-brand-border/80 flex items-center justify-center shrink-0">
              ${iconHtml}
            </div>
            <h3 class="font-bold text-base text-brand-textPrimary">${item.title}</h3>
          </div>
          <p class="text-xs sm:text-sm text-brand-textSecondary font-light leading-relaxed">${item.desc}</p>
        </div>
      `;
    }).join('');
  }

  // "What I Do" (4 Solution Cards) Section
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

  // Track Record & Proof Section
  setText('trackrecord-eyebrow', t.trackRecord.eyebrow);
  setText('trackrecord-title', t.trackRecord.title);
  setText('trackrecord-subtitle', t.trackRecord.subtitle);
  setText('trackrecord-prompt', t.trackRecord.clickPrompt);

  const milestonesContainer = document.getElementById('milestones-grid');
  if (milestonesContainer) {
    milestonesContainer.innerHTML = t.trackRecord.milestones.map(m => `
      <div class="bg-brand-surface p-6 rounded-2xl border border-brand-border/80 hover:border-brand-accent transition-all flex flex-col justify-between gap-5 group shadow-sm cursor-pointer" data-modal-btn="${m.id}">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-brand-accent bg-[#fbf2eb] px-2.5 py-0.5 rounded-full border border-brand-accent/20">${m.period}</span>
            <div class="w-7 h-7 rounded-full bg-brand-bg flex items-center justify-center text-brand-textMuted group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <h4 class="font-serif-headline text-2xl font-semibold text-brand-textPrimary leading-snug">${m.title}</h4>
          <div class="text-xs font-bold text-brand-textSecondary">${m.org}</div>
          <p class="text-xs sm:text-sm text-brand-textSecondary font-light leading-relaxed pt-1">${m.summary}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-brand-border/60">
          ${m.tags.map(tg => `<span class="px-2 py-0.5 rounded bg-brand-bg text-[10px] font-mono text-brand-textSecondary border border-brand-border/60">${tg}</span>`).join('')}
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
    credentialsContainer.innerHTML = t.trackRecord.credentials.map(c => {
      let iconSvg = '';
      if (c.icon === 'degree') {
        iconSvg = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"/></svg>`;
      } else if (c.icon === 'spark') {
        iconSvg = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`;
      } else {
        iconSvg = `<svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`;
      }

      return `
        <div class="bg-brand-surface p-4 rounded-xl border border-brand-border/80 flex items-center gap-3.5 shadow-sm">
          <div class="w-10 h-10 rounded-lg bg-[#f4ece3] border border-brand-border/80 flex items-center justify-center shrink-0">
            ${iconSvg}
          </div>
          <div>
            <div class="text-xs sm:text-sm font-bold text-brand-textPrimary leading-tight">${c.title}</div>
            <div class="text-[11px] font-mono text-brand-accent font-semibold">${c.issuer}</div>
            <div class="text-[11px] text-brand-textSecondary font-light mt-0.5">${c.note}</div>
          </div>
        </div>
      `;
    }).join('');
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

  // Modal Buttons
  setText('modalUnderstoodText', t.modal.understood);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) {
    el.textContent = text;
  }
}

export function openDetailModal(key) {
  const data = modalDeepDives[key] ? modalDeepDives[key][currentLang] : null;
  if (!data) return;

  const catEl = document.getElementById('modalCategory');
  const titleEl = document.getElementById('modalTitle');
  const bodyEl = document.getElementById('modalDescription');
  const statLabelEl = document.getElementById('modalStatLabel');
  const statValEl = document.getElementById('modalStatVal');
  const tagsContainer = document.getElementById('modalTags');

  if (catEl) catEl.textContent = data.cat;
  if (titleEl) titleEl.textContent = data.title;
  if (bodyEl) bodyEl.textContent = data.body;
  if (statLabelEl) statLabelEl.textContent = data.statLabel;
  if (statValEl) statValEl.textContent = data.statVal;

  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const sp = document.createElement('span');
      sp.className = 'px-2 py-0.5 rounded bg-brand-bg text-[11px] font-mono text-brand-textSecondary border border-brand-border/80';
      sp.textContent = tag;
      tagsContainer.appendChild(sp);
    });
  }

  const modal = document.getElementById('infoModal');
  const modalBox = document.getElementById('modalBox');
  if (modal) {
    modal.classList.remove('hidden');
    if (modalBox) {
      modalBox.classList.remove('scale-95');
      modalBox.classList.add('scale-100');
    }
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
  const modal = document.getElementById('infoModal');
  const modalBox = document.getElementById('modalBox');
  if (modal) {
    if (modalBox) {
      modalBox.classList.remove('scale-100');
      modalBox.classList.add('scale-95');
    }
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

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalUnderstoodBtn = document.getElementById('modalUnderstoodBtn');
  const modalContainer = document.getElementById('infoModal');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDetailModal);
  if (modalUnderstoodBtn) modalUnderstoodBtn.addEventListener('click', closeDetailModal);
  if (modalContainer) {
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        closeDetailModal();
      }
    });
  }

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

