(function(){
  try{ if(localStorage.getItem('oxlab-lang')==='ko') document.body.classList.add('ko'); }catch(e){}
  document.documentElement.lang = document.body.classList.contains('ko') ? 'ko' : 'en';
  window.toggleLang=function(){
    document.body.classList.toggle('ko');
    var ko=document.body.classList.contains('ko');
    document.documentElement.lang = ko ? 'ko' : 'en';
    try{ localStorage.setItem('oxlab-lang', ko ? 'ko' : 'en'); }catch(e){}
  };
  var path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(path==='') path='index.html';
  var isBlog = (path==='blog.html') || (location.pathname.indexOf('/blog/')>-1);
  document.querySelectorAll('nav a[data-page]').forEach(function(a){
    var dp=a.getAttribute('data-page');
    if(dp===path || (isBlog && dp==='blog.html')) a.classList.add('active');
  });
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();

  // Click-to-zoom lightbox for post images inside .diagram-box
  var overlay=null;
  function closeLightbox(){
    if(overlay){ overlay.remove(); overlay=null; }
  }
  function openLightbox(src, alt){
    closeLightbox();
    overlay=document.createElement('div');
    overlay.className='img-lightbox';
    var img=document.createElement('img');
    img.src=src; img.alt=alt||'';
    overlay.appendChild(img);
    overlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ closeLightbox(); document.removeEventListener('keydown', esc); } });
    document.body.appendChild(overlay);
  }
  document.querySelectorAll('.diagram-box img').forEach(function(img){
    img.classList.add('zoomable');
    img.addEventListener('click', function(){
      if(overlay){ closeLightbox(); } else { openLightbox(img.src, img.alt); }
    });
  });

  // Blog post view counter (counterapi.dev, no signup required)
  var vc = document.querySelector('.viewcount[data-slug]');
  if (vc) {
    var slug = vc.getAttribute('data-slug') || 'post';
    var cacheKey = 'oxlab-vc-' + slug;

    // Show last-known count instantly (no network wait) while a fresh count loads in the background
    try {
      var cached = localStorage.getItem(cacheKey);
      if (cached) vc.querySelectorAll('.vc-count').forEach(function(el){ el.textContent = cached; });
    } catch(e){}

    // Abort the request if it hangs, so the counter never blocks the page
    var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timeout = setTimeout(function(){ if (ctrl) ctrl.abort(); }, 4000);

    fetch('https://api.counterapi.dev/v1/hioelab-blog/' + slug + '/up', ctrl ? { signal: ctrl.signal } : {})
      .then(function(r){ return r.json(); })
      .then(function(d){
        clearTimeout(timeout);
        if (d && typeof d.count === 'number') {
          var n = d.count.toLocaleString();
          vc.querySelectorAll('.vc-count').forEach(function(el){ el.textContent = n; });
          try { localStorage.setItem(cacheKey, n); } catch(e){}
        }
      })
      .catch(function(){ clearTimeout(timeout); if (!cached) vc.style.display = 'none'; });
  }
})();
