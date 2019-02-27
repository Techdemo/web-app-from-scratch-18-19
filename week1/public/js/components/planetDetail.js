"use strict"

import { addLoader, sanitize } from '../helpers/collection.js'
import { app } from '../app.js';

async function renderPlanetDetail(hash){
    addLoader()
    let result = await
    fetch(hash)
        .then(data => {
            return data.json();
        })
        .then(res => {
            console.log(res)
            sanitize()
            renderDetail(res)
        })}

let renderDetail = (res) => {

    const markup = `
        <article class="planetContainerDetail fadeIn">
        <div
        style="
        height: 250px;
        width: 250px;
        "
        class="planet"
        >
           </div>
            <h2>${res.name}</h2>
            <ul>
                <li>climate: ${res.climate}</li>
                 <li>diameter: ${res.diameter}</li>
                  <li>orbital period: ${res.orbital_period}</li>
                   <li>populations: ${res.populations}</li>
                    <li>surface water: ${res.surface_water}</li>
                    <li>gravity: ${res.gravity}</li>
                    <li>terrain: ${res.terrain}</li>
            </ul>
          </article>
          `
    document.getElementById("root").insertAdjacentHTML('afterbegin', markup)
}

export { renderPlanetDetail };