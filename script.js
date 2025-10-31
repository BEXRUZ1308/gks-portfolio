// typing effect
const typedEl = document.getElementById('typed');
const phrases = ['Aspiring Global Scholar', 'Proven Discipline and Resilience', 'Committed to Korea Study Plan', 'High-Achieving Athlete'];
let pIndex = 0, cIndex = 0, forward = true;

function typeLoop(){
  const current = phrases[pIndex];
  if(forward){
    cIndex++;
    if(cIndex > current.length){ forward = false; setTimeout(typeLoop, 900); return; }
  } else {
    cIndex--;
    if(cIndex < 0){ forward = true; pIndex = (pIndex+1) % phrases.length; setTimeout(typeLoop, 300); return; }
  }
  typedEl.textContent = current.slice(0, cIndex);
  setTimeout(typeLoop, forward ? 70 : 40);
}
typeLoop();

// header background on scroll & mobile menu
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 50 ? 'linear-gradient(180deg, rgba(2,15,24,0.86), rgba(2,15,24,0.9))' : 'linear-gradient(180deg, rgba(1,8,16,0.2), rgba(1,8,16,0.05))';
});

// SKILLS bo'limiga oid qismlar Olib Tashlandi

// project modal
const projCards = document.querySelectorAll('.proj-card');
const modal = document.getElementById('proj-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc'); 
const modalLink = document.getElementById('modal-link');
const modalClose = document.getElementById('modal-close');

projCards.forEach(card=>{
  card.addEventListener('click', ()=>{
    modalTitle.textContent = card.dataset.title;
    // data-desc dan olingan matnni HTML (innerHTML) sifatida o'rnatish
    modalDesc.innerHTML = card.dataset.desc; 
    modalLink.href = card.dataset.link || '#';
    modal.setAttribute('aria-hidden', 'false');
  });
  card.addEventListener('keypress', (e)=>{ if(e.key==='Enter') card.click(); });
});
modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click', (e)=> { if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

// year
document.getElementById('year').textContent = new Date().getFullYear();

// small mobile menu
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav ul');
  if(nav.style.display === 'flex'){ nav.style.display = 'none'; menuToggle.textContent = '☰'; }
  else { nav.style.display = 'flex'; menuToggle.textContent = '✕'; nav.style.flexDirection = 'column'; nav.style.gap = '12px'; }
});