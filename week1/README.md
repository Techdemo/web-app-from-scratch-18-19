# Web app from scratch - Swapi API 🐒

[Link](https://techdemo.github.io/web-app-from-scratch-18-19/week1/)
## Purpose of the app

Using the Swapi api, this app maps out all the planets known to the Starwars universe.
My goal is to broaden the view people have of the starwars universe. There are more stories to be told than the story of Han Solo, Luke Skywalker etc. I want to achieve this by making a chart or a map for all the planets known to the Starwars universe.
The user can then compare sizes of planets to other planets. Or compare size of each solar system. There will also be a detailpage of every planet and solar system.

## Api

The [Swapi api](https://swapi.co/) has a rate limit of 10,000 requests from one ip-adress. Which makes it a good api for development. The api returns JSON, requests are in JSON and no authentication is needed.

## Design patterns and best practices

For the best practices I tried to use a Promise in requesting the data from the api. In that I used a try and catch for error handling in requesting data from the server.

## Actor diagram

![Actor diagram](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/Actor%20diagram.png?raw=true "Actor Diagram")

## Interaction diagram
![Interaction Diagram](https://github.com/Techdemo/web-app-from-scratch-18-19/blob/master/week1/public/assets/interaction%20diagram.png?raw=true "Interaction Diagram")

## feature wishlist

## To do

[ ] implement templating engine
[ ] Refactor code
[ ] implement a Promise.all to render the persons and movies in the planetDetailView
[ ] return in onHashChange renders not the planetList
[ ] do some styling to make it look awesome
[ ] implement local storage
[ ] implement higher order functions to pass the requirements of this assignment.
