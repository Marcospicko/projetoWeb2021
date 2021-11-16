
function game(event) {
  var x = event.charCode || event.keyCode;
  if (x == 111 || x == 79) {  // o is 111, O is 79
    window.open('campeao.html');
  } else if ( x == 65 || x == 97 ) {
    window.open('gameOver.html');
  }
  else if ( x == 101 || x == 69 ) {
    window.open('gameOver.html');
  }
  else if ( x == 105 || x == 73 ) {
    window.open('gameOver.html');
  }
  else if ( x == 117 || x == 85 ) {
    window.open('gameOver.html');
  }

  /* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_charcode 
  para saber qual o unicod usar usei este link para combinar com a ideia do jogo online  */
}


function focusFunction() {
document.getElementById("myInput").style.background = "green";
}

// Sem foco = Altera a cor de fundo da entrada para azul
function blurFunction() {
document.getElementById("myInput").style.background = "Blue";
}

///////////////////////////////////////////////////////

                        /* seta Gorda */

/* const jogos = (jogos, capinha) => {
  return jogos +  capinha;
}
console.log(jogos(1, 4)); */

const sum = (jogos,capinha) => jogos + capinha; 
console.log('R$' +sum(1, 4)+',00');

/////////////////////////////////////////////////////////////////////////////
