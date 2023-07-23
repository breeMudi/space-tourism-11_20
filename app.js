async function getData(){
    const response = await fetch('data.json')
    let data = await response.json()
    return data
}

export default getData;
