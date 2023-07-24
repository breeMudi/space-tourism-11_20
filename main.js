import getData from './app.js'


getData().then((data) => {
    const retrievedData = data
    console.log(retrievedData)
    // NEXT: USE DATA IN THE DIFFERENT HTML
    // But First Lets Test It
    try{const selectCrew = document.querySelector('.select-crew');
    selectCrew.addEventListener('click', (e)=>{
        console.log(((Number(e.target.className))))
        try {changeCrew(Number(e.target.className), retrievedData)}
        catch{console.log('click a button')}
    })}    
    catch{console.log('not in crew')}


    try {const selectDest = document.querySelector('.select-destination')
    selectDest.addEventListener('click', (e)=>{
        console.log(((Number(e.target.className))))
        try {changeDestination(Number(e.target.className), retrievedData)}
        catch{console.log('click a button')}   
    })}
    catch{console.log('not in destination')}
    
    try{const selectTech = document.querySelector('.select-technology')
    selectTech.addEventListener('click', (e)=>{
        console.log(((Number(e.target.className))))
        try {changeTechnology(Number(e.target.className), retrievedData)}
        catch{console.log('click a button')}     
    })}
    catch{console.log('not in technology')}
})

function changeCrew(num, retData) {
    const x = retData.crew[num]
    document.getElementById('crew-name').textContent=x.name
    document.getElementById('crew-photo').src=x.images.png
    document.getElementById('crew-role').textContent=x.role
    document.getElementById('crew-bio').textContent=x.bio
}
function changeDestination(num, retData) {
    const x = retData.destinations[num]
    document.getElementById('destination-name').textContent=x.name
    document.getElementById('destination-photo').src=x.images.png
    document.getElementById('destination-description').textContent=x.description
    document.getElementById('distance').textContent=x.distance
    document.getElementById('travel').textContent=x.travel
}
function changeTechnology(num, retData) {
    const x = retData.technology[num]
    document.getElementById('technology-name').textContent=x.name
    document.getElementById('technology-photo').src=x.images.landscape
    document.getElementById('technology-description').textContent=x.description
}
