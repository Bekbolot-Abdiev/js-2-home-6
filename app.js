const olTag=document.querySelector('ol')

const _baseUrl='https://restcountries.com/v3.1/all'


function getCountries(){
    fetch(_baseUrl)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            showCountries(data)
        })
}
getCountries()
function showCountries(arr) { 
    for (const ctry of arr) {
        olTag.innerHTML+=`
        <li>
        <img width='20%' src='${ctry.flags.svg}'/>
        <h2> Старана: ${ctry.name.common}</h2>
        <h2> Столица: ${ctry.capital}</h2>
        <h2> Население: ${ctry.population}</h2>
        </li>
        `
    }
    
}