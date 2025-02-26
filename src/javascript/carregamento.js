window.onload = function () {
  const loadingText = document.getElementById("loading-text");
  const loadingScreen = document.getElementById("loading-screen");
  const container = document.getElementById("container");

  setTimeout(() => {
      loadingText.textContent = "Concluído!";
      
      // Aguarda mais 2 segundos antes de exibir o conteúdo e ocultar o loading
      setTimeout(() => {
          loadingScreen.style.display = "none";
          container.style.display = "block";
      }, 2000);
  }, 2000);
};