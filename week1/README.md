# Swapi planet explorer

![page of app](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/page.png?raw=true "front page of app")

[Link](https://techdemo.github.io/web-app-from-scratch-18-19/week1/)
## Purpose of the app
Using the Swapi api, this app maps out all the planets known to the Starwars universe.
My goal is to broaden the view people have of the starwars universe. There are more stories to be told than the story of Han Solo, Luke Skywalker etc. I want to achieve this by making a chart or a map for all the planets known to the Starwars universe.
The user can then compare sizes of planets to other planets. Or compare size of each solar system. There will also be a detailpage of every planet and solar system.

## Api
The [Swapi api](https://swapi.co/) has a rate limit of 10,000 requests from one ip-adress. Which makes it a good api for development. The api returns JSON, requests are in JSON and no authentication is needed. The data returned is pretty explanatory. The query just returns an object named _results_ and it contains every planetArray.

## Design patterns and best practices
For the best practices I tried to use a Promise in requesting the data from the api. In that I used a try and catch for error handling in requesting data from the server.
The code is split into modules and it has no global variables because of it. One thing that I still want to implement is the part of data manipulation. This still happens in the same file as the file in wich data is requested. It would be better if I can split this.

## Actor diagram
![Actor diagram](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/Actor%20diagram.png?raw=true "Actor Diagram")

## Interaction diagram
![Interaction Diagram](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/interaction%20diagram.png?raw=true "Interaction Diagram")\

## some interesting code || Maybe some extra points?

#### querying multple pages and map
In querying the results from the api, the api gives back only ten results. If you want to filter on a planet climate it doesn't make sense to just sort the first 10, or the 10 results on page 2. This is my solution for this problem:

```
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
```

it fetches the url and returns the json in the data object. Because the response contains a _Count_ of results in total, I can use that to calculate the amount of fetches that need to be done to collect all of the results divided over the pages. The count returns a number and that number is used to decide how many times the for loop has to run. All of the results get push into the apiPromise array. When that is done, Promise.all is triggered and cleans up the data in one object. If I didn't destructered the array it woud be an object, containing 7 objects (each for the response) and each object contained 10 arrays. To make the total data more manageable to work with I just the destructered variant.
I used a for loop because it will run when _the condition is met_. Because it came out as an object, I've used a for loop.

#### Filter and Render data on a selected value

```
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
```
The code continues when the user wants to filter on a climate. I take the climate template literal from the select menu and place it in the if else statement. The template literal lets me filter all the planets that contain the selected climate. After that it return the results of the filter to the populatePlanets().

#### Router that I wrote myself
```
class Router {
    constructor(){}
init () {
    getData()
    window.addEventListener('hashchange', () => {
        sanitize()
        let hash = window.location.hash.substring(1)
        if (hash == "") {
            getData();
        } else {
            renderPlanetDetail(hash)
                }
            }
        )
    }
}
```

for my Router i used an eventlistener on the hashchange. If the hashchange contains nothing it renders the list over view page. When there is a hash requested, it renders the detailpage according to the page.

## Reflection
This was an awesome project to do and I'm really proud at the result that i've achieved. I've learned alot about using higher order functions, requesting and working with data. And I am alot more confident about my JS skills after this course.
As always, I see some things that I could've do better. For example, there is almost no error handeling. Luckily this API is so easy to work with but in other cases, I must incorporate more error handeling. Besides the error handeling, I have to code more object orientated. Some modules contains too many functions.



## To do
See [Project](https://github.com/Techdemo/web-app-from-scratch-18-19/projects/1) for all of the todos for this application.

## Proces
[Actor diagram week 2](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/Actor%20diagram%20week%202.png?raw=true)
[Interaction diagram week 2](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/interaction%20diagram%20week%202.png?raw=true)