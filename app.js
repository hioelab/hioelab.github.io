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

  // Research card detail modal
  var rmodal = document.getElementById('rmodal');
  if (rmodal) {
    var rmTop = rmodal.querySelector('.rmodal-top');
    var rmNum = rmodal.querySelector('.rmodal-num');
    var rmTitle = rmodal.querySelector('.rmodal-title');
    var rmBody = rmodal.querySelector('.rmodal-body');
    var rmClose = rmodal.querySelector('.rmodal-close');
    var lastFocused = null;

    function openRModal(card){
      var num = card.getAttribute('data-rcard') || '';
      var h3 = card.querySelector('h3');
      var tpl = card.querySelector('template');
      rmNum.textContent = num;
      rmTitle.innerHTML = h3 ? h3.innerHTML : '';
      rmBody.innerHTML = tpl ? tpl.innerHTML : '';
      lastFocused = document.activeElement;
      rmodal.classList.add('open');
      rmodal.setAttribute('aria-hidden', 'false');
      rmClose.focus();
    }
    function closeRModal(){
      rmodal.classList.remove('open');
      rmodal.setAttribute('aria-hidden', 'true');
      if (lastFocused) lastFocused.focus();
    }
    document.querySelectorAll('.rcard[data-rcard]').forEach(function(card){
      card.addEventListener('click', function(){ openRModal(card); });
    });
    rmClose.addEventListener('click', closeRModal);
    rmodal.addEventListener('click', function(e){ if (e.target === rmodal) closeRModal(); });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && rmodal.classList.contains('open')) closeRModal();
    });
  }

  // Blog post view counter (abacus.jasoncameron.dev, no signup required)
  // Display is never blocked on the network: we show the last-known count from
  // localStorage instantly, and only ever wait on the network the very first
  // time a given browser opens the post. The hit itself is still recorded
  // every visit in the background.
  var vc = document.querySelector('.viewcount[data-slug]');
  if (vc) {
    var slug = vc.getAttribute('data-slug') || 'post';
    var cacheKey = 'oxlab-vc-' + slug;
    var cached = null;
    try { cached = localStorage.getItem(cacheKey); } catch(e){}

    if (cached) {
      vc.querySelectorAll('.vc-count').forEach(function(el){ el.textContent = cached; });
    } else {
      vc.style.visibility = 'hidden'; // avoid flashing a "–" placeholder
    }

    fetch('https://abacus.jasoncameron.dev/hit/hioelab-blog/' + slug, { keepalive: true })
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (d && typeof d.value === 'number') {
          var n = d.value.toLocaleString();
          try { localStorage.setItem(cacheKey, n); } catch(e){}
          if (!cached) {
            vc.querySelectorAll('.vc-count').forEach(function(el){ el.textContent = n; });
            vc.style.visibility = 'visible';
          }
        }
      })
      .catch(function(){ if (!cached) vc.style.display = 'none'; });
  }
})();
