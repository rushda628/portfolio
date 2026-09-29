const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => {
  if(cursor){ cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; }
});
document.querySelectorAll('a').forEach(a=>{
  a.addEventListener('mouseenter',()=>{ if(cursor){cursor.style.width='28px';cursor.style.height='28px'}});
  a.addEventListener('mouseleave',()=>{ if(cursor){cursor.style.width='10px';cursor.style.height='10px'}});
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('img[data-title]').forEach(img=>{
  const swap=()=>{
    if(img.dataset.failed) return;
    img.dataset.failed='1';
    const d=document.createElement('div');
    d.className='img-fallback';
    d.innerHTML='<span>Project preview</span><b></b>';
    d.querySelector('b').textContent=img.dataset.title;
    img.replaceWith(d);
  };
  img.addEventListener('error',swap);
  if(img.complete && img.naturalWidth===0) swap();
});
