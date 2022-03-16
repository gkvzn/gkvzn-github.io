const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav =document.querySelector('nav ul');
    const navlinks = document.querySelectorAll('nav ul li');
    //toggle links
    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-action');

    });
    //ANIMATE LINKS
    navlinks.forEach((link, index)=> {
        link.style.animation = 'navlinkfade 0.5s ease forwards ${index / 7}s';
        console.log(index / 7);

    });
}

navSlide();