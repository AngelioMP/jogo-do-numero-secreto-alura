let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
 
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
mensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroAleatorio) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else if( chute > numeroAleatorio) {
    exibirTextoNaTela('p', 'O número secreto é menor');
    tentativas++;
    limparcampo();
  } else {
    exibirTextoNaTela('p', 'O número secreto é maior');
    tentativas++;
    limparcampo();
  }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;


    if (quantidadeDeElementosNaLista == 3) {
      listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {

      return gerarNumeroAleatorio();
      
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido)
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparcampo() {

  chute = document.querySelector('input');
  chute.value = '';
  
}

function reiniciarJogo() {

  numeroAleatorio = gerarNumeroAleatorio();
  limparcampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  
}
