function deleteWebhook() {
			// Get the webhook link from the textbox
			var webhookLink = document.getElementById("webhook-link").value;

			// Create a new XMLHttpRequest object
			var xhr = new XMLHttpRequest();

			// Open a DELETE request to the webhook link
			xhr.open("DELETE", webhookLink, true);

			// Set the request header for the Content-Type
			xhr.setRequestHeader("Content-Type", "application/json");

			// Send the request
			xhr.send();

			// Check the status of the response
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						// Display a success message
						alert("Webhook deleted successfully!");
					} else if (xhr.status === 405) {
						// Display an error message
						alert("Webhook could not be deleted, please email tom@suroto.uk for help.");
					}
				}
			};
		}