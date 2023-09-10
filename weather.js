//Takaing all the variable from the html element and selector
const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.discription');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('location_not_foun');
const weather_body=document.querySelector('weather-body');
//api key of open weather website
async function checkweather(city){
    const api_key='429e6570bf176b57734d33f03e17ea4a';
    //error is showing just because of this line
    const url='https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}';

    const weather_data=await fetch('${url}').then(response=> 
        response.json());
//error show case
    if(weather_data.cod==='404'){
        location_not_found.style.display="flex";
        console.log("error");
        return;
    }
    
//taking output from the index.html file
    temperature.innerHTML='${Math.round(weather_data.main.temp-273.15)}°C';
    description.innerHTML='${weather_data.weather[0].description}';
    humidity,innerHTML='${weather_data.main.humidity}%';
    wind_speed.innerHTML='${weather_data.wind.speed}Km/H';

//show the picture of the weather as per the case of the weather
    switch(weather_data[0].main){
        case 'cloud':
            weather_img.src="img/cloud";
            break;
        case 'clear':
            weather_img.src="img/clear.png";
            break;
        case 'rain':
            weather_img.src="img/rain.png";
            break;
        case 'mist':
            weather_img.src="img/mist.png";
            break;
        case 'snow':
            weather_img.src="img/snow.png";
            break;
    }

}
//search box 
searchBtn.addEventListener('click', ()=>{
    //error
    checkweather(inputBox.value);
});



