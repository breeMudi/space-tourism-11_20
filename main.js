import getData from './app.js'




getData().then((data) => {
    const retrievedData = data
    // console.log(retrievedData)
    // NEXT: USE DATA IN THE DIFFERENT HTML
    // But First Lets Test It
    // CREW
    try{const selectCrew = document.querySelector('.select-crew');
    selectCrew.addEventListener('click', (e)=>{
        try {
            resetBg(selectCrew)
            changeCrew(Number(e.target.className), retrievedData)
            e.target.style.backgroundColor = '#ffffff'
            }
        catch{}
    })}    
    catch{}

    // DESTINATION
    try {const selectDest = document.querySelector('.select-destination')
    selectDest.addEventListener('click', (e)=>{
        try {
            resetDestBg(selectDest)
            changeDestination(Number(e.target.className), retrievedData)
            e.target.style.borderBottom = '2px solid #ffffff'
            e.target.style.color = '#ffffff'
        }
        catch{}   
    })}
    catch{}
    
    // TECHNOLOGY
    try{const selectTech = document.querySelector('.select-technology')
        selectTech.addEventListener('click', (e)=>{
            // console.log(((Number(e.target.className))))
            try {
                resetTechBg(selectTech)
                changeTechnology(Number(e.target.className), retrievedData)
                e.target.style.backgroundColor = '#ffffff'
                e.target.style.color = '#0B0D17'
            }
            catch{//console.log('click a button')
            }     
    })}
    catch{// console.log('not in technology')
    }
})

// Updating functions
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

// RESET PAGE INDICATION FUNCTIONS
function resetBg (selectList){
    const nodes = selectList.childNodes
    nodes.forEach((e) => {
        try{e.style.backgroundColor = '#97979795'}
        catch{'what happened'}
    });
}
// tech text color 0B0D17...fill white,, border none on click
// else text color whit...fill transparent, border '#97979795'
function resetTechBg (selectList){
    const nodes = selectList.childNodes
    nodes.forEach((e) => {
        try{
            e.style.backgroundColor = 'transparent'
            e.style.color = '#ffffff'
        }
        catch{'what happened'}
    });
}

function resetDestBg (selectList){
    const nodes = selectList.childNodes
    nodes.forEach((e) => {
        try{
            e.style.borderBottom = 'transparent'
            e.style.color = '#D0D6F9'
        }
        catch{'what happened'}
    });
}
