/* ============================================================
   main.js — FAQ accordion, form handling, misc interactions
   ============================================================ */

(function(){
  /* ── FAQ Accordion ─────────────────────────────────────── */
  function initFAQ(){
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function(item){
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if(!q || !a) return;
      q.addEventListener('click', function(){
        var isOpen = item.classList.contains('open');
        // Close all
        items.forEach(function(i){
          i.classList.remove('open');
          var ia = i.querySelector('.faq-a');
          if(ia) ia.style.maxHeight = null;
        });
        // Open clicked if it was closed
        if(!isOpen){
          item.classList.add('open');
          a.style.maxHeight = a.scrollHeight + 'px';
        }
      });
    });
  }

  /* ── Contact Form ──────────────────────────────────────── */
  function initContactForm(){
    var form = document.getElementById('contactForm');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      // Simulate send delay
      setTimeout(function(){
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'linear-gradient(135deg,#059669,#10B981)';
        form.reset();
        setTimeout(function(){
          btn.textContent = orig;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  /* ── Smooth scroll for anchor links ───────────────────── */
  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var target = document.querySelector(a.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  }

  /* ── WhatsApp number helper ────────────────────────────── */
  // Replace with real number in production
  var WA_NUMBER = '2348000000000';
  document.querySelectorAll('[data-wa]').forEach(function(el){
    var msg = encodeURIComponent(el.getAttribute('data-wa') || 'Hello, I am interested in your web design services.');
    el.href = 'https://wa.me/' + WA_NUMBER + '?text=' + msg;
  });

  /* ── Init ──────────────────────────────────────────────── */
  function init(){
    initFAQ();
    initContactForm();
    initSmoothScroll();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
