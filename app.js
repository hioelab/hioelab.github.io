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
  document.querySelectorAll('nav a[data-page]').forEach(function(a){
    if(a.getAttribute('data-page')===path) a.classList.add('active');
  });
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
})();
