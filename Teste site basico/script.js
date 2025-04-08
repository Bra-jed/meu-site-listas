document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores dos campos
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simular um simples login
  const validUsername = "admin";
  const validPassword = "12345";

  const errorMessage = document.getElementById("error-message");

  if (username === validUsername && password === validPassword) {
    // Salva no localStorage que o usuário está autenticado
    localStorage.setItem("isLoggedIn", "true");

    // Redireciona para a página de dashboard
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Usuário ou senha inválidos.";
  }
});
