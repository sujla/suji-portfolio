import './modal.css';
const trigger = document.querySelector('[data-editorial-prototype]');
if (trigger) {
  let dialog;
  trigger.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (dialog) return;
    const previousOverflow = document.documentElement.style.overflow;
    dialog = document.createElement('dialog');
    dialog.className = 'editorial-prototype-modal';
    dialog.setAttribute('aria-label', 'Article Studio live prototype');
    const bar = document.createElement('div');
    bar.className = 'editorial-prototype-bar';
    const label = document.createElement('span'); label.textContent = 'LIVE PROTOTYPE';
    const close = document.createElement('button'); close.type = 'button'; close.textContent = '×'; close.setAttribute('aria-label', 'Close prototype');
    bar.append(label, close);
    const frame = document.createElement('iframe'); frame.title = 'Article Studio editor'; frame.src = trigger.href;
    dialog.append(bar, frame); document.body.append(dialog);
    const sourceRect = trigger.getBoundingClientRect();
    dialog.showModal(); document.documentElement.style.overflow = 'hidden';
    let closing = false;
    async function dismiss() {
      if (closing) return; closing = true;
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) await dialog.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.97)' }], { duration: 180, easing: 'ease-in', fill: 'forwards' }).finished;
      dialog.close(); dialog.remove(); dialog = null; document.documentElement.style.overflow = previousOverflow; trigger.focus({ preventScroll: true });
    }
    close.addEventListener('click', dismiss);
    dialog.addEventListener('cancel', event => { event.preventDefault(); dismiss(); });
    dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss(); } });
    frame.addEventListener('load', () => { frame.contentDocument?.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); dismiss(); } }); });
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const rect = dialog.getBoundingClientRect();
      dialog.animate([{ opacity: 0, transform: `translate(${sourceRect.left + sourceRect.width / 2 - rect.left - rect.width / 2}px, ${sourceRect.top + sourceRect.height / 2 - rect.top - rect.height / 2}px) scale(.85)` }, { opacity: 1, transform: 'translate(0,0) scale(1)' }], { duration: 550, easing: 'cubic-bezier(.16,1,.3,1)' });
    }
  });
}
