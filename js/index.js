var myElement = document.getElementById('swiped');
var mc = new Hammer(myElement);
mc.on("panleft panright tap press", function(ev) {
	var output = ev.type +" gesture detected.";
    myElement.textContent = output;
    console.log(output);
});