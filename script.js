// Script JavaScript

// Função para lidar com a tecla Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
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

        errorElement.textContent = 'Dica sobre a senha: Data atual';
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
    const backgroundImageUrl = darkMode ? 'https://res-console.cloudinary.com/dudanet/thumbnails/v1/image/upload/v1701885797/bWlzdC1zdHJlZXQtbGlnaHQtYmxhY2stbWluaW1hbGlzbS13YWxscGFwZXItcHJldmlld19vc3J2dDA=/grid_landscape' : 'https://res-console.cloudinary.com/dudanet/thumbnails/v1/image/upload/v1701885797/Y29sb3JpZG9zLWF6dWlzLWFydGUtZGlnaXRhbC1pbWFnZW0tZGUtZnVuZG9fdWU5ZXBz/grid_landscape';
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

    // Alterar rótulo do modo
    const modeLabel = document.querySelector('.mode-label');
    modeLabel.textContent = darkMode ? 'Dark Mode' : 'Light Mode';

    // Atualizar a foto de perfil
    const profilePicture = document.getElementById('profile-picture');
    profilePicture.style.backgroundImage = `url('${darkMode ? 'https://res.cloudinary.com/dudanet/image/upload/v1701974234/dark_img_profile_qoh7l9.png' : 'https://res-console.cloudinary.com/dudanet/thumbnails/v1/image/upload/v1701839344/V2hhdHNBcHBfSW1hZ2VfMjAyMy0xMi0wNl9hdF8wMi4wNy4yNV9kZHZqanI=/grid_landscape'}')`;
}

// Função para fechar a aba (Ctrl + W)
function closeTab() {
    window.close();
}

// Função para criar os botões de categorias
function createCategoryButtons() {
    const categoriesContainer = document.querySelector('.categories');

    // Adicione quantos botões de categoria forem necessários
    const categoriesData = [
        { id: 'category1', label: 'Categoria 1', image: 'URL_DA_IMAGEM1', url: 'URL_DA_CATEGORIA1' },
        { id: 'category2', label: 'Categoria 2', image: 'URL_DA_IMAGEM2', url: 'URL_DA_CATEGORIA2' },
        { id: 'category3', label: 'Categoria 3', image: 'URL_DA_IMAGEM3', url: 'URL_DA_CATEGORIA3' },
        // Adicione mais categorias conforme necessário
    ];

    categoriesData.forEach(category => {
        const button = document.createElement('button');
        button.innerHTML = `
            <img src="${category.image}" alt="${category.label}">
            <span>${category.label}</span>
        `;
        button.addEventListener('click', () => {
            // Chama a função para mostrar o conteúdo da categoria
            showCategory(category.id);
            // Adicione aqui a lógica para redirecionar para a URL da categoria
            window.location.href = category.url;
        });

        categoriesContainer.appendChild(button);
    });
}
