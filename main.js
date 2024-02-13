// html'den aktarilanlar

const cityInput = document.querySelector(".InputText");
const btn = document.querySelector(".btn");

//btn izleme

btn.addEventListener("click", ()=>{
    console.log(cityInput.value)

    getData(cityInput.value)

})

function getData(name){
//API Key tanimala
const API ="e876aca822c5c58d27571121cf1baaa5";

 //baseUrl Tanimlama
 const baseURL =  `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=en`;
  
 console.log(baseURL)

 //fetch ile promise dondue
 fetch(baseURL)
 .then(res => res.json() )//json a cevirdik
 .then(data =>{
    const {name, sys:{country}, main:{temp, feels_like, humidity}, wind:{speed}, weather:[{description}]} = data
    // console.log(name, country, temp °, feels_like, description, humidity %, speed km/s)
 
//verileri Js'e cekme
const sehir = document.querySelector('#city');
const sicaklik = document.querySelector('#temperature');
const havaDurumu = document.querySelector('#weather');
const hissedilen = document.querySelector('#feltair');
const nem = document.querySelector('#humidity');
const ruzgar = document.querySelector('#wind');
console.log(sehir, sicaklik, havaDurumu, hissedilen, nem, ruzgar);

// js'ye cekilen elemanlarin html elemanlari yerine yerlestirilmesi

sehir.textContent = `${name}, ${country}`
sicaklik.textContent = `${temp.toFixed(1)} °C`
nem.textContent = `Humidity: % ${humidity}`
ruzgar.textContent = `Wind: ${speed} km/s`
havaDurumu.textContent = `${description}`
hissedilen.textContent = `Felt Air Temperature: ${feels_like}°C`



})
 .catch(err => console.log(err))

 cityInput.value = "";
 cityInput.focus();

}
 