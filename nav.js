const withNavbar = document.getElementById('closed')
const noNavbar = document.getElementById('opened')
const navBar = document.querySelector('.navbar')

function reset(){
    noNavbar.style.right = '0rem';
    navBar.style.display= 'none'
}
reset()
function close(){
    withNavbar.style.right = '-500rem';
    noNavbar.style.right = '0rem';
    
    navBar.style.display = 'none'
    // navBar.style.transition = '0.5s'
}

function open(){
    withNavbar.style.right = '0rem';
    noNavbar.style.right = '-500rem';

    navBar.style.display = 'flex'
    // navBar.style.right = 0
    // navBar.style.transition = '2s'
}

withNavbar.addEventListener('click', ()=>{
    close()
})

noNavbar.addEventListener('click', ()=>{
    open()
})