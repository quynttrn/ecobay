function addComment() {
    var nameInput = document.getElementById("name-input");
    var emailInput = document.getElementById("email-input");
    var commentInput = document.getElementById("comment-input");
    var ratingInput = document.getElementById("rating-input");
    var commentsList = document.getElementById("comments-list");

    if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        var commentText = document.createTextNode(commentInput.value + " - Rating: " + ratingInput.value);
        var li = document.createElement("li");
        li.appendChild(commentText);
        li.classList.add("comment");
        commentsList.appendChild(li);

        // Clear the input fields after adding a comment
        nameInput.value = "";
        emailInput.value = "";
        commentInput.value = "";
        ratingInput.value = "";
    }
}
