// How to test in Chrome's console: https://stackoverflow.com/questions/5282228/include-javascript-file-in-chrome-console
/* Ctrl + Shift + J on the Chrome Page -> Console tab
var script = document.createElement('script').type = 'application/javascript';
script.src = 'https://rawgit.com/Ramlall/Scripts/master/SignatureScript.js';
document.head.appendChild(script);
*/

/* Create a function for when a user submits for the signature form. */
console.log("OB3LISK successfully loaded the signature script.");
// When the "Save Signature" button gets clicked.
$("[name=vbform]").on("submit", function(event)
	{
	// Don't reload the page.
	event.preventDefault();
	console.log("I want you to know that I'm all yours. You and me...we're the same force.");
	});