nav=document.querySelector('.navbar');
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 0 ){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
})