function atualizarValor(input) {
  // Obtém o ID do item a partir do ID do input
  var itemId = input.id.replace("item", "");

  // Obtém o elemento span que exibe o valor
  var valorElement = document.getElementById("valorItem" + itemId);

  // Obtém o valor do input
  var quantidade = parseInt(input.value);

  // Atualiza o valor multiplicando a quantidade pelo preço
  switch(itemId) {
      case "1":
          var preco = 79.90;
          break;
      case "2":
          var preco = 15;
          break;
      case "3":
          var preco = 20;
          break;
      default:
          var preco = 0;
  }

  var novoValor = quantidade * preco;

  // Formata o novo valor como uma string de preço (pode ser ajustado conforme necessário)
  var novoValorFormatado = "R$ " + novoValor.toFixed(2);

  // Atualiza o conteúdo do elemento span
  valorElement.textContent = novoValorFormatado;
}



 // Função que será chamada quando o botão for clicado
 function alterarValor() {
  // Seleciona o elemento span que contém o número
  var numeroElemento = document.getElementById("numeroo");

  // Obtém o valor atual do número
  var valorAtual = parseInt(numeroElemento.textContent);

  // Incrementa o valor atual
  var novoValor = valorAtual + 1;

  // Atualiza o texto do número com o novo valor
  numeroElemento.textContent = novoValor;
}

// Adiciona um evento de clique ao botão
document.getElementById("botaao").addEventListener("click", alterarValor);