document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Aquí deberías realizar las comprobaciones de autenticación y redirección segura.
        // Por ejemplo, podrías hacer una petición a un servidor para verificar las credenciales.
        // No incluiré esta parte en el ejemplo ya que es crucial para la seguridad de la aplicación.
    });
});
