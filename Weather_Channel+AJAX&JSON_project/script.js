
function cargarCiudad(city){
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, 
    function getData (data) {
    // console.log(data)
    // console.log(data.weather[0].icon)
    // console.log(data.main.temp)
    // console.log(data.weather[0].description)
    
    document.querySelector("#wicon").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
    document.querySelector("#wicon").alt = "";
    document.querySelector("#temperatura").textContent = `${data.main.temp}°C`;
    document.querySelector("#descripcion").textContent = `${data.weather[0].description}`;
    document.querySelector("#ciudad").textContent = `${data.name}`;
    });
}

// Obtener datos de ciudad 
const clickSend = document.querySelector("button");

clickSend.addEventListener("click", function(){
    let valorInput = document.querySelector("#input").value;
    cargarCiudad(valorInput);
    displayCityData();
} )

// Visibilidad en pantalla 

const getCityDetails = document.querySelector("button");
let valorInput = document.querySelector("#input").value;

function displayCityData(){
    document.querySelector(".container").style.visibility = "visible";
    document.querySelector("#temperatura").innerHTML = "<sup>°C</sup>";
    document.querySelector("#wicon").style.visibility = "visible";
};

const inputCity = document.querySelector("#input");
inputCity.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    let valorInput = document.querySelector("#input").value;
    cargarCiudad(valorInput);
  }
});







