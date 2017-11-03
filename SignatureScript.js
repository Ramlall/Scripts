// How to test in Chrome's console: https://stackoverflow.com/questions/5282228/include-javascript-file-in-chrome-console
/* Ctrl + Shift + J on the Chrome Page -> Console tab
var script = document.createElement('script');	
script.type = 'application/javascript';			
script.src = 'https://rawgit.com/Ramlall/Scripts/master/SignatureScript.js'; 								
document.head.appendChild(script);				
*/

console.log("Successfully loaded the signature script.");

/* Create a function for when a user submits for the signature form. */
// When the "Save Signature" or "Preview" button gets clicked.button gets clicked.
$("[name=vbform]").on("submit", function(event)
	{
	console.log("I want you to know that I'm all yours. You and me...we're the same force.");
	
	// Don't reload the page until we check the image dimensions.
	event.preventDefault();
	
	// Get the raw text for the signature being submitted.
	var sigtext = $(this).find("#vB_Editor_001_editor").val();
	
	// Search that string for any images being rendered.
	// Look for "[IMG]" tags
	for(let i = 0; i < sigtext.length - 5; i++) // Each character that could be an [ (From "[IMG]").
		{
		// Get this and the next 4 chars.
		var nextfive = sigtext[i+0] + sigtext[i+1] + sigtext[i+2] + sigtext[i+3] + sigtext[i+4];
		
		// If it's not "[IMG]" then move to the next char.
		if((nextfive != "[IMG]") || i+5 == sigtext.length) // Extra condition: if a user ends their signature with [IMG] for some reason, there's no url to parse.
			{ continue; }
		
		// We found an image tag! Reposition i to be the first character after [ in "[IMG]" 
		i = i+5;
		var url = "";	// Hold our url in this string.
		for(let j = i; j < sigtext.length - 5; j++)	// Check every character after the [IMG] tag until we find [/IMG] or reach the end of the characters.
			{
			// If we find the "[/IMG]" tag....
			if(sigtext[j+0] === '[' && sigtext[j+1] === '/' && sigtext[j+2] === 'I' && sigtext[j+3] === 'M' && sigtext[j+4] === 'G' && sigtext[j+5] === ']') 
				{
				// Advance i to to that final bracket in "[/IMG]".
				i = j+5;
				
				// Test the validity of this image's dimensions.
				CheckImage(url);
				
				// Stop checking this url. 
				break;
				}
			
			// This is a valid url char, so add it to the string.
			url += sigtext[j];
			}
		}
	});
	
// Function to process an image url. If it's above certain dimensions, don't let the user save the signature.
function CheckImage(imageurl)
	{
	console.log("Image url: " + imageurl);
	
	var img = new Image();
	
	img.onload = function()
		{
		var height = img.height;
		var width = img.width;

		console.log("Height: " + height);
		console.log("Width: " + width);
		
		// If the images are above MMO-C's allowed dimensions...// Add a message to the Preview saying so.
		var $preview = $("#yui-gen11");
		if(height > 100)
			{
			$preview.html("<span style=\"color:red;\">Image is taller than 100 pixels. Please find an image 100 pixels or shorter.</span><br>");
			}
		else if(width > 500)
			{
			$preview.html("<span style=\"color:red;\">Image is wider than 500 pixels. Please find an image 500 pixels or thinner.</span><br>");
			}
		// We passed the dimension check so allow the submit button to work again.
		else
			{
			$("[name=vbform]").unbind('submit').submit()	
			}
		}
	img.src = imageurl;
	}