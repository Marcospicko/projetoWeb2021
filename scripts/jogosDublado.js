///declaração anonima

let baixandoJogos = function () {
    window.alert("Bom aproveito , baixe os melhores jogos  que marcaram sua vida")
}
    baixandoJogos ();

    //return
function cliqueEmImagens() {
        return alert("Por favor para fazer o download clique no texto ao lado da imagem");
}
 //função auto executavel
     ( function () {
       let anoNascimento =2021-prompt("Digite o ano que vc nasceu para que possamos saber se vc tem mais de 10 anos  de idade para poder baixar jogos neste site !");
     
        if(anoNascimento >10) {
            window.alert("Beleza coleguinha você esta apto para baixar os jogos neste site !"); 
        } 
        else if(anoNascimento <10) {
            window.alert("aaaaa que pena que você não tem idade suficientea  a idade mínima para entrar neste site é 10 anos, mas não fique triste vamos te levar para um site aonde você  pode assitir desenhos para sua idade "); 
            window.open('https://www.youtube.com/watch?v=Fn9adh4HWUU');
        }
    }
  )();



//Evento de carregamento do documento - onload

function checkCookies()
{
if (navigator.cookieEnabled==true)
	{
	alert("Cookies são permitidos")
	}
else
	{
	alert("Cookies não são permitidos")
	}
}

///////////////////////////////////////////////////

            //////// getElementsByName()//////////
            
let btn = document.getElementById('btnRate');

btn.addEventListener('click', () => {
    let cotacao = document.getElementsByName('avaliar');
    cotacao.forEach((avaliar) => {
        if (avaliar.checked) {
            alert('O jogo que vc escolheu no caso: '+avaliar.value+' será contabilizado nos votos');
        }
    })
});


