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

    let populatePlanets = planets => {
      let planetContainer = new planetDiv(planets);
      planetContainer.render();
    }

    let submitAllButton = document.getElementById("submitAll");
    submitAllButton.addEventListener("click", getAllData)

    function getAllData(){
      fetch(url)
      .then(data => {
        return data.json();
      })
      .then(res => {
      return Math.ceil(res.count / 10);
      })
      .then(count => {
        let apiPromise = []; 
        for (let i = count; i > 0; i --){
          apiPromise.push(fetch(url + i).then(data =>{return data.json()}))
        }
        Promise.all(apiPromise)
        .then(responses => {
          console.log(apiPromise)
          let arr = [];
          responses.forEach(function(planet){
            arr.push(planet.results)
          })
         })
      })
    }
     
}
getData();
export { app as app }



// X get the number of pages first 
// X then make the appropriate number of api calls
// X pushing the result of each call into an array
// X we then wait for all the promises to resolve, 
// X and then do something with the returned data. 