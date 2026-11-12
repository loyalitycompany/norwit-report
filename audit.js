(() => {
  const menuButton = document.querySelector('.audit-menu-toggle');
  const nav = document.querySelector('#audit-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); }
    });
  }
  const bars = [...document.querySelectorAll('.audit-bar')];
  const tabs = [...document.querySelectorAll('[data-metric]')];
  const locale = new Intl.NumberFormat('sk-SK', {maximumFractionDigits:2});
  const suffix = {cost:' €', clicks:'', conversions:''};
  function render(metric) {
    const max = Math.max(...bars.map(el => Number(el.dataset[metric])));
    bars.forEach(el => {
      const val = Number(el.dataset[metric]);
      el.style.setProperty('--bar-height', `${Math.max(2, val / max * 100)}%`);
      el.querySelector('.audit-bar-value').textContent = locale.format(val) + suffix[metric];
      el.title = `${el.dataset.month}: ${locale.format(val)}${suffix[metric]}`;
    });
    tabs.forEach(tab => { const active = tab.dataset.metric === metric; tab.classList.toggle('active',active); tab.setAttribute('aria-pressed',String(active)); });
  }
  if (bars.length) { tabs.forEach(tab => tab.addEventListener('click', () => render(tab.dataset.metric))); render('cost'); }
  if ('IntersectionObserver' in window && nav) {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const targets = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) links.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === `#${visible.target.id}` ? 'location' : 'false'));
    }, {rootMargin:'-15% 0px -65% 0px',threshold:0});
    targets.forEach(target => observer.observe(target));
  }
})();
