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
