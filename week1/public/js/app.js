const url = "https://swapi.co/api/planets/";

let get = url => {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = () => {
      try {
        resolve(req.response);
      } catch {
        reject(Error(req.statusText));
        console.log(req.statusText);
      }
    };
    req.onerror = () => {
      reject(Error("Network Error"));
    };
    req.send();
  });
};

// roept get functie aan en rendert vervolgens namen van de planeten
get(url).then(response => {
  let data = JSON.parse(response);
  console.log(data.results);
});
