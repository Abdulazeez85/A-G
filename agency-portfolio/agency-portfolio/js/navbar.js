/* ============================================================
   navbar.js — Sticky nav, hamburger, active link
   ============================================================ */

(function(){
  const navbar   = document.getElementById('navbar');
  const hamburger= document.querySelector('.hamburger');
  const mobileNav= document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');

  // Scroll → add .scrolled class
  function onScroll(){
    if(window.scrollY > 30){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Hamburger toggle
  if(hamburger && mobileNav){
    hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link based on current page
  var page = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function(a){
    var href = a.getAttribute('href') || '';
    if(href === page || (page === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();
