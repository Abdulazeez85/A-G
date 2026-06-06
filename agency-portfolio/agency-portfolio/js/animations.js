/* ============================================================
   animations.js — Intersection Observer scroll reveals
   ============================================================ */

(function(){
  var selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

  function initReveal(){
    var els = document.querySelectorAll(selectors);
    if(!els.length) return;

    if(!('IntersectionObserver' in window)){
      // Fallback: just show everything
      els.forEach(function(el){ el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function(el){ observer.observe(el); });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
