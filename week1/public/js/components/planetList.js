class planetList {

    constructor(planets){
        this.planets = planets;
    }
    render (){
     this.planets.forEach(planet => {
        const markup =
            `
            <article class="planetContainer">
                <h2>${planet.name}</h2>
                <h3>Climate: ${planet.climate}</h3>
                <p>Terrain: ${planet.terrain}</p>
                <a href="#${planet.url}">See details</a>
            </article>
            `
        document.getElementById("root").insertAdjacentHTML("beforeend", markup)
        })
    }
}
export { planetList };