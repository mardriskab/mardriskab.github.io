  // Scroll-triggered fade-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Waitlist form
  function handleWaitlist(e) {
    e.preventDefault();
    const el = document.getElementById('waitlist-success');
    el.classList.remove('hidden');
    document.getElementById('waitlist-form').reset();
    setTimeout(() => el.classList.add('hidden'), 5000);
  }

  // Newsletter form
  function handleNewsletter(e) {
    e.preventDefault();
    const el = document.getElementById('newsletter-success');
    el.classList.remove('hidden');
    e.target.reset();
    setTimeout(() => el.classList.add('hidden'), 4000);
  }

  // Auto-close mobile nav when a link is clicked
  document.querySelectorAll('details a').forEach(link => {
    link.addEventListener('click', () => {
      link.closest('details').removeAttribute('open');
    });
  });