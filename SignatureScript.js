// How to test in Chrome's console: https://stackoverflow.com/questions/5282228/include-javascript-file-in-chrome-console
/* Ctrl + Shift + J on the Chrome Page -> Console tab
var script = document.createElement('script');	// Create the script.
script.type = 'application/javascript';			// Make sure the type is correct. 
script.src = ''; 								// Add your script url. Use rawgit to convert a git file to the correct headers (or else you get MIME errors).
document.head.appendChild(script);				// Add the script to the HTML head.
*/

/* Create a function for when a user submits for the signature form. */
console.log("OB3LISK successfully loaded the signature script.");
// When the "Save Signature" or "Preview" button gets clicked.button gets clicked.
$("[name=vbform]").on("submit", function(event)
	{
	console.log("I want you to know that I'm all yours. You and me...we're the same force.");
	
	// Don't reload the page.
	event.preventDefault();
	
	// Get the text for the signature being submitted into a string variable.
	var sigtext = $(this).val();
	console.log(sigtext);
	
	// Search that string for any images being rendered.
	
	// For each image...
		// Render each image and get the height and width.
		// If the height or width is above the required size...
		// Prevent the page from reloading.
		// Add an error message saying "You have an image above the allowed dimensions."
	});