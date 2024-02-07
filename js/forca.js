let numeroTentativas = 6;
let palavraSecretaDica;
let palavraSecretaSorteada;
let listaTracinhos = [];


const palavras = [
    palavra001 = {
        nome: "BURI",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "CATU",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome: "EMAS",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome: "ERMO",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome: "IAPU",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome: "ICHU",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome: "JACI",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome: "JAPI",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome: "JARI",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome: "PATU",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome: "MOTO",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome: "CARRO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "BALSA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome: "CANOA",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome: "AVIAO",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome: "DRONE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome: "BIKE",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome: "MESA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome: "CAMA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome: "PORTA",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome: "LIVRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome: "PRATO",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome: "ROUPA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome: "COPO",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome: "ACAI",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome: "CAJU",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome: "AMORA",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome: "CAQUI",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome: "FIGO",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome: "JACA",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome: "KIWI",
        categoria:"ALIMENTOS"
    },
    palavra038 = {
        nome: "LIMA",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome: "MANGA",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "MELAO",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome: "GATO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome: "ALCE",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome: "ANTA",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome: "ACO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome: "BURRO",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome: "CABRA",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome: "LHAMA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome: "LINCE",
        categoria:"ANIMAIS"
    },
    palavra051 = {
        nome: "MASH",
        categoria:"TV E CINEMA"
    },
    palavra052 = {
        nome: "SWAT",
        categoria:"TV E CINEMA"
    },
    palavra053 = {
        nome: "CUBA",
        categoria:"TV E CINEMA"
    },
    palavra054 = {
        nome: "VIDA",
        categoria:"TV E CINEMA"
    },
    palavra055 = {
        nome: "NYPD",
        categoria:"TV E CINEMA"
    },
    palavra056 = {
        nome: "NCIS",
        categoria:"TV E CINEMA"
    },
    palavra057 = {
        nome: "RAID",
        categoria:"TV E CINEMA"
    },
    palavra058 = {
        nome: "JAWS",
        categoria:"TV E CINEMA"
    },
    palavra059 = {
        nome: "CHIPS",
        categoria:"TV E CINEMA"
    },
    palavra060 = {
        nome: "ALIEN",
        categoria:"TV E CINEMA"
    }
];

gerarPalavraAleatoria();
function gerarPalavraAleatoria(){
    const palavraAleatoria = parseInt(Math.random()* palavras.length)
   
    palavraSecretaSorteada = palavras[palavraAleatoria].nome;
    palavraSecretaDica = palavras[palavraAleatoria].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaDica);
}
mostrarPalavraNaTela();
function mostrarPalavraNaTela(){
    const dica = document.getElementById("dica-palavra"); // pega o elemento por seu id
    dica.innerHTML = palavraSecretaDica;

    const palavraSecreta = document.getElementById("palavra-secreta");
    palavraSecreta.innerHTML = "";

    for(let i=0; i<palavraSecretaSorteada.length; i++){
        if(listaTracinhos[i]==undefined){
            listaTracinhos[i] = '&nbsp;' //gera espaço
            palavraSecreta.innerHTML = palavraSecreta.innerHTML+"<div class='letras'>"+ listaTracinhos[i]+"</div>"
        }
        else{
            palavraSecreta.innerHTML = palavraSecreta.innerHTML+"<div class='letras'>"+ listaTracinhos[i]+"</div>"
        }
    }
}

function LetraEscolhida(letra){
    document.getElementById('letra-' + letra).disabled = true;
        
    if(numeroTentativas>0){

        mudarEstilo('letra-' + letra);
        ComparaLetraNaLista(letra);
        mostrarPalavraNaTela();
    }
}

function mudarEstilo(letra){
    document.getElementById(letra).style.background = '#7B68EE';
    document.getElementById(letra).style.color = '#ffffff';
}
 function ComparaLetraNaLista(letra){
    const posicao = palavraSecretaSorteada.indexOf(letra); //verifica se letra existe na palavra e retorna posição
    if(posicao<0){
        numeroTentativas--
        montaBonequinhoErro();
    
        if(numeroTentativas==0){

            iniciaModal("Que pena", "não foi dessa vez,... a palavra era   <br>" +palavraSecretaSorteada);
        
        }
       
       

    }else{
        for(let i=0;i<palavraSecretaSorteada.length;i++){
            if(palavraSecretaSorteada[i] == letra){
                listaTracinhos[i]= letra;
            }
        }
    }
    let vitoria = true;
    for(let i=0;i<palavraSecretaSorteada.length;i++){
        if(palavraSecretaSorteada[i] != listaTracinhos[i]){
            vitoria= false;
        }
    }

    if(vitoria==true){
        //mensagem vitória;
        iniciaModal("Obaa", "Você acertou, a palavra era mesmo <br> " + palavraSecretaSorteada)
        numeroTentativas=0;
    }
}
function montaBonequinhoErro(){
    switch(numeroTentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./img/forca01.png')";
            break;
        
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')";
            break;
        
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')";
            break;
        
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')";
            break;
        
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')";
            break;
        
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca06.png)";
            break;
        
        default:
            document.getElementById('imagem').style.background = "url('./img/forca.png)";
            break;
        
    }
}
function iniciaModal(titulo, mensagem){

    let TituloModal= document.getElementById('exampleModalLabel');
    TituloModal.innerText = titulo;

    let MensagemModal = document.getElementById('modalBody');
    MensagemModal.innerHTML= mensagem;
    $("#myModal").modal({show: true});
}

//reiniciar jogo
let reiniciar = document.getElementById('btn-reiniciar');
reiniciar.addEventListener('click', function(){
    location.reload();
});










