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

const launch = document.getElementById('one')
const capsule = document.getElementById('two')
const spacePort = document.getElementById('three')


launch.addEventListener('click',()=>{
    launch.setAttribute("aria-selected",true)
    capsule.setAttribute("aria-selected",false)
    spacePort.setAttribute("aria-selected",false)

    console.log(true)
    setDataForTech(0)
});
capsule.addEventListener('click',()=>{
    launch.setAttribute("aria-selected",false)
    capsule.setAttribute("aria-selected",true)
    spacePort.setAttribute("aria-selected",false)
    setDataForTech(1)
});
spacePort.addEventListener('click',()=>{
    launch.setAttribute("aria-selected",false)
    capsule.setAttribute("aria-selected",false)
    spacePort.setAttribute("aria-selected",true)


    setDataForTech(2)
});

function setDataForTech(i){
    document.getElementById('name').innerText = `${user.technology[i].name}`
    document.getElementById('description').innerText = `${user.technology[i].description}`
    document.getElementById('portrait-image').src=`${user.technology[i].images.portrait}`
    document.getElementById('landscape-image').src=`${user.technology[i].images.landscape}`

}