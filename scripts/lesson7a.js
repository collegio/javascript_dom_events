/*

	Learn to Code JavaScript: Lesson 7
	JavaScript DOM Events

	Let's look at some basic JavaScript DOM events!

*/

// let's set some click events for our 3 buttons to change our jumbotron message.
// We'll need to get the particular element by using getElementById
// We'll update our main jumbotron message's innerHTML
document.getElementById("button_message1").addEventListener("click", function() {
	document.getElementById("main_message").innerHTML = "Good day, I hope you are enjoying working with JavaScript!";
});

document.getElementById("button_message2").addEventListener("click", function() {
	document.getElementById("main_message").innerHTML = "You are going to be a front-end master with jQuery!";
});

document.getElementById("button_message3").addEventListener("click", function() {
	document.getElementById("main_message").innerHTML = "Let's get started!";
});

// setting our custom message involves extracting the value from a text field
document.getElementById("button_custom_message").addEventListener("click", function() {

	// get the custom message and update the jumbotron message
	var customMessage = document.getElementById("custom_message").value;
	document.getElementById("main_message").innerHTML = customMessage;
});

// some simple show and hide buttons can easily remove some unneeded clutter from the
// screen, while still allowing the user to access it. Note how we are also updating
// which particular button is showing

document.getElementById("button_custom_message_hide").addEventListener("click", function() {
	document.getElementById("custom_section").style.display = "none";
	document.getElementById("button_custom_message_hide").style.display = "none";
	document.getElementById("button_custom_message_show").style.display = "block";
});

document.getElementById("button_custom_message_show").addEventListener("click", function() {
	document.getElementById("custom_section").style.display = "block";
	document.getElementById("button_custom_message_show").style.display = "none";
	document.getElementById("button_custom_message_hide").style.display = "block";
});