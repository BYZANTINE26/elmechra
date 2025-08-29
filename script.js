// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-hidden', String(expanded));
    if (!expanded) {
      nav.style.height = '280px';
    } else {
      nav.style.height = '0';
    }
  });
  // Start hidden for a11y
  nav.setAttribute('aria-hidden', 'true');
}

// Scroll reveal
const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  }
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }) : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el); else el.classList.add('in');
});

// Mailto sender for static hosting
function sendMail(form) {
  const company = encodeURIComponent(form.company.value.trim());
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const phone = encodeURIComponent(form.phone.value.trim());
  const message = encodeURIComponent(form.message.value.trim());

  const subject = `Enquiry — ${company} (${name})`;
  const body = `Company: ${company}%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0ARequirements:%0D%0A${message}`;
  window.location.href = `mailto:info@elmechra.in?subject=${subject}&body=${body}`;
  return false; // Prevent default submit
}

// Dynamic year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();