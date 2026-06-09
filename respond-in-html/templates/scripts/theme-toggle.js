// Theme toggle — cycles system → light → dark
// Include once at bottom of <body>. Requires: button with id="theme-toggle"

(function () {
  var themes = ['system', 'light', 'dark'];
  var icons = { system: '◐', light: '☀', dark: '☾' };
  var current = sessionStorage.getItem('theme') || 'system';

  function apply(t) {
    if (t === 'system') {
      document.documentElement.setAttribute('data-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', t);
    }
    document.getElementById('theme-toggle').textContent = icons[t];
    sessionStorage.setItem('theme', t);
  }

  apply(current);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    var idx = themes.indexOf(current);
    current = themes[(idx + 1) % themes.length];
    apply(current);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (current === 'system') apply('system');
  });
})();
