document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var commentInput = document.getElementById("comment");
    var nameInput = document.getElementById("name"); // Obtener el campo de nombre
    var commentText = commentInput.value;
    var nameText = nameInput.value; // Obtener el nombre del usuario

    if (commentText.trim() !== "" && nameText.trim() !== "") { // Verificar si se ingresó un comentario y un nombre
        addComment(nameText, commentText); // Llamar a la función addComment con el nombre y el comentario
        commentInput.value = ""; // Limpiar el campo de comentario después de enviar
        nameInput.value = ""; // Limpiar el campo de nombre después de enviar
    }
});

function addComment(name, commentText) {
    var commentsContainer = document.getElementById("comments-container");
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = name + ": " + commentText; // Mostrar el nombre junto con el comentario
    commentsContainer.appendChild(commentDiv);
}
