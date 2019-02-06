  let tabuada = 3; // Unidade da Tabuada
  let operador = 'adicao'; // Tipo de cálculo (o padrão é adição)
  let i = 1; // Configura o contador como 1
  let mensagem = ''; // Mensagem

  if (operador === 'adicao') { // Se a variavel operador for 'adicao'
    while(i < 11) { // Enquanto o contador for menor que 11
      mensagem += `${i} + ${tabuada} = ${i + tabuada} <br />`; // Calculo
      i++; // Soma 1 ao contador
    }
  }
