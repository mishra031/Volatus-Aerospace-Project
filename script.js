/* JavaScript extracted & combined from the uploaded file (hgh.pdf) */

/* Mobile menu toggle */
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener('click', function () {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
}

/* Mobile dropdown toggles */
document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', function () {
    const dropdown = this.getAttribute('data-dropdown');
    const target = document.getElementById('mobile-' + dropdown);
    const arrow = this.querySelector('.mobile-dropdown-arrow');

    if (target) {
      target.classList.toggle('active');
      arrow && arrow.classList.toggle('active');
    }
  });
});

/* Scroll to top button visibility and action */
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (!scrollToTopBtn) return;
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}

/* Quick contact modal logic */
const quickContactBtn = document.getElementById('quickContactBtn');
const quickContactModal = document.getElementById('quickContactModal');
const modalClose = document.getElementById('modalClose');
const quickContactForm = document.getElementById('quickContactForm');
const quickFormMessage = document.getElementById('quickFormMessage');

if (quickContactBtn && quickContactModal) {
  quickContactBtn.addEventListener('click', () => {
    quickContactModal.classList.toggle('active');
  });
}
if (modalClose) {
  modalClose.addEventListener('click', () => {
    quickContactModal.classList.remove('active');
  });
}

/* Close quick contact when clicking outside (simple) */
document.addEventListener('click', (e) => {
  if (!quickContactModal || !quickContactBtn) return;
  if (!quickContactModal.contains(e.target) && !quickContactBtn.contains(e.target)) {
    quickContactModal.classList.remove('active');
  }
});

/* Quick contact form submit */
if (quickContactForm) {
  quickContactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('quickName').value.trim();
    const email = document.getElementById('quickEmail').value.trim();
    const message = document.getElementById('quickMessage').value.trim();

    if (name && email && message) {
      quickFormMessage.textContent = 'Thank you! We will get back to you soon.';
      quickFormMessage.className = 'quick-form-message success';
      quickFormMessage.style.display = 'block';
      quickContactForm.reset();

      setTimeout(() => {
        quickFormMessage.style.display = 'none';
        quickContactModal.classList.remove('active');
      }, 3000);
    } else {
      quickFormMessage.textContent = 'Please fill in all fields.';
      quickFormMessage.className = 'quick-form-message error';
      quickFormMessage.style.display = 'block';
    }
  });
}

/* Info modal content & logic */
const modalContent = {
  aviation: {
    title: 'Aviation Services',
    content: `
      <h3>Comprehensive Aircraft Solutions</h3>
      <p>Our aviation services division provides end-to-end support for all your aircraft maintenance, repair, and operational needs. With decades of combined experience and FAA-certified technicians, we ensure your fleet operates at peak performance.</p>
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Aircraft Maintenance & Repair:</strong> Scheduled maintenance, inspections, and emergency repairs for fixed-wing and rotary aircraft</li>
        <li><strong>Avionics Systems:</strong> Installation, troubleshooting, and upgrades of navigation, communication, and flight control systems</li>
        <li><strong>Engine Services:</strong> Overhaul, diagnostics, and performance optimization</li>
        <li><strong>Interior Refurbishment:</strong> Custom cabin upgrades and modifications</li>
        <li><strong>Aircraft Management:</strong> Complete fleet management solutions including scheduling, compliance, and logistics</li>
      </ul>
      <a href="#contact" class="info-modal-cta">Contact Us</a>
    `
  },
  drones: {
    title: 'Drone Solutions',
    content: `
      <h3>Industrial Drone Services</h3>
      <p>Advanced UAV operations, aerial surveying, LiDAR, thermal inspection and custom payload integration for industry workflows.</p>
      <h3>Capabilities:</h3>
      <ul>
        <li><strong>Photogrammetry & LiDAR:</strong> Accurate mapping and 3D models</li>
        <li><strong>Thermal Imaging:</strong> Energy audits, leak detection, and predictive maintenance</li>
        <li><strong>Custom UAV Integration:</strong> Tailored drone solutions with specialized sensors and payloads</li>
        <li><strong>Drone-as-a-Service:</strong> On-demand aerial data collection</li>
      </ul>
      <a href="#contact" class="info-modal-cta">Start Your Drone Project</a>
    `
  },
  training: {
    title: 'Training & Certification',
    content: `
      <h3>Industry-Leading Education Programs</h3>
      <p>From Part 107 drone pilot certification to advanced aircraft maintenance training, we prepare individuals & teams for operational success.</p>
      <h3>Training Programs:</h3>
      <ul>
        <li><strong>Part 107 Drone Pilot Certification</strong></li>
        <li><strong>Advanced Drone Operations</strong></li>
        <li><strong>Aircraft Maintenance Training</strong></li>
        <li><strong>Avionics Technician Courses</strong></li>
      </ul>
      <a href="#contact" class="info-modal-cta">Explore Training Options</a>
    `
  }
};

const infoModalOverlay = document.getElementById('infoModalOverlay');
const infoModalTitle = document.getElementById('infoModalTitle');
const infoModalBody = document.getElementById('infoModalBody');
const infoModalClose = document.getElementById('infoModalClose');

function openInfoModal(type) {
  const content = modalContent[type];
  if (content && infoModalOverlay && infoModalTitle && infoModalBody) {
    infoModalTitle.textContent = content.title;
    infoModalBody.innerHTML = content.content;
    infoModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeInfoModal() {
  if (infoModalOverlay) {
    infoModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (infoModalClose) {
  infoModalClose.addEventListener('click', closeInfoModal);
}
if (infoModalOverlay) {
  infoModalOverlay.addEventListener('click', function (e) {
    if (e.target === infoModalOverlay) closeInfoModal();
  });
}

/* Hook Learn More buttons to modal */
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href === '#aviation') openInfoModal('aviation');
    else if (href === '#drone-ops') openInfoModal('drones');
    else if (href === '#training') openInfoModal('training');
  });
});

/* Contact form basic handling */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      formMessage.textContent = 'Message sent. We will contact you soon.';
      formMessage.className = 'form-message success';
      formMessage.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { formMessage.style.display = 'none'; }, 3000);
    } else {
      formMessage.textContent = 'Please fill all required fields.';
      formMessage.className = 'form-message error';
      formMessage.style.display = 'block';
    }
  });
}
