let key = `a72607d6e38742118ea194213231201`;

export default async function fetchData(cidade) {
    
    let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}&aqi=no`)
    
    let data = await res.json()
    return data
}