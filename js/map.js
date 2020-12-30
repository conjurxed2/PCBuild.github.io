let mymap = L.map("mapid").setView([-12.026902, -76.67308], 10);
let marker = L.marker([-12.026902, -76.67308]).addTo(mymap);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWFyb245OTAwIiwiYSI6ImNqdHB2bXB0djA0bTY0ZG1yeHZvbzQ1ejcifQ.GxpRg7wVrykJ9PfS7JtgpQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoiYWFyb245OTAwIiwiYSI6ImNqdHB2bXB0djA0bTY0ZG1yeHZvbzQ1ejcifQ.GxpRg7wVrykJ9PfS7JtgpQ"
  }
).addTo(mymap);
