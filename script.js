// get user input from search for city
// save user input as a variable
// when the search button is pushed
// do a query url search using the weather api 
// take the information from this search and send it to the cards and the day of section
// save the city name in local storage and add it to the saved city div 
// when a saved city is clicked also have it search and update the other two divs

// API key = 05eafc3d640b89d430555b1c8c878c13

var storedCities = []
var date = new Date(11,24,33)
console.log(date)
$("#add-city").on("click", function(event){
    event.preventDefault();
    $('.cityWeather').empty()
    var cityName = $("#exampleInputCity").val().trim()
    displayCityInfo()
    addLocalStorage()

    // push the city to local storage
    // perform the search weather function

})

function addLocalStorage(){

    var cityName = $("#exampleInputCity").val().trim()

    if (cityName === ''){
        return
    }
    storedCities.push(cityName)
    storeCities()
    renderCities()

}

function displayCityInfo(){
    var cityName = $("#exampleInputCity").val().trim()
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=imperial&appid=05eafc3d640b89d430555b1c8c878c13'
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var temp = $('<h5>').text('Temperature: ' + response.main.temp +'°F')
        var humidity = $('<h5>').text('Humidity: ' + response.main.humidity + '%')
        var windSpeed = $('<h5>').text('Wind speed: ' + response.wind.speed + ' MPH')
        var uvIndex = $('<h5>').text('Cloud coverage: ' + response.clouds.all +'%')
        var cityName = $('<h3>').text(response.name)
        console.log(response)
        console.log(temp)
        console.log(humidity)
        console.log(windSpeed)
        console.log(uvIndex)
        $('.cityWeather').append(cityName)
        $('.cityWeather').append(temp)
        $('.cityWeather').append(humidity)
        $('.cityWeather').append(windSpeed)
        $('.cityWeather').append(uvIndex)
        $("#exampleInputCity").val('')
        
    
    // append info to each line in the daily weather
    // append 5 day forecast to the five cards
    
})
}

function storeCities() {
    // Stringify and set "cities" key in localStorage to storedCities array
    localStorage.setItem("cities", JSON.stringify(storedCities));
}

function renderCities() {
  // Clears out saved city list
  $('.savedCities').empty()

  // Render a new li for each todo
  for (var i = 0; i < storedCities.length; i++) {
    var city = storedCities[i];

    var button = $("<li>");
    button.html(city)
    // bttn.attr("data-index", i);

    // var button = $("<button>");
    // button.textContent = "remove";

    // li.append(button);
    $('.savedCities').append(button);
  }
}


