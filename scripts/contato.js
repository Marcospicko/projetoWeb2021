function botaoPesquisar() {
    let texto = window.document.getElementById('text1');

    if (texto.value == 0) {
        window.alert("[ERROR] você não digitou  nada para fazer a pesquisa !");
    }
}

function retorno() {
    let telefone = document.getElementById('telefone');
    let texto = document.getElementById('texto');
    let assunto = document.getElementById('assunto');

    if (telefone.value == 0 || texto.value == 0 || assunto.value == 0) {
        window.alert("Preencha todos os campos   para poder mandar sua mensagem !")
    } else if (!(telefone.value == 0 && texto.value == 0 && assunto.value == 0)) {
        window.open('finalizarContato.html');
    }
}
let pararAlert = setTimeout(function () {
    alert("você tem 1 minuto para preencher o formulário caso contrario sua página será recarregada...");
}, 1000);

setInterval(function () {
    clearInterval(pararAlert);


}, 1000);

let pararContagem = setInterval(function () {
    window.location.href = "contatos.html";
}, 60000);

setInterval(function () {

    clearInterval(pararConatagem);

}, 60000);


 // evento de mouseover////

 function descobertaDeElementos(){
    var x = document.getElementsByTagName("input");
    document.getElementById("demo").innerHTML = x.length+" são eles o campo ASSUNTO, TELEFONE , DESCRIÇÃO ";
  }
  var inputDoFormulario = document.querySelector('input') ;
  alert(inputDoFormulario.value);