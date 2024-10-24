document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const defaultUser = {
        username: 'admin',
        password: 'admin123'
    };

    if (username === defaultUser.username && password === defaultUser.password) {
        window.location.href = '/src/views/mainPage.html'; // Redireciona para a página principal
    } else {
        document.getElementById('loginError').textContent = 'Usuário ou senha incorretos';
    }
});
