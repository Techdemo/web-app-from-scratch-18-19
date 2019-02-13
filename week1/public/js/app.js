'use strict';

// from component folder
import { planetDiv } from './components/planetDiv.js';

let app = document.getElementById("root");
let submit = document.getElementById("submit");
    submit.addEventListener("click", getData)

function getData () {
  let pageNum = document.getElementById("pageNum");
  let pageNumValue = pageNum.value
  let url = `https://swapi.co/api/planets/?page=${pageNumValue}`;
  fetch(url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      renderSelect(res.count)
      app.innerHTML = ''
      renderPlanets(res.results)
      console.log(res)
    })

    let renderPlanets = planets => {
      planets.length == 0 ? noPlanets() : populatePlanets(planets)
    }

    let renderSelect = select => {
      pageNum.innerHTML = ''
      for (let index = 1; index <= Math.ceil(select / 10); index++){
        let option = document.createElement("option");
        option.value,
        option.textContent = index
        pageNum.appendChild(option);
       }
    }

    let populatePlanets = (planets) => {
      let planetContainer = new planetDiv(planets);
      planetContainer.render();
    }
}

getData();
export { app as app }


// to do
// [ ] Select values resets after every request. Fix that
