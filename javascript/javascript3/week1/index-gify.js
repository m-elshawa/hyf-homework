const searchInput = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const icon = document.createElement("img");
document.body.appendChild(icon);


searchBtn.addEventListener('click', function () {
   // console.log("Clicked");
   const gifyValue = searchInput.value;
   //console.log(gifValue);
   const gifyApi = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5";
   const gifyApiKey = "7jVpZFfcsJkPE7RaMEglu1icvwX1FpuP";

   const gifyUrl = "api.giphy.com/v1/gifs/search";


   fetch("http://api.giphy.com/v1/gifs/search?q="+ gifyValue + "&api_key="+ gifyApiKey + "&limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //icon.src = data.data[0].url + "/giphy.gif";
      icon.src = data.data[0].images.original.url;

    });
    
    
});