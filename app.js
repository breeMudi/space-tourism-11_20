// window.onload = function(){
   
//     // getData()
//     // now we have the database always loaded in app.js
// }
// let dat = 0;
async function getData(){
    const response = await fetch('data.json')
    let data = await response.json()
    return data
}

export default getData;
