<?php
include("conexao.php");

// Obtenha os dados do POST
$nome = $_POST["nome"];
$email = $_POST["email"];

// Execute a inserção no banco de dados
$sql = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";
$resultado = $conexao->query($sql);

// Verifique se a inserção foi bem-sucedida
if ($resultado) {
    echo "Registro criado com sucesso!";
} else {
    echo "Erro ao criar registro: " . $conexao->error;
}

// Feche a conexão
$conexao->close();
?>
