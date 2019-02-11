"use strict"

let app = document.getElementById("root");
let submit = document.getElementById("submit");
    submit.addEventListener("click", getData)


function getData () {
let pageNum = document.getElementById("pageNum").value;
let url = `https://swapi.co/api/planets/?page=${pageNum}`;
    console.log(pageNum)

 fetch(url)
   .then(data => {
     return data.json();
   })
   .then(res => {
    removePlanets()
    renderPlanets(res.results)
   })

  function renderPlanets(planets){
    if (planets == 0){
      noPlanets()
      console.log("no planets")
    } else {
      console.log("fuck yeah, planets")
      populatePlanets(planets)
    }
  }

  function populatePlanets (planets){
    console.log(planets, "planetsding")
    planets.forEach(planet => {
      const planetContainer = document.createElement("section")
      planetContainer.setAttribute("class", "planetContainer")
      app.appendChild(planetContainer);

      const planetTitle = document.createElement("h2")
      planetTitle.textContent = planet.name;
      planetContainer.appendChild(planetTitle)

      const planetClimate = document.createElement("h3")
      planetClimate.textContent = "climate: " + planet.climate
      planetContainer.appendChild(planetClimate)

      const planetTerrain = document.createElement("p")
      planetTerrain.textContent = "Terrain: " + planet.terrain
      planetContainer.appendChild(planetTerrain)
      })
    }
}


function removePlanets(){
  let planetContainer = document.getElementsByClassName("planetContainer");
  console.log(planetContainer)
  for (var i = planetContainer.length - 1; i >= 0; i--) {
    planetContainer[0].parentNode.removeChild(planetContainer[0]);
  }
}

getData();
