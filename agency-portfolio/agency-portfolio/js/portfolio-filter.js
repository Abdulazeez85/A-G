/* ============================================================
   portfolio-filter.js — Filter portfolio items by category
   ============================================================ */

(function(){
  function initFilter(){
    var filterBtns = document.querySelectorAll('.filter-btn');
    var items      = document.querySelectorAll('.portfolio-item[data-category]');
    if(!filterBtns.length || !items.length) return;

    filterBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        var cat = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');

        // Show/hide items
        items.forEach(function(item){
          var match = cat === 'all' || item.getAttribute('data-category') === cat;
          if(match){
            item.style.display = '';
            // re-trigger reveal
            item.classList.remove('revealed');
            setTimeout(function(){ item.classList.add('revealed'); }, 30);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initFilter);
  } else {
    initFilter();
  }
})();
