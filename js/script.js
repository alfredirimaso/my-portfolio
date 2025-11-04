// Small UI interactions: nav toggle, theme toggle, contact mailto fallback
(function(){
  // year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', ()=>{
      mainNav.classList.toggle('show');
    });
  }

  // theme toggle (stores preference in localStorage)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  function applyTheme(t){
    if(t === 'dark') root.setAttribute('theme','dark');
    else root.removeAttribute('theme');
  }
  const saved = localStorage.getItem('site-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const next = root.getAttribute('theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('site-theme', next);
    });
  }

  // Contact form: build mailto and open user's email client as fallback
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        alert('Please fill in all fields before sending.');
        return;
      }
      const to = 'alfredirimaso@gmail.com'; // replace with real email
      const subject = encodeURIComponent('Contact from portfolio site — ' + name);
      const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
      // Try to open mail client
      window.location.href = mailto;
    });
  }
})();
