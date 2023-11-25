import user from "./data.json" assert { type: 'json' };


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
 
}

// DESTINATION PAGE

const moon = document.getElementById('moon')
const mars = document.getElementById('mars')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')


mars.addEventListener('click',()=>{
    mars.setAttribute("aria-selected",true)
    moon.setAttribute("aria-selected",false)
    titan.setAttribute("aria-selected",false)
    europa.setAttribute("aria-selected",false)
   
    setDataForPlanets(1)
});
moon.addEventListener('click',()=>{
    mars.setAttribute("aria-selected",false)
    moon.setAttribute("aria-selected",true)
    titan.setAttribute("aria-selected",false)
    europa.setAttribute("aria-selected",false)

    setDataForPlanets(0)
});
europa.addEventListener('click',()=>{
    mars.setAttribute("aria-selected",false)
    moon.setAttribute("aria-selected",false)
    titan.setAttribute("aria-selected",false)
    europa.setAttribute("aria-selected",true)

    setDataForPlanets(2)
});
titan.addEventListener('click',()=>{
    mars.setAttribute("aria-selected",false)
    moon.setAttribute("aria-selected",false)
    titan.setAttribute("aria-selected",true)
    europa.setAttribute("aria-selected",false)

    setDataForPlanets(3)
});


function setDataForPlanets(i){
    document.getElementById('title').innerText = `${user.destinations[i].name}`
    document.getElementById('description').innerText = `${user.destinations[i].description}`
    document.getElementById('distance').innerText = `${user.destinations[i].distance}`
    document.getElementById('time').innerText = `${user.destinations[i].travel}`
    document.getElementById('webp-image').srcset=`${user.destinations[i].images.webp}`
    document.getElementById('png-image').src=`${user.destinations[i].images.webp}`
}
