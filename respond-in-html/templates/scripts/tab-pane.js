// Tab pane — minimal JS for switching tab panes
// Include once at bottom of <body> when using tabbed content.

document.querySelectorAll('[data-tabs]').forEach(b => {
  const btns = b.querySelectorAll('button'), panes = b.querySelectorAll('pre');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(x => { x.removeAttribute('data-on'); });
    panes.forEach(x => { x.removeAttribute('data-on'); });
    btn.setAttribute('data-on', '');
    panes[+btn.dataset.t].setAttribute('data-on', '');
  }));
});
