"use strict"
// import { addLoader } from '../helpers/loader.js'
import { planetList } from '../components/planetList.js'
import { sanitize, addLoader } from '../helpers/collection.js'

function getData() {
    let pageNum = document.getElementById("pageNum");
    let app = document.getElementById("root");
    let pageNumValue = pageNum.value
    let url = `https://swapi.co/api/planets/?page=${pageNumValue}`;
    sanitize()
    addLoader()
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(res => {
            sanitize()
            renderSelect(res.count)
            renderPlanets(res.results)
        })

    let renderPlanets = planets => {
        planets.length == 0 ? noPlanets() : populatePlanets(planets)
    }

    let renderSelect = select => {
        pageNum.innerHTML = ''
        for (let index = 1; index <= Math.ceil(select / 10); index++) {
            let option = document.createElement("option");
            option.value,
            option.textContent = index
            pageNum.appendChild(option);
        }
        window.scrollTo(0, 0)
    }

    let populatePlanets = planets => {
        let planetContainer = new planetList(planets);
        planetContainer.render();
    }
}

export { getData }