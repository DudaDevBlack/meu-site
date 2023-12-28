// Função para lidar com a tecla Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {F
        checkPassword();
    }
}

// Função para mostrar a tela de portfólio e ocultar a tela de login
function showPortfolioScreen() {
    const loginScreen = document.querySelector('.login-screen');
    const portfolioScreen = document.querySelector('.portfolio-screen');

    loginScreen.style.display = 'none';
    portfolioScreen.style.display = 'flex';
}

// Função para mostrar o conteúdo da categoria selecionada
function showCategory(categoryId) {
    // Esconda todos os conteúdos de categoria
    const categoryContents = document.querySelectorAll('.category-content');
    categoryContents.forEach(content => {
        content.style.display = 'none';
    });

    // Mostre o conteúdo da categoria selecionada
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}

// Função para verificar a senha
function checkPassword() {
    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const correctPassword = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    const errorElement = document.querySelector('.error-message');

    if (enteredPassword === correctPassword) {
        // Chama a função para mostrar a tela de portfólio
        showPortfolioScreen();

        // Clicar no botão F11
        document.documentElement.requestFullscreen();
    } else {
        // Exibir mensagem de erro
        if (!errorElement) {
            const loginBox = document.querySelector('.login-box');
            const newErrorElement = document.createElement('p');
            newErrorElement.className = 'error-message';
            newErrorElement.style.color = '#d3d3d3';
            newErrorElement.style.marginTop = '10px';
            loginBox.appendChild(newErrorElement);
        }
        errorElement.textContent = 'Dica da senha: Data de hoje';
    }
}

// Função para alternar a visibilidade da senha
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle img');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.src = 'https://res.cloudinary.com/dudanet/image/upload/v1701915178/icon_ver_senha2-removebg-preview_xf8lf1.png';
    } else {
        passwordInput.type = 'password';
        passwordToggle.src = 'https://res.cloudinary.com/dudanet/image/upload/v1701915177/icon_ocultar_senha2-removebg-preview_tkvpv0.png';
    }
}

// Variável para controlar o modo escuro
let darkMode = false;

// Função para alternar o modo escuro
function toggleDarkMode() {
    darkMode = !darkMode;

    const body = document.body;
    const backgroundImageUrl = darkMode ? 'https://res.cloudinary.com/dudanet/image/upload/t_Banner 16:9/v1701885797/mist-street-light-black-minimalism-wallpaper-preview_osrvt0.jpg' : 'https://res.cloudinary.com/dudanet/image/upload/t_Banner 16:9/v1701841925/coloridos-azuis-arte-digital-imagem-de-fundo_b5hzuf.jpg';
    body.style.backgroundImage = `url('${backgroundImageUrl}')`;

    // Alterar estilo dos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = darkMode ? '#333' : '#0078d4';
        button.style.borderColor = darkMode ? '#666' : '#0078d4';
    });

    // Alterar estilo do ícone
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    darkModeIcon.src = 'https://cdn-icons-png.flaticon.com/512/5262/5262027.png';

    // Atualizar a foto de perfil
    const profilePicture = document.getElementById('profile-picture');
    profilePicture.style.backgroundImage = `url('${darkMode ? 'https://res.cloudinary.com/dudanet/image/upload/v1701974234/dark_img_profile_qoh7l9.png' : 'https://res-console.cloudinary.com/dudanet/thumbnails/v1/image/upload/v1701839344/V2hhdHNBcHBfSW1hZ2VfMjAyMy0xMi0wNl9hdF8wMi4wNy4yNV9kZHZqanI=/grid_landscape'}')`;
}

// Função para fechar a aba (Ctrl + W)
function closeTab() {
    window.close();
}


// Adicione ao final do script.js
function showProjectsMenu() {
    const projectsMenu = document.querySelector('.projects-menu');
    const profileContainer = document.querySelector('.profile-container');
    const technologiesIcons = document.querySelector('.technologies-icons');

    projectsMenu.style.display = 'flex';
    profileContainer.style.display = 'none';
    technologiesIcons.style.display = 'none';

   }

function showProfileAndTechnologies() {
    const profileContainer = document.querySelector('.profile-container');
    const technologiesIcons = document.querySelector('.technologies-icons');
    const projectsMenu = document.querySelector('.projects-menu');
    const backButton = document.querySelector('button');

    profileContainer.style.display = 'flex';
    technologiesIcons.style.display = 'flex';
    projectsMenu.style.display = 'none';

    // Remover botão "Voltar"
    if (backButton) {
        document.body.removeChild(backButton);
    }
}

function navigateToProject(description) {
    const projectDescription = document.getElementById('project-description');
    projectDescription.textContent = description;
    projectDescription.style.display = 'block';

    showProjectsMenu(); // Mostrar o menu de projetos ao clicar em um projeto
}
