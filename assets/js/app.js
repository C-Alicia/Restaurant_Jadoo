/* la bar de navigation change de couleur quand on scroll */

var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    nav.classList.add('bg-dark', 'shadow');
  }
  else{
    nav.classList.remove('bg-dark');
  }
})

