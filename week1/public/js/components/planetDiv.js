import { app } from '../app.js'
class planetDiv {

    constructor(title, climate, terrain){
        this.title = title;
        this.climate = climate;
        this.terrain = terrain;
    }
    render (){
        this.title.forEach(planet => {

            const planetContainer = document.createElement("article")
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

            const detailButton = document.createElement("a")
            detailButton.textContent = "see details";
            let url = planet.url
            let match = url.search(Number)
            // let match = url.match(/planets/(\d+)/)
            console.log(match)
            console.log(url)
            // detailButton.addEventListener('click', getDetailData(url))
            // detailButton.href = 'https://swapi.co/api/planet/'
            planetContainer.appendChild(detailButton)
        })
    }

}
export { planetDiv };