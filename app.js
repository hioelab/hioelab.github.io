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
    var rmSubtitle = rmodal.querySelector('.rmodal-subtitle');
    var rmBody = rmodal.querySelector('.rmodal-body');
    var rmClose = rmodal.querySelector('.rmodal-close');
    var lastFocused = null;

    function openRModal(card){
      var num = card.getAttribute('data-rcard') || '';
      var h3 = card.querySelector('h3');
      var enSpan = h3 ? h3.querySelector('.lang-en') : null;
      var tpl = card.querySelector('template');
      rmNum.textContent = num;
      rmTitle.innerHTML = h3 ? h3.innerHTML : '';
      rmSubtitle.textContent = enSpan ? enSpan.textContent : '';
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
  // On a local preview (localhost/127.0.0.1/file://), we read the count
  // instead of hitting it, so checking a post locally never inflates the
  // public view count.
  var vc = document.querySelector('.viewcount[data-slug]');
  if (vc) {
    var isLocalPreview = /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$/.test(location.hostname) || location.protocol === 'file:';
    var slug = vc.getAttribute('data-slug') || 'post';
    var cacheKey = 'oxlab-vc-' + slug;
    var cached = null;
    try { cached = localStorage.getItem(cacheKey); } catch(e){}

    if (cached) {
      vc.querySelectorAll('.vc-count').forEach(function(el){ el.textContent = cached; });
    } else {
      vc.style.visibility = 'hidden'; // avoid flashing a "–" placeholder
    }

    fetch('https://abacus.jasoncameron.dev/' + (isLocalPreview ? 'get' : 'hit') + '/hioelab-blog/' + slug, { keepalive: true })
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

  // Blog list pagination (client-side: the full list is still rendered by
  // Jekyll/Liquid as before, this just shows/hides items in pages so search
  // engines and no-JS visitors still see the complete list).
  var bloglist = document.getElementById('bloglist');
  if (bloglist) {
    var blogItems = Array.prototype.slice.call(bloglist.querySelectorAll('.blogitem'));
    var pageSize = parseInt(bloglist.getAttribute('data-page-size'), 10) || 5;
    var totalPages = Math.max(1, Math.ceil(blogItems.length / pageSize));
    var pager = document.getElementById('blogpager');

    var scrollToListTop = function () {
      var top = bloglist.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: top, behavior: 'smooth' });
    };

    var renderPager = function (current) {
      if (!pager) return;
      pager.innerHTML = '';
      if (totalPages <= 1) return;

      var prev = document.createElement('button');
      prev.type = 'button';
      prev.className = 'pg-nav';
      prev.innerHTML = '<span class="lang-en">Prev</span><span class="lang-ko">이전</span>';
      prev.disabled = current === 1;
      prev.addEventListener('click', function () { showPage(current - 1); scrollToListTop(); });
      pager.appendChild(prev);

      for (var i = 1; i <= totalPages; i++) {
        (function (pageNum) {
          var b = document.createElement('button');
          b.type = 'button';
          b.textContent = pageNum;
          if (pageNum === current) b.className = 'active';
          b.addEventListener('click', function () { showPage(pageNum); scrollToListTop(); });
          pager.appendChild(b);
        })(i);
      }

      var next = document.createElement('button');
      next.type = 'button';
      next.className = 'pg-nav';
      next.innerHTML = '<span class="lang-en">Next</span><span class="lang-ko">다음</span>';
      next.disabled = current === totalPages;
      next.addEventListener('click', function () { showPage(current + 1); scrollToListTop(); });
      pager.appendChild(next);
    };

    var showPage = function (p) {
      p = Math.min(Math.max(p, 1), totalPages);
      blogItems.forEach(function (el, i) {
        el.hidden = !(i >= (p - 1) * pageSize && i < p * pageSize);
      });
      renderPager(p);
    };

    showPage(1);
  }
})();
