async function getWeather() {

    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    if(city === ""){
        result.innerHTML = "Please enter a city name.";
        return;
    }

    result.innerHTML = "Loading...";

    let apiKey = "f34faae4359f1be39d41bc40ffea9432";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response = await fetch(url);

        if(!response.ok){
            result.innerHTML = "City not found.";
            return;
        }

        let data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p><b>Temperature:</b> ${data.main.temp}°C</p>
            <p><b>Weather:</b> ${data.weather[0].description}</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
        `;

    }catch(error){

        result.innerHTML = "Network error. Try again.";
    }
}
