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
    console.log(visibilty)
}

// CREW PAGE

const commander = document.getElementById('commander')
const specialist = document.getElementById('specialist')
const pilot = document.getElementById('pilot')
const engineer = document.getElementById('engineer')


commander.addEventListener('click',()=>{
    commander.setAttribute("aria-selected",true)
    specialist.setAttribute("aria-selected",false)
    pilot.setAttribute("aria-selected",false)
    engineer.setAttribute("aria-selected",false)
    
    setDataForCrew(0)
});
specialist.addEventListener('click',()=>{
    commander.setAttribute("aria-selected",false)
    specialist.setAttribute("aria-selected",true)
    pilot.setAttribute("aria-selected",false)
    engineer.setAttribute("aria-selected",false)

    setDataForCrew(1)
});
engineer.addEventListener('click',()=>{
    commander.setAttribute("aria-selected",false)
    specialist.setAttribute("aria-selected",false)
    pilot.setAttribute("aria-selected",false)
    engineer.setAttribute("aria-selected",true)

    setDataForCrew(2)
   
});
pilot.addEventListener('click',()=>{
    commander.setAttribute("aria-selected",false)
    specialist.setAttribute("aria-selected",false)
    pilot.setAttribute("aria-selected",true)
    engineer.setAttribute("aria-selected",false)

    setDataForCrew(3)
});

function setDataForCrew(i){
    document.getElementById('name').innerText = `${user.crew[i].name}`
    document.getElementById('description').innerText = `${user.crew[i].bio}`
    document.getElementById('role').innerText = `${user.crew[i].role}`
    document.getElementById('webp-image').srcset=`${user.crew[i].images.webp}`
    console.log(user.crew[i].images.webp)
    document.getElementById('png-image').src=`${user.crew[i].images.png}`

}