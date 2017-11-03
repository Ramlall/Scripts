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
	var sigtext = $(this).find("#vB_Editor_001_editor").val();
	console.log(sigtext);
	// WORKS
	
	// Search that string for any images being rendered.
	// Check each char for [IMG]
	for(var i = 0; i < sigtext.length - 5; i++) // Each character that could be an [ (From "[IMG]").
		{
		if(sigtext[i+0] != '[') { continue; }
		if(sigtext[i+1] != 'I') { continue; }
		if(sigtext[i+2] != 'M') { continue; }
		if(sigtext[i+3] != 'G') { continue; }
		if(sigtext[i+4] != ']') { continue; }
		
		// We found an image tag! Reposition i to be the first character of the image url.
		i = i+5; 
		var url = "";
		for(var j = i; j < sigtext.length - 5; j++)
			{
			// If we find the "[/IMG]" tag....
			if(sigtext[j+0] === '[' && sigtext[j+1] === '/' && sigtext[j+2] === 'I' && sigtext[j+3] === 'M' && sigtext[j+4] === 'G' && sigtext[j+5] === ']') 
				{
				// Stop. 
				// Advance i to the last bracket.
				i = j+5;
				
				// Test the validity of this image's dimensions.
				CheckImage(url);
				break;
				}
			
			// This is a valid url char, so add it to the string.
			url += sigtext[j];
			}
	
		}
	
	// For each image...
		// Render each image and get the height and width.
		// If the height or width is above the required size...
		// Prevent the page from reloading.
		// Add an error message saying "You have an image above the allowed dimensions."
	});
	
// Function to process an image url.
function CheckImage(imageurl)
	{
	console.log(url);
	}