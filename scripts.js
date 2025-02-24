const API_URL = "https://backmitosyleyendas.vercel.app/";  // Reemplaza con la URL de tu backend

document.getElementById("subscriptionForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();

    if (!validarEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        alert(`¡Gracias por suscribirte, ${email}!`);
    } catch (error) {
        alert("Hubo un error al suscribirse, intenta nuevamente.");
        console.error("Error:", error);
    }
});

// Función para validar correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
