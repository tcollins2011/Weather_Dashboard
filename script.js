// get user input from search for city
// save user input as a variable
// when the search button is pushed
// do a query url search using the weather api 
// take the information from this search and send it to the cards and the day of section
// save the city name in local storage and add it to the saved city div 
// when a saved city is clicked also have it search and update the other two divs

// API key = 05eafc3d640b89d430555b1c8c878c13



$("#add-city").on("click", function(event){
    event.preventDefault();
    $('.cityWeather').empty()
    var cityName = $("#exampleInputCity").val().trim()
    displayCityInfo()
    // push the city to local storage
    // perform the search weather function

})

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
        var icon = $('<h5>').text(response.weather.icon)
        console.log(response)
        console.log(temp)
        console.log(humidity)
        console.log(windSpeed)
        console.log(uvIndex)
        $('.cityWeather').append(temp)
        $('.cityWeather').append(humidity)
        $('.cityWeather').append(windSpeed)
        $('.cityWeather').append(uvIndex)
        $('.cityWeather').append(icon)
    
    // append info to each line in the daily weather
    // append 5 day forecast to the five cards
    
})

}

