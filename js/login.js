document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Array de objetos de usuários com nome de usuário e senha correspondente
  const users = [
    { username: 'aluno@damas', password: 'senha123' },
    { username: 'aluno@damas.com', password: 'aluno2022' },
    { username: 'kaiquegregoo@gmail.com', password: 'amor87341454' },

    // Adicione mais usuários aqui conforme necessário
  ];

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  // Verificar se o usuário e a senha correspondem a algum usuário no array
  const matchedUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

  if (matchedUser) {
    // Redirecionar para outra página após o login bem-sucedido
    window.location.href = 'notas.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
})

document.addEventListener("DOMContentLoaded", function() {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const denyButton = document.getElementById("deny-cookies");

  acceptButton.addEventListener("click", function() {
      // Aqui você pode adicionar lógica para definir um cookie de aceitação
      cookieBanner.style.display = "none"; // Oculta o banner de cookies após aceitar
  });

  denyButton.addEventListener("click", function() {
      // Aqui você pode adicionar lógica para tratar a negação de cookies
      cookieBanner.style.display = "none"; // Oculta o banner de cookies após negar
  });
});


