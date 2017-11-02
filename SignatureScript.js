/* Create a function for when a user submits for the signature form. */
console.log(OB3LISK);
// When the "Save Signature" button gets clicked.
$("form [name=vbform]").on("submit", function(event)
	{
	// Don't reload the page.
	event.preventDefault();
	console.log("Sup mofo.");
	});
