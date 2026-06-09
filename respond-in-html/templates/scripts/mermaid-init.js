// Mermaid init — theme-reactive diagram initialization
// Include once at bottom of <body> when using diagrams.
// Requires: mermaid CDN in <head>, theme toggle button with id="theme-toggle"

(function () {
  function mermaidTheme() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      startOnLoad: true,
      theme: 'base',
      securityLevel: 'loose',
      themeVariables: {
        fontFamily: 'ui-monospace, SF Mono, Menlo, monospace',
        primaryColor: isDark ? '#3D3D3A' : '#F0EEE6',
        primaryTextColor: isDark ? '#D1CFC5' : '#3D3D3A',
        primaryBorderColor: isDark ? '#3D3D3A' : '#D1CFC5',
        lineColor: isDark ? '#87867F' : '#87867F',
        secondaryColor: isDark ? '#2A2A28' : '#FAF9F5',
        tertiaryColor: isDark ? '#1E1E1C' : '#FFFFFF',
        background: isDark ? '#141413' : '#FAF9F5',
        mainBkg: isDark ? '#1E1E1C' : '#FFFFFF',
        nodeBorder: isDark ? '#3D3D3A' : '#D1CFC5',
        clusterBkg: isDark ? '#2A2A28' : '#F0EEE6',
        clusterBorder: isDark ? '#3D3D3A' : '#D1CFC5',
        titleColor: isDark ? '#FAF9F5' : '#141413',
        edgeLabelBackground: isDark ? '#1E1E1C' : '#FFFFFF'
      }
    };
  }

  mermaid.initialize(mermaidTheme());

  var initDone = false;
  var observer = new MutationObserver(function () {
    if (!initDone && document.getElementById('theme-toggle')) {
      initDone = true;
      document.getElementById('theme-toggle').addEventListener('click', function () {
        setTimeout(function () {
          mermaid.initialize(mermaidTheme());
          mermaid.run({ querySelector: '.mermaid' });
        }, 50);
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
