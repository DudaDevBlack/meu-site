<?php
$host = "localhost"; // Se o MySQL estiver no mesmo servidor
$usuario = "root";
$senha = "Mmekas13#";
$banco = "crud_example";

// Conexão com o banco de dados
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verifica se a conexão foi estabelecida com sucesso
if ($conexao->connect_error) {
    die("Erro de Conexão: " . $conexao->connect_error);
} else {
    echo '<script>document.getElementById("mensagem").innerHTML = "Conexão bem-sucedida com o banco de dados!";</script>';
}
?>
