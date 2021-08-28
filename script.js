


const NavigationSlide = ()=> {
  const Mobile = document.querySelector('.Mobile');
  const Navigation = document.querySelector('.NavLinks');
  const NavLinks = document.querySelectorAll('.NavLinks li');
  const Moving = document.querySelector('.Moving');
  const wrap = document.querySelector('.wrap');
  const container = document.querySelector('#container');
  const ContactMoving = document.querySelector('.ContactMoving');
  const aboutsec = document.querySelector('.aboutsec')


  Mobile.addEventListener('click',() => {
    Navigation.classList.toggle('Navigation-active');

    if(Moving){
      Moving.classList.toggle('Darkbackground');
      wrap.classList.toggle('Darkbackground');
    }if(container){
     container.classList.toggle('Darkbackground');
    }if(ContactMoving){
      ContactMoving.classList.toggle('Darkbackground');
    }if(aboutsec){
      aboutsec.classList.toggle('Darkbackground');
    }

    NavLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.getElementsByClassName.animation = `NavLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
      }
    });
   
    Mobile.classList.toggle('toggle');
    

  }); 
  

}
  
  NavigationSlide();

