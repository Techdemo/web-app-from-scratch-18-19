import { planetList } from '../components/planetList.js'
import { sanitize, addLoader } from './collection.js';


function getAllData() {
    let pageNum = document.getElementById("pageNum");
    let app = document.getElementById("root");
    let pageNumValue = pageNum.value
    let url = `https://swapi.co/api/planets/?page=`;
    let climateSelect = document.getElementById("climateVal");
    let climateVal = climateSelect.value;

    sanitize()
    addLoader()
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(res => {
            console.log(res)
            return Math.ceil(res.count / 10);
        })
        .then(count => {
            let apiPromise = [];
            for (let i = count; i > 0; i--) {
                apiPromise.push(fetch(url + i).then(data => { return data.json() }))
            }
            Promise.all(apiPromise)
                .then(responses => {
                    let arr = [];
                    responses.map(function (planet) {
                        arr.push(...planet.results)
                    })
                    if (climateVal === "default") {
                        app.innerHTML = ''
                    } else {
                        let climateArr = arr.filter(function (planet) {
                            return planet.climate === `${climateVal}`
                        })
                        return climateArr
                    }
                    return arr
                })
                .then(arrRes => {
                    app.innerHTML = ''
                    populatePlanets(arrRes)
                })
        })


    let populatePlanets = planets => {
        let planetContainer = new planetList(planets);
        planetContainer.render();
    }
}
export  {getAllData}