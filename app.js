const MenuBar = document.querySelector('#menu-icon');
const NavLinks = document.querySelector('#nav-links');

MenuBar.addEventListener('click',()=>{
    NavLinks.classList.toggle('show-ul')

    if(NavLinks.className=='show-ul'){
        document.querySelector('#icon').className='fa-solid fa-xmark'
    }else{
        document.querySelector('#icon').className='fa-solid fa-list'
    }
})