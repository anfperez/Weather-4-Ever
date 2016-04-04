
console.log("Script loaded")
"use strict";

var sky_gif 

(function() {
	$('.pure-button').click(function(e) {
		var newColors = ['00','33','66','99','cc','ff'];
		var rand = function() {
    return Math.floor(Math.random()*6);
};

var randomColor = function() {
    var r = newColors[rand()];
    var g = newColors[rand()];
    var b = newColors[rand()];
    return "#"+r+g+b;
};
		$('html').css("background-color", randomColor);
		$('body').css("background-color", randomColor);
		// $('.prompt').css("color", randomColor);
		// $('p').css("color", randomColor)

		e.preventDefault()
		console.log("click noticed")
	$.ajax({
		// var city = $('.pure-input-rounded').val()
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('.pure-input-rounded').val() + ",US&appid=&units=Imperial",
		type: "GET",
		success: function(data){
			debugger
			console.log(data)
			var temp = data.main.temp
			var current_time = moment().format('MMMM Do YYYY, h:mm:ss a')
			var sky = data.weather[0].description
			$('#forecast').text("The current temperature in " + $('.pure-input-rounded').val() + " is " + temp + " degrees Fahrenheit at " + current_time + ". It is currently " + sky + "."  )
			if (sky.includes("clear")) {
				sky_gif = "Flat_White/36.png"
			}
			else if (sky.includes("rain")) {
				sky_gif = "Flat_White/2.png"
			}
			else if (sky.includes("thunderstorm")) {
				sky_gif = "Flat_White/1.png"
			}
			else if (sky.includes("snow")) {
				sky_gif = "Flat_White/16.png"
			}
			else if (sky.includes("mist")){
				sky_gif = "Flat_White/20.png"
			}
			else {
				sky_gif = "Flat_White/26.png"
			}
			var sky_image = $('img').attr('src', sky_gif);
			$('.pure-input-rounded').val(''); 
		
		}

	})
})

})();
