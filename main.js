// import {dat} from './app.js'
import getData from './app.js'


const output = getData().then((data) => {
    const retrievedData = data
    console.log(retrievedData)
    // NEXT: USE DATA IN THE DIFFERENT HTML
})
// console.log(output)
// 