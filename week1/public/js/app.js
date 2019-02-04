var request = new XMLHttpRequest();
var app = document.getElementById("root");

request.open("GET", "https://swapi.co/api/people/", true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log("data", data);
  // data is a regular object that does not have a forEach method.
  console.log("results", data.results);
  data.results.forEach(person => {
    console.log(person.name);
  });
};
request.send();

// response is een method op de request
// de swapi heeft meerdere pagina's.
