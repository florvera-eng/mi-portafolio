function toggleModo() {
  const navbar = document.getElementById("menu");
  const btnModo = document.getElementById("btn-modo");

  if (document.body.classList.contains("modo-claro")) {
    // Cambiar a oscuro
    document.body.classList.remove("modo-claro");
    document.body.classList.add("modo-oscuro");

    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-dark");

    btnModo.textContent = "☀️ Modo claro";
    btnModo.classList.remove("btn-outline-dark");
    btnModo.classList.add("btn-outline-light");
  } else {
    // Cambiar a claro
    document.body.classList.remove("modo-oscuro");
    document.body.classList.add("modo-claro");

    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light", "bg-light");

    btnModo.textContent = "🌙 Modo oscuro";
    btnModo.classList.remove("btn-outline-light");
    btnModo.classList.add("btn-outline-dark");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validación del formulario de contacto
document.getElementById("formContacto").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita envío automático

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validación básica de correo
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor, ingresa un correo válido.");
    return;
  }

  alert("¡Mensaje enviado correctamente!");
  this.reset(); // Limpia el formulario
});
