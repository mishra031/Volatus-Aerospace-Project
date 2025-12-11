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
  
  document.querySelectorAll('.btn-primary, .cta-button, .submit-btn').forEach(btn => {
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

{
  "persistence_enabled": false,
  "app_name": "Volatus Aerospace Demo",
  "edit_panel": {
    "hero_section": {
      "type": "label",
      "text": "Hero Section",
      "size": "large"
    },
    "hero_headline": {
      "type": "text_input",
      "label": "Hero Headline",
      "placeholder": "Enter hero headline"
    },
    "hero_subheadline": {
      "type": "text_input",
      "label": "Hero Subheadline",
      "placeholder": "Enter subheadline"
    },
    "about_section": {
      "type": "label",
      "text": "About Section",
      "size": "large"
    },
    "about_title": {
      "type": "text_input",
      "label": "About Title",
      "placeholder": "Enter about title"
    },
    "about_description": {
      "type": "text_input",
      "label": "About Description",
      "placeholder": "Enter about description"
    },
    "cta_section": {
      "type": "label",
      "text": "Call to Action",
      "size": "large"
    },
    "cta_headline": {
      "type": "text_input",
      "label": "CTA Headline",
      "placeholder": "Enter CTA headline"
    },
    "footer_section": {
      "type": "label",
      "text": "Footer",
      "size": "large"
    },
    "company_description": {
      "type": "text_input",
      "label": "Company Description",
      "placeholder": "Enter company description"
    },
    "copyright_text": {
      "type": "text_input",
      "label": "Copyright Text",
      "placeholder": "Enter copyright text"
    }
  }
}
