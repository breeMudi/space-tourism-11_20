// import {dat} from './app.js'
import getData from './app.js'


getData().then((data) => {
    const retrievedData = data
    console.log(retrievedData)
    // NEXT: USE DATA IN THE DIFFERENT HTML
    // But First Lets Test It
    const selectCrew = document.querySelector('.select-crew')
    selectCrew.addEventListener('click', (e)=>{
        console.log(((Number(e.target.className))))
        try {changeCrew(Number(e.target.className), retrievedData)}
        catch{console.log('click a button')}
        
    })
    const selectDest = document.querySelector('.select-destination')
    selectDest.addEventListener('click', (e)=>{
        console.log(((Number(e.target.className))))
        try {changeDestination(Number(e.target.className), retrievedData)}
        catch{console.log('click a button')}
        
    })
    const selectTech = document.querySelector('.select-technology')
    selectTech.addEventListener('click', (e)=>{
        console.log(((Number(e.target.className))))
        try {changeTechnology(Number(e.target.className), retrievedData)}
        catch{console.log('click a button')}
        
    })
})

function changeCrew(num, retData) {
    const x = retData.crew[num]
    document.getElementById('crew-name').textContent=x.name
    document.getElementById('crew-photo').src=x.images.png
    document.getElementById('crew-role').textContent=x.role
    document.getElementById('crew-bio').textContent=x.bio
}
function changeDestination(num, retData) {
    const x = retData.crew[num]
    document.getElementById('destination-name').textContent=x.name
    document.getElementById('destination-photo').src=x.images.png
    document.getElementById('description').textContent=x.description
    document.getElementById('distance').textContent=x.distance
    document.getElementById('travel').textContent=x.travel
}
function changeTechnology(num, retData) {
    const x = retData.crew[num]
    document.getElementById('technology-name').textContent=x.name
    document.getElementById('technology-photo').src=x.images.png
    document.getElementById('technology-role').textContent=x.role
    document.getElementById('technology-bio').textContent=x.bio
}

// const 

// write a function that maps various values to the dom
// write a function that

// EDITED TODAY JUL 22
