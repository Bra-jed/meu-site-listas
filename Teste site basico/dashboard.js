document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
  }

  const logoutBtn = document.getElementById("logoutButton");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const username = localStorage.getItem("username") || "usuário";

  welcomeMessage.textContent = `Bem-vindo, ${username}! Espero que tenha uma boa estadia.`;

  logoutBtn.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja sair?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      window.location.href = "index.html";
    }
  });
});

const themeSelector = document.getElementById("themeSelector");

const themes = {
  default: {
    "--bg-color": "#f0f4f8",
    "--primary-color": "#a8d8ea",
    "--primary-hover": "#89c4d9",
    "--text-color": "#6c7b8c",
    "--card-bg": "#ffffff",
    "--text-light": "#ffffff"
  },
  dark: {
    "--bg-color": "#1e1e1e",
    "--primary-color": "#333",
    "--primary-hover": "#1e1e1f",
    "--text-color": "#ffffff",
    "--card-bg": "#1e1e1f",
    "--text-light": "#ffffff"
  },
  pastel: {
    "--bg-color": "#fef6e4",
    "--primary-color": "#f3d2c1",
    "--primary-hover": "#eccdb4",
    "--text-color": "#001858",
    "--card-bg": "#ffffff",
    "--text-light": "#001858"
  }
};

function applyTheme(themeName) {
  const theme = themes[themeName];
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  localStorage.setItem("selectedTheme", themeName);
}

// Aplicar tema salvo
const savedTheme = localStorage.getItem("selectedTheme") || "default";
themeSelector.value = savedTheme;
applyTheme(savedTheme);

// Alterar tema ao selecionar
themeSelector.addEventListener("change", (e) => {
  applyTheme(e.target.value);
});
