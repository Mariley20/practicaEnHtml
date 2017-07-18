function convertirCelcius(){
	var farenheit = document.getElementById('farenheit').value;
	var celsius = (parseFloat(farenheit) - 32) * (5/9);
	//alert(celsius);
	document.getElementById("celsius").innerHTML = celsius.toFixed(2)+" °C";
} 