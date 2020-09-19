const getWeather = document.getElementById("myBtn");
const myCity = document.querySelector("input");

const cityHtml = document.createElement("p");
document.body.appendChild(cityHtml);

const temp = document.createElement("p");
document.body.appendChild(temp);

const windSpeed = document.createElement("p");
document.body.appendChild(windSpeed);

const sunRise = document.createElement("p");
document.body.appendChild(sunRise);

const sunSet = document.createElement("p");
document.body.appendChild(sunSet);

const clowdy = document.createElement("p");
document.body.appendChild(clowdy);

const icon = document.createElement("img");
document.body.appendChild(icon);

getWeather.addEventListener("click", function () {
  //console.log("Button Clicked");
  const myApi = "https://api.openweathermap.org/data/2.5/weather?q=";
  const cityName = myCity.value;
  const apiKey = "&appid=9198215f29876ec68202479bd9cb68d5";

  const apiUrl = myApi + cityName + apiKey;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cityHtml.innerHTML = "City: " + cityName;
      temp.innerHTML = "Tempretaure: " + data.main.temp;
      windSpeed.innerHTML = "Wind Speed: " + data.wind.speed;
      sunRise.innerHTML = "Sun Rise: " + data.sys.sunrise;
      sunSet.innerHTML = "Sun Set: " + data.sys.sunset;
      clowdy.innerHTML = "Clouds: " + data.clouds.all;
      icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
      

    });
});


