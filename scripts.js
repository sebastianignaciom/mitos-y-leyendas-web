document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    if (email) {
        alert("¡Gracias por suscribirte, " + email + "!");
    } else {
        alert("Por favor, ingresa un correo electrónico.");
    }
});
