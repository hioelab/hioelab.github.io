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
})();
