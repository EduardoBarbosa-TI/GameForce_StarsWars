const partesDoBoneco = Array.from(document.querySelectorAll(".parte-do-boneco"));

const clickBtn = document.querySelector("#btn");

const chutesEfetuados = []
const palavra = "uma palavra";
let errosCometidos = 0;
const quantidadeMaximaDeErrors = partesDoBoneco.length;

mostrarPalavra()

function mostrarPalavra(){
    let palavraMostrada = " ";

    for(let i = 0; i < palavra.length; i = i + 1 ){
        if(chutesEfetuados.includes(palavra[i])){
            palavraMostrada = palavraMostrada + '<span class="letra">' + palavra[i] + "</span>"
        } else if(palavra[i] === " ") {
            palavraMostrada = palavraMostrada + " ";
        }  else{
            palavraMostrada = palavraMostrada + '<span class="letra">_</span>';
        }
    }
    document.querySelector(".palavra").innerHTML = palavraMostrada;
}

clickBtn.addEventListener("click", () => {

    if(errosCometidos === quantidadeMaximaDeErrors) {
        alert("Você perdeu !!");
        return;
    }

    const chute =  prompt("Qual é o seu Chute");

    if(chutesEfetuados.includes(chute)){
        alert("Chute ja efetuado");
        return; 
    }

    chutesEfetuados.push(chute);
    
    if(palavra.includes(chute)){
        mostrarPalavra(); 
    } else {
        errosCometidos = errosCometidos + 1;

        for(let i = 0; i < errosCometidos; i = i + 1){
            partesDoBoneco[i].classList.add("mostrar");
        }

        if(errosCometidos === quantidadeMaximaDeErrors) {
            alert("Você perdeu !!");
        } else {
            alert("Chute errado, tente novamente !!");
        }
    }
})