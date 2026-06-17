(function () {
  var LANGS = ['en', 'it', 'fr'];
  var DEFAULT_LANG = 'en';

  var navTranslations = {
    en: {
      'nav.software':     'Software',
      'nav.publications': 'Publications',
      'nav.talks':        'Talks',
      'nav.teaching':     'Teaching',
      'nav.blog':         'Blog',
      'nav.cv':           'CV',
      'nav.aboutme':      'About me',
    },
    it: {
      'nav.software':     'Software',
      'nav.publications': 'Pubblicazioni',
      'nav.talks':        'Talk',
      'nav.teaching':     'Didattica',
      'nav.blog':         'Blog',
      'nav.cv':           'CV',
      'nav.aboutme':      'Chi sono',
    },
    fr: {
      'nav.software':     'Logiciels',
      'nav.publications': 'Publications',
      'nav.talks':        'Conférences',
      'nav.teaching':     'Enseignement',
      'nav.blog':         'Blog',
      'nav.cv':           'CV',
      'nav.aboutme':      'À propos',
    },
  };

  function getCurrentLang() {
    try {
      var stored = localStorage.getItem('lang');
      return LANGS.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function applyLang(lang) {
    // Show/hide content blocks
    var blocks = document.querySelectorAll('.lang-block');
    for (var i = 0; i < blocks.length; i++) {
      var el = blocks[i];
      if (el.getAttribute('data-lang') === lang) {
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }

    // Translate nav items (querySelectorAll handles greedy-nav clones)
    var t = navTranslations[lang] || navTranslations[DEFAULT_LANG];
    var i18nEls = document.querySelectorAll('[data-i18n]');
    for (var j = 0; j < i18nEls.length; j++) {
      var key = i18nEls[j].getAttribute('data-i18n');
      if (t[key]) i18nEls[j].textContent = t[key];
    }

    // Update active state on all lang buttons (including greedy-nav clones)
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var k = 0; k < btns.length; k++) {
      var btn = btns[k];
      if (btn.getAttribute('data-lang-btn') === lang) {
        btn.classList.add('lang-btn--active');
      } else {
        btn.classList.remove('lang-btn--active');
      }
    }

    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
    applyLang(lang);
  }

  // Event delegation — catches clicks on any lang button including greedy-nav clones
  document.addEventListener('click', function (e) {
    var btn = e.target;
    // Walk up in case something inside the button was clicked
    while (btn && btn !== document) {
      if (btn.getAttribute && btn.getAttribute('data-lang-btn')) {
        var lang = btn.getAttribute('data-lang-btn');
        if (LANGS.indexOf(lang) !== -1) setLang(lang);
        return;
      }
      btn = btn.parentNode;
    }
  });

  // Apply immediately — script runs at end of body so DOM is ready
  applyLang(getCurrentLang());
}());
