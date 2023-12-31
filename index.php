<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>CRUD Formulário</title>
</head>
<body>
    <div class="container">
        <h2>Cadastros</h2>
        
        <form id="crudForm">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <div id="mensagem"></div>

            <button type="button" onclick="criarRegistro()">Criar</button>
            <button type="button" onclick="atualizarRegistro()">Atualizar</button>
            <button type="button" onclick="excluirRegistro()">Excluir</button>
            <button type="button" onclick="carregarRegistros()">Carregar Registros</button>
        </form>
        <button type="button" onclick="excluirRegistro()">Excluir Selecionados</button>

        <div id="registros"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
