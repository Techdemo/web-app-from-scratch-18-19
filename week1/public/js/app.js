"use strict"
// from component folder
import { planetDiv } from './components/planetDiv.js';

let app = document.getElementById("root");
let submit = document.getElementById("submit");
    submit.addEventListener("click", getData)

function getData () {
  let pageNum = document.getElementById("pageNum").value;
  let url = `https://swapi.co/api/planets/?page=${pageNum}`;

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(res => {
    removePlanets()
    renderPlanets(res.results)
  })

  let renderPlanets = planets => {
    this == 0 ? noPlanets() : populatePlanets(planets)
  }

  let populatePlanets = (planets) => {
    let planetContainer = new planetDiv(planets);
    planetContainer.render();
  }

  let removePlanets = () => {
      let planetContainer = document.getElementsByClassName("planetContainer");
        for (let index of planetContainer) {
        planetContainer[0].parentNode.removeChild(planetContainer[0]);
     }
    }
}

getData();
export { app as app }