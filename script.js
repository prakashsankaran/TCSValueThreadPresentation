function initPresentation() {
    // 1. Tilt Effect for multiple slide containers
    const containers = document.querySelectorAll('.slide-tilt');
    
    containers.forEach(container => {
        container.addEventListener('mousemove', (e) => {
            // Only apply effect if the screen is large enough
            if (window.innerWidth < 768) return;
            
            // Get bounding rect for relative mouse position
            const rect = container.getBoundingClientRect();
            
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const xAxis = (centerX - e.clientX) / 40;
            const yAxis = (centerY - e.clientY) / 40;
            
            container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        container.addEventListener('mouseleave', () => {
            container.style.transform = `rotateY(0deg) rotateX(0deg)`;
            container.style.transition = `transform 0.5s ease`;
        });
        
        container.addEventListener('mouseenter', () => {
            setTimeout(() => {
                container.style.transition = `none`;
            }, 500);
        });
    });

    // 2. Intersection Observer for Scroll Animations
    // This will fade up the content when a slide snaps into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'none'; // reset animation
                entry.target.offsetHeight; /* trigger reflow */
                entry.target.style.animation = 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            }
        });
    }, { 
        threshold: 0.3 // Trigger when 30% of the slide content is visible 
    });

    // Ensure all slide content is fully visible by default
    document.querySelectorAll('.slide-content').forEach(content => {
        content.style.opacity = '1';
    });

    // Add slide numbers to all slide containers dynamically
    const slideContainers = document.querySelectorAll('.slide-container');
    const totalSlides = slideContainers.length;
    slideContainers.forEach((container, index) => {
        if (container.querySelector('.slide-number')) return;
        const slideNumDiv = document.createElement('div');
        slideNumDiv.className = 'slide-number';
        slideNumDiv.textContent = `${index + 1}/${totalSlides}`;
        slideNumDiv.style.cssText = "position: absolute; bottom: 1.5rem; right: 2.5rem; font-size: 0.75rem; font-weight: 800; color: #ffffff !important; background: rgba(15, 23, 42, 0.8) !important; border: 1px solid rgba(255, 255, 255, 0.15) !important; padding: 0.35rem 0.75rem; border-radius: 99px; z-index: 9999 !important; display: block !important; visibility: visible !important; opacity: 1 !important; pointer-events: none; font-family: sans-serif;";
        slideNumDiv.style.cssText = "position: absolute; bottom: 1.5rem; right: 2.5rem; font-size: 0.75rem; font-weight: 800; color: #ffffff !important; background: rgba(15, 23, 42, 0.8) !important; border: 1px solid rgba(255, 255, 255, 0.15) !important; padding: 0.35rem 0.75rem; border-radius: 99px; z-index: 9999 !important; display: block !important; visibility: visible !important; opacity: 1 !important; pointer-events: none; font-family: sans-serif;";
        container.appendChild(slideNumDiv);
    });
    
    // Automatically select first fact in bubble infographic on load
    if (typeof window.showFactDetail === 'function') {
        window.showFactDetail(0);
    }
}

// Execute immediately or wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresentation);
} else {
    initPresentation();
}

// Carousel Navigation Function
window.scrollCarousel = function(direction) {
    const carousel = document.getElementById('cardsCarousel');
    // Scroll by width of one card + gap roughly
    const scrollAmount = 370 * direction; 
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

window.scrollFactsCarousel = function(direction) {
    const track = document.getElementById('factsCarouselTrack');
    if (track) {
        track.scrollBy({ left: 300 * direction, behavior: 'smooth' });
    }
};

// SLIDE 8 TRUE HORIZONTAL CAROUSEL CONTROLLER
window.currentSlide8CardIdx = 0;
const totalSlide8Cards = 4;

window.goToSlide8Card = function(cardIdx) {
  window.currentSlide8CardIdx = cardIdx;
  const track = document.getElementById('slide8-slider-track');
  if (track) {
    track.style.transform = `translateX(-${cardIdx * 25}%)`;
  }
  document.querySelectorAll('.iv-carousel-tab').forEach((tab, i) => {
    if (i === cardIdx) {
      tab.classList.add('active-carousel-tab');
    } else {
      tab.classList.remove('active-carousel-tab');
    }
  });
};

window.navSlide8Carousel = function(direction) {
  let nextIdx = (window.currentSlide8CardIdx + direction + totalSlide8Cards) % totalSlide8Cards;
  window.goToSlide8Card(nextIdx);
};

window.prevSlide8Card = function() { window.navSlide8Carousel(-1); };
window.nextSlide8Card = function() { window.navSlide8Carousel(1); };

// POPUP MODAL FOR SLIDE 8 COMPONENTS
window.openSlide8Modal = function(title, subtitle, iconClass, colorHex, detailsList) {
  const modal = document.getElementById('iv-detail-modal');
  const modalBody = document.getElementById('iv-modal-body');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: ${colorHex}22; border: 2px solid ${colorHex}; color: ${colorHex}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; box-shadow: 0 0 20px ${colorHex}55;">
        <i class="${iconClass}"></i>
      </div>
      <div>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 800; color: #ffffff; margin: 0;">${title}</h3>
        <p style="font-size: 0.72rem; color: #94a3b8; margin: 0.2rem 0 0 0;">${subtitle}</p>
      </div>
    </div>
    <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 1rem; margin-top: 0.8rem;">
      <div style="font-size: 0.72rem; font-weight: 800; color: ${colorHex}; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem;">Key Agent Capabilities &amp; Value Delivered</div>
      <ul style="margin: 0; padding-left: 1.2rem; color: #cbd5e1; font-size: 0.74rem; display: flex; flex-direction: column; gap: 0.4rem;">
        ${detailsList.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;

  modal.classList.add('open');
};

window.closeSlide8Modal = function(event) {
  const modal = document.getElementById('iv-detail-modal');
  if (modal) modal.classList.remove('open');
};

// END-TO-END OUTCOME FULL STEPPER CAROUSEL MODAL CONTROLLER
window.endToEndStepsData = [
  { step: 1, name: "IDEA / NEED", phase: "DISCOVER", color: "#60a5fa", hex: "#3b82f6", icon: "fa-solid fa-lightbulb", desc: "Initial business concept, problem framing, and raw stakeholder intent captured from fragmented signals." },
  { step: 2, name: "UNDERSTOOD & APPROVED", phase: "ALIGN", color: "#38bdf8", hex: "#06b6d4", icon: "fa-solid fa-users", desc: "Framed business intent validated against enterprise architecture with formal stakeholder alignment and sign-off." },
  { step: 3, name: "STRUCTURED REQUIREMENTS", phase: "STRUCTURE", color: "#34d399", hex: "#10b981", icon: "fa-solid fa-box-archive", desc: "Machine-readable specification control, canonical schema mapping, and unambiguous requirement baseline." },
  { step: 4, name: "DELIVERY & TEST", phase: "BUILD", color: "#fbbf24", hex: "#f59e0b", icon: "fa-solid fa-gears", desc: "AI-assisted code synthesis, risk-based automated testing execution, and continuous integration verification." },
  { step: 5, name: "ACCEPTED", phase: "ACCEPT", color: "#c084fc", hex: "#8b5cf6", icon: "fa-solid fa-circle-check", desc: "Tamper-evident audit ledger verification, automated conformance checks, and formal release acceptance." },
  { step: 6, name: "MEASURED VALUE", phase: "VALUE", color: "#60a5fa", hex: "#3b82f6", icon: "fa-solid fa-chart-line", desc: "Quantified production ROI, operational velocity improvement tracking, and post-deployment impact measurement." }
];

window.currentEndToEndStepIdx = 0;

window.openEndToEndCarouselModal = function(stepIdx) {
  if (stepIdx !== undefined) window.currentEndToEndStepIdx = stepIdx;
  window.renderEndToEndCarouselModal();
  const modal = document.getElementById('iv-detail-modal');
  if (modal) modal.classList.add('open');
};

window.renderEndToEndCarouselModal = function() {
  const modalBody = document.getElementById('iv-modal-body');
  if (!modalBody) return;

  const data = window.endToEndStepsData[window.currentEndToEndStepIdx];

  modalBody.innerHTML = `
    <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.8rem; margin-bottom: 1rem;">
      <div style="font-size: 0.7rem; font-weight: 800; color: ${data.color}; letter-spacing: 0.1em; text-transform: uppercase;">
        End-to-End Outcome Stepper — Carousel Mode
      </div>
      <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.2rem;">
        Step ${data.step} of 6: <span style="color: #ffffff; font-weight: 700;">${data.phase} PHASE</span>
      </div>
    </div>

    <!-- CAROUSEL ITEM DISPLAY -->
    <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid ${data.hex}; border-radius: 16px; padding: 1.2rem; display: flex; flex-direction: column; gap: 0.8rem; box-shadow: 0 0 30px ${data.hex}44; transition: all 0.3s ease;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: ${data.hex}25; color: ${data.color}; border: 2px solid ${data.hex}; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 0 20px ${data.hex}66;">
            <i class="${data.icon}"></i>
          </div>
          <div>
            <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; color: ${data.color}; margin: 0;">${data.step}. ${data.name}</h3>
            <span style="font-size: 0.65rem; font-weight: 700; color: #94a3b8;">${data.phase} STAGE</span>
          </div>
        </div>
        <div style="background: ${data.hex}22; color: ${data.color}; border: 1px solid ${data.hex}; border-radius: 20px; padding: 0.3rem 0.8rem; font-size: 0.7rem; font-weight: 800;">
          Step 0${data.step}
        </div>
      </div>
      <p style="font-size: 0.82rem; color: #e2e8f0; line-height: 1.4; margin: 0; background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 10px; border-left: 3px solid ${data.hex};">
        ${data.desc}
      </p>
    </div>

    <!-- CAROUSEL NAVIGATION BUTTONS -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.2rem;">
      <button onclick="navEndToEndModal(-1)" style="background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-chevron-left"></i> Previous Step
      </button>

      <!-- STEP DOTS -->
      <div style="display: flex; align-items: center; gap: 0.4rem;">
        ${window.endToEndStepsData.map((item, idx) => `
          <div onclick="openEndToEndCarouselModal(${idx})" style="width: ${idx === window.currentEndToEndStepIdx ? '24px' : '10px'}; height: 10px; border-radius: 5px; background: ${idx === window.currentEndToEndStepIdx ? item.hex : 'rgba(255,255,255,0.2)'}; cursor: pointer; transition: all 0.3s ease;" title="Jump to ${item.name}"></div>
        `).join('')}
      </div>

      <button onclick="navEndToEndModal(1)" style="background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
        Next Step <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  `;
};

window.navEndToEndModal = function(direction) {
  const total = window.endToEndStepsData.length;
  window.currentEndToEndStepIdx = (window.currentEndToEndStepIdx + direction + total) % total;
  window.renderEndToEndCarouselModal();
};

// 5 FACTS INTERACTIVE BUBBLE INFOGRAPHIC CONTROLLER
window.activeFactIdx = 0;
window.factsData = [
  {
    num: "01",
    stat: "62%",
    title: "Information is Fragmented",
    color: "#60a5fa",
    hex: "#3b82f6",
    desc: "of employees spend too much time searching for information. 57% of time goes to communication, 43% to creating.",
    takeaway: "Meaning is distributed long before a requirement is written.",
    citation: "Microsoft Work Trend Index 2023"
  },
  {
    num: "02",
    stat: "67%",
    title: "Ambiguity Still Dominates",
    color: "#c084fc",
    hex: "#8b5cf6",
    desc: "of practitioners report ambiguity in requirements specification. 79% also cite incompleteness or inconsistency.",
    takeaway: "We digitised requirements. We did not remove interpretation.",
    citation: "Franch et al., Requirements Engineering 2023"
  },
  {
    num: "03",
    stat: "77",
    title: "Traceability Starts Too Late",
    color: "#2dd4bf",
    hex: "#10b981",
    desc: "reviewed studies, 1992–2022. Pre-requirement traceability is far less researched than downstream traceability.",
    takeaway: "We trace Requirement &rarr; Code &rarr; Test. Not Conversation &rarr; Decision &rarr; Requirement.",
    citation: "Mucha, Kaufmann & Riehle, RE 2024"
  },
  {
    num: "04",
    stat: "55+14",
    title: "Tracing is a Human Chore",
    color: "#fb923c",
    hex: "#f59e0b",
    desc: "practitioners surveyed and interviewed. Tracing is manual, effortful, and the links go out of date.",
    takeaway: "The links may exist. The meaning behind them decays.",
    citation: "Ruiz, Hu & Dalpiaz, RE 2023"
  },
  {
    num: "05",
    stat: "≈5,000",
    title: "AI Cost of Being Wrong",
    color: "#4ade80",
    hex: "#22c55e",
    desc: "technology professionals studied. AI acts as an amplifier of an organisation's strengths and weaknesses.",
    takeaway: "If intent is wrong, AI builds the wrong thing faster.",
    citation: "Google DORA 2025"
  }
];

window.showFactDetail = function(idx) {
  window.activeFactIdx = idx;
  
  // Highlight active bubble
  document.querySelectorAll('.satellite-bubble').forEach((bubble, i) => {
    if (i === idx) {
      bubble.classList.add('active-bubble');
    } else {
      bubble.classList.remove('active-bubble');
    }
  });

  const detailPanel = document.getElementById('fact-detail-panel');
  if (!detailPanel) return;

  const data = window.factsData[idx];

  // Fade out, change content, fade in
  detailPanel.style.opacity = '0';
  detailPanel.style.transform = 'translateY(10px)';
  
  setTimeout(() => {
    detailPanel.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
          <span style="background: ${data.hex}22; border: 1px solid ${data.hex}; color: ${data.color}; font-family: var(--font-heading); font-size: 0.8rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 6px; letter-spacing: 0.05em;">${data.num}</span>
          <span style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 800; letter-spacing: 0.1em; color: #94a3b8; text-transform: uppercase;">${data.title}</span>
      </div>
      
      <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;">
          <div style="font-family: var(--font-heading); font-size: 4rem; font-weight: 800; color: ${data.color}; line-height: 1; text-shadow: 0 0 25px ${data.hex}44;">${data.stat}</div>
          <div style="font-size: 1.1rem; color: #cbd5e1; line-height: 1.4; font-weight: 300;">
              ${data.desc}
          </div>
      </div>
      
      <div style="margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem;">
          <div style="font-size: 0.7rem; font-weight: 800; letter-spacing: 0.12em; color: ${data.color}; margin-bottom: 0.5rem; text-transform: uppercase;">Takeaway</div>
          <p style="font-size: 1.05rem; color: #f8fafc; font-weight: 400; line-height: 1.4; margin: 0;">
              "${data.takeaway}"
          </p>
      </div>
      
      <div style="font-size: 0.82rem; color: #94a3b8; font-style: italic; margin-top: 1.5rem;">
          Source: ${data.citation}
      </div>
    `;
    detailPanel.style.opacity = '1';
    detailPanel.style.transform = 'translateY(0)';
  }, 150);
};

// ACCORDION CONTROLLER FOR APPROACH SLIDE
window.activateAccordionItem = function(element) {
  const parent = element.parentElement;
  if (!parent) return;
  parent.querySelectorAll('.accordion-item').forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
};

// SLIDE 11 INTERNAL CAROUSEL CONTROLLER
window.switchS11Slide = function(index) {
  const track = document.getElementById('s11-carousel-track');
  if (track) {
    track.style.transform = `translateX(-${index * 50}%)`;
  }
  for (let i = 0; i < 2; i++) {
    const btn = document.getElementById(`s11-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};




// SLIDE 12 INTERNAL CAROUSEL CONTROLLER
window.switchS12Slide = function(index) {
  const track = document.getElementById('s12-carousel-track');
  if (track) {
    track.style.transform = `translateX(-${index * 33.3333}%)`;
  }
  for (let i = 0; i < 3; i++) {
    const btn = document.getElementById(`s12-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};


// SLIDE 13 INTERNAL CAROUSEL CONTROLLER
window.switchS13Slide = function(index) {
  const track = document.getElementById('s13-carousel-track');
  if (track) {
    track.style.transform = `translateX(-${index * 33.3333}%)`;
  }
  for (let i = 0; i < 3; i++) {
    const btn = document.getElementById(`s13-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};


// SLIDE 12 INTERNAL CAROUSEL CONTROLLER
window.switchS12Slide = function(index) {
  const track = document.getElementById('s12-carousel-track');
  if (track) {
    track.style.transform = `translateX(-${index * 33.3333}%)`;
  }
  for (let i = 0; i < 3; i++) {
    const btn = document.getElementById(`s12-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};


// SLIDE 12 INTERNAL CAROUSEL CONTROLLER
window.switchS12Slide = function(index) {
  const track = document.getElementById('s12-carousel-track');
  if (track) {
    track.style.transform = `translateX(-${index * 33.3333}%)`;
  }
  for (let i = 0; i < 3; i++) {
    const btn = document.getElementById(`s12-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};


// SLIDE 13 INTERNAL CAROUSEL CONTROLLER
window.switchS13Slide = function(index) {
  const track = document.getElementById('s13-carousel-track');
  if (track) {
    track.style.transform = `translateX(-${index * 33.3333}%)`;
  }
  for (let i = 0; i < 3; i++) {
    const btn = document.getElementById(`s13-btn-${i}`);
    if (btn) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  }
};
