const dots = document.querySelector('.dots')
dots.addEventListener('click', e => {
  const target = e.target;
  if (!target.matches('.dot')) {
	  return;
  }
  
  const index = Array.from(dots.children).indexOf(target);
  const selector = `.projectBox:nth-child(${index + 1})`;
  const box = document.querySelector(selector)
  box.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
})