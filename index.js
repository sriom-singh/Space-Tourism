


const navButton = document.querySelector('.mobile-nav-toggle');
const nav = document.getElementById('primary-navigation')

navButton.addEventListener('click',openNavigation);

function openNavigation(){
    const visibilty = nav.getAttribute('data-visible')
    if(visibilty=== "false"){
        nav.setAttribute("data-visible",true);
        navButton.setAttribute("aria-expanded",true)
    }
    else {
        nav.setAttribute("data-visible",false);
        navButton.setAttribute("aria-expanded",false)
    }
    console.log(visibilty)
}

