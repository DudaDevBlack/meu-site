function navigate(sectionId) {
    // Remove 'active' de todas as seções e itens do menu
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

    // Adiciona 'active' à seção e ao item de menu clicado
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`.menu-item[onclick="navigate('${sectionId}')"]`).classList.add('active');
}
