var addListButton = document.getElementById('add-list');
//console.log(addListButton);

addListButton.addEventListener("click", function() {
	//console.log("button clicked")
	var addListPopup = document.getElementById("add-list-popup");
	addListPopup.style.display = "flex";

});



var closeButtonsArray = document.querySelectorAll(".close");
closeButtonsArray = Array.from(closeButtonsArray);
//console.log(addListButton);

closeButtonsArray.forEach(function(closeButton, i) {
	closeButton.addEventListener("click", function() {
	var addListPopup = document.getElementById("add-list-popup");
	addListPopup.style.display = "none";
	});

});

// for (var i = 0; i < closeButtonsArray.length; i++) {
// 	var allPopup = document.getElementsByClassName("popup");
// 	allPopup[i].style.display = none;
// }


var addItemButton = document.getElementById('add-item');

addItemButton.addEventListener("click", function() {
	var addItemPopup = document.getElementById("add-item-popup");
	addItemPopup.style.display = "flex";

});

closeButtonsArray.forEach(function(closeButton, i) {
	closeButton.addEventListener("click", function() {
	var addItemPopup = document.getElementById("add-item-popup");
	addItemPopup.style.display = "none";
	});

});
