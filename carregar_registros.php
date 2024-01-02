<?php
include("conexao.php");

// Execute uma consulta para obter registros do banco de dados
$sql = "SELECT * FROM usuarios";
$resultado = $conexao->query($sql);

// Construa uma tabela HTML com os resultados
echo "<table border='1'>";
echo "<tr><th>ID</th><th>Nome</th><th>Email</th></tr>";

while ($linha = $resultado->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $linha["id"] . "</td>";
    echo "<td>" . $linha["nome"] . "</td>";
    echo "<td>" . $linha["email"] . "</td>";
    echo "</tr>";
}

echo "</table>";

// Feche a conexão
$conexao->close();
?>
