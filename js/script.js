function addRecommendation() {
    // Get the message from the input box
    let message = document.getElementById("new-rec-msg").value;

    if (message.trim() != "") {
        // Create a new recommendation card
        let newCard = document.createElement("div");
        newCard.classList.add("rec-card");
        newCard.innerText = `"${message}"`;

        // TASK 7: Add it to the list
        document.getElementById("rec-container").appendChild(newCard);

        // TASK 9: Show Popup
        alert("Thank you for submitting a recommendation!");

        // Clear the box
        document.getElementById("new-rec-msg").value = "";
    }
}