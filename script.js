const defaultConfig = {
  background_color: "#002B5C",
  surface_color: "#ffffff",
  text_color: "#002B5C",
  primary_action_color: "#00AEEF",
  secondary_action_color: "#e0e0e0",
  font_family: "Segoe UI",
  font_size: 16,
  hero_headline: "Innovating the Future of Aerospace and Drone Solutions",
  hero_subheadline: "Leading the way in aviation services, advanced drone technology, and comprehensive training programs for a safer, smarter tomorrow.",
  about_title: "About Volatus Aerospace",
  about_description: "Volatus Aerospace is a leading provider of integrated drone solutions, combining cutting-edge technology with unparalleled expertise. We serve diverse industries including energy, infrastructure, agriculture, and public safety with our comprehensive suite of services and products.",
  cta_headline: "Partner with Volatus Aerospace",
  company_description: "Leading the future of aerospace innovation with cutting-edge drone technology and comprehensive aviation solutions.",
  copyright_text: "Copyright © 2025 Volatus Aerospace. All rights reserved."
};

async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;
  const baseFontStack = 'Tahoma, Geneva, Verdana, sans-serif';
  
  // Apply colors
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryActionColor = config.secondary_action_color || defaultConfig.secondary_action_color;
  
  document.querySelector('.header').style.background = `rgba(0, 43, 92, 0.95)`;
  document.querySelector('.hero').style.background = `linear-gradient(135deg, ${backgroundColor} 0%, #001a3d 100%)`;
  document.querySelector('.about').style.background = surfaceColor;
  document.querySelector('.divisions').style.background = secondaryActionColor;
  document.querySelector('.cta-section').style.background = `linear-gradient(135deg, ${primaryActionColor} 0%, ${backgroundColor} 100%)`;
  document.querySelector('.contact').style.background = surfaceColor;
  document.querySelector('.footer').style.background = backgroundColor;
  
  document.querySelectorAll('.division-card').forEach(card => {
    card.style.background = surfaceColor;
  });
  
  document.querySelectorAll('.about-content h2, .section-title, .contact h2').forEach(el => {
    el.style.color = textColor;
  });
  
  document.querySelectorAll('.btn-primary, .cta-button, .submit-btn, .side-btn, .quick-submit-btn').forEach(btn => {
    btn.style.background = primaryActionColor;
    btn.style.borderColor = primaryActionColor;
  });
  
  // Apply fonts
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  
  // Apply font sizes
  document.querySelector('.hero h1').style.fontSize = `${baseSize * 2.1875}px`;
  document.querySelector('.hero p').style.fontSize = `${baseSize * 0.78125}px`;
  document.querySelectorAll('.section-title, .about-content h2, .contact h2, .cta-section h2').forEach(el => {
    el.style.fontSize = `${baseSize * 1.5625}px`;
  });
  document.querySelectorAll('.division-card h3').forEach(el => {
    el.style.fontSize = `${baseSize * 0.9375}px`;
  });
  document.querySelectorAll('.about-content p, .division-card p, .cta-section p').forEach(el => {
    el.style.fontSize = `${baseSize * 0.6875}px`;
  });
  
  // Update text content
  const heroHeadline = document.getElementById('hero-headline');
  if (heroHeadline) {
    heroHeadline.textContent = config.hero_headline || defaultConfig.hero_headline;
  }
  
  const heroSubheadline = document.getElementById('hero-subheadline');
  if (heroSubheadline) {
    heroSubheadline.textContent = config.hero_subheadline || defaultConfig.hero_subheadline;
  }
  
  const aboutTitle = document.getElementById('about-title');
  if (aboutTitle) {
    aboutTitle.textContent = config.about_title || defaultConfig.about_title;
  }
  
  const aboutDescription = document.getElementById('about-description');
  if (aboutDescription) {
    aboutDescription.textContent = config.about_description || defaultConfig.about_description;
  }
  
  const ctaHeadline = document.getElementById('cta-headline');
  if (ctaHeadline) {
    ctaHeadline.textContent = config.cta_headline || defaultConfig.cta_headline;
  }
  
  const companyDescription = document.getElementById('company-description');
  if (companyDescription) {
    companyDescription.textContent = config.company_description || defaultConfig.company_description;
  }
  
  const copyrightText = document.getElementById('copyright-text');
  if (copyrightText) {
    copyrightText.textContent = config.copyright_text || defaultConfig.copyright_text;
  }
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ background_color: value });
          }
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ surface_color: value });
          }
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ primary_action_color: value });
          }
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ secondary_action_color: value });
          }
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_family: value });
        }
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        if (window.elementSdk) {
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["hero_headline", config.hero_headline || defaultConfig.hero_headline],
    ["hero_subheadline", config.hero_subheadline || defaultConfig.hero_subheadline],
    ["about_title", config.about_title || defaultConfig.about_title],
    ["about_description", config.about_description || defaultConfig.about_description],
    ["cta_headline", config.cta_headline || defaultConfig.cta_headline],
    ["company_description", config.company_description || defaultConfig.company_description],
    ["copyright_text", config.copyright_text || defaultConfig.copyright_text]
  ]);
}

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    formMessage.className = 'form-message success';
    formMessage.style.display = 'block';
    
    contactForm.reset();
    
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  } else {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.className = 'form-message error';
    formMessage.style.display = 'block';
  }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

mobileMenuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Mobile dropdown toggles
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

mobileDropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    const dropdownId = 'mobile-' + this.getAttribute('data-dropdown');
    const dropdownContent = document.getElementById(dropdownId);
    const arrow = this.querySelector('.mobile-dropdown-arrow');
    
    // Close other dropdowns
    document.querySelectorAll('.mobile-dropdown-content').forEach(content => {
      if (content !== dropdownContent) {
        content.classList.remove('active');
      }
    });
    
    document.querySelectorAll('.mobile-dropdown-arrow').forEach(arr => {
      if (arr !== arrow) {
        arr.classList.remove('active');
      }
    });
    
    // Toggle current dropdown
    dropdownContent.classList.toggle('active');
    arrow.classList.toggle('active');
  });
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    
    // Close all dropdowns
    document.querySelectorAll('.mobile-dropdown-content').forEach(content => {
      content.classList.remove('active');
    });
    
    document.querySelectorAll('.mobile-dropdown-arrow').forEach(arrow => {
      arrow.classList.remove('active');
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll to top functionality
const scrollToTopBtn = document.getElementById('scrollToTop');
const mainWrapper = document.querySelector('.main-wrapper');

mainWrapper.addEventListener('scroll', function() {
  if (mainWrapper.scrollTop > 300) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});

scrollToTopBtn.addEventListener('click', function() {
  mainWrapper.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Quick contact modal functionality
const quickContactBtn = document.getElementById('quickContactBtn');
const quickContactModal = document.getElementById('quickContactModal');
const modalClose = document.getElementById('modalClose');
const quickContactForm = document.getElementById('quickContactForm');
const quickFormMessage = document.getElementById('quickFormMessage');

quickContactBtn.addEventListener('click', function() {
  quickContactModal.classList.toggle('active');
});

modalClose.addEventListener('click', function() {
  quickContactModal.classList.remove('active');
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  if (!quickContactModal.contains(e.target) && !quickContactBtn.contains(e.target)) {
    quickContactModal.classList.remove('active');
  }
});

// Quick contact form submission
quickContactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('quickName').value;
  const email = document.getElementById('quickEmail').value;
  const message = document.getElementById('quickMessage').value;
  
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

// Info modal content
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
        <li><strong>24/7 AOG Support:</strong> Round-the-clock aircraft-on-ground emergency response</li>
      </ul>
      
      <h3>Why Choose Our Aviation Services?</h3>
      <p>We maintain the highest industry standards with ISO 9001 certification and Part 145 repair station approval. Our state-of-the-art facilities and experienced team ensure minimal downtime and maximum safety for your operations.</p>
      
      <a href="#contact" class="info-modal-cta">Request a Service Quote</a>
    `
  },
  drones: {
    title: 'Drone Solutions',
    content: `
      <h3>Advanced UAV Operations</h3>
      <p>Transform your business with cutting-edge drone technology. Our drone solutions division offers comprehensive services from aerial surveying to custom UAV integration, helping you capture data and insights like never before.</p>
      
      <h3>Our Drone Services:</h3>
      <ul>
        <li><strong>Aerial Surveying & Mapping:</strong> High-resolution topographic surveys, 3D modeling, and photogrammetry</li>
        <li><strong>Infrastructure Inspection:</strong> Safe, efficient inspections of bridges, towers, power lines, and industrial facilities</li>
        <li><strong>Agricultural Monitoring:</strong> Crop health analysis, precision agriculture, and yield optimization</li>
        <li><strong>Thermal Imaging:</strong> Energy audits, leak detection, and predictive maintenance</li>
        <li><strong>Custom UAV Integration:</strong> Tailored drone solutions with specialized sensors and payloads</li>
        <li><strong>Drone-as-a-Service:</strong> On-demand aerial data collection without the overhead of owning equipment</li>
      </ul>
      
      <h3>Technology & Expertise</h3>
      <p>We operate a diverse fleet of commercial drones equipped with the latest sensors, cameras, and LiDAR systems. Our FAA Part 107 certified pilots have completed thousands of successful missions across multiple industries.</p>
      
      <a href="#contact" class="info-modal-cta">Start Your Drone Project</a>
    `
  },
  training: {
    title: 'Training & Certification',
    content: `
      <h3>Industry-Leading Education Programs</h3>
      <p>Elevate your team's skills with our comprehensive training programs. From drone pilot certification to advanced aviation maintenance courses, we offer the education you need to succeed in the aerospace industry.</p>
      
      <h3>Training Programs:</h3>
      <ul>
        <li><strong>Part 107 Drone Pilot Certification:</strong> Complete preparation for FAA remote pilot certification exam</li>
        <li><strong>Advanced Drone Operations:</strong> Night operations, complex missions, and emergency procedures</li>
        <li><strong>Aircraft Maintenance Training:</strong> A&P mechanic prep courses and specialized systems training</li>
        <li><strong>Avionics Technician Courses:</strong> Modern avionics installation and troubleshooting</li>
        <li><strong>Safety Management Systems:</strong> SMS implementation and risk management</li>
        <li><strong>Corporate Training:</strong> Custom programs tailored to your organization's needs</li>
      </ul>
      
      <h3>World-Class Instruction</h3>
      <p>Our instructors bring real-world experience and hold multiple industry certifications. We offer flexible learning options including in-person classes, online courses, and hands-on workshops at our modern training facility.</p>
      
      <h3>Certification Support</h3>
      <p>We guide you through the entire certification process, from initial application to exam preparation. Our students enjoy a 95% first-time pass rate on FAA exams.</p>
      
      <a href="#contact" class="info-modal-cta">Explore Training Options</a>
    `
  }
};

// Info modal functionality
const infoModalOverlay = document.getElementById('infoModalOverlay');
const infoModalTitle = document.getElementById('infoModalTitle');
const infoModalBody = document.getElementById('infoModalBody');
const infoModalClose = document.getElementById('infoModalClose');

function openInfoModal(type) {
  const content = modalContent[type];
  if (content) {
    infoModalTitle.textContent = content.title;
    infoModalBody.innerHTML = content.content;
    infoModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeInfoModal() {
  infoModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

infoModalClose.addEventListener('click', closeInfoModal);

infoModalOverlay.addEventListener('click', function(e) {
  if (e.target === infoModalOverlay) {
    closeInfoModal();
  }
});

// Keyboard support for closing modal with ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && infoModalOverlay.classList.contains('active')) {
    closeInfoModal();
  }
});

// Learn more button clicks
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    
    if (href === '#aviation') {
      openInfoModal('aviation');
    } else if (href === '#drone-ops') {
      openInfoModal('drones');
    } else if (href === '#training') {
      openInfoModal('training');
    }
  });
});

// Close info modal when clicking on CTA links inside modals
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('info-modal-cta')) {
    closeInfoModal();
  }
});
