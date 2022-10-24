const clickBtn = document.querySelector("#btn");


clickBtn.addEventListener("click", () => {
    const chute =  prompt("Qual é o seu Chute");

    const chutesEfetuados = []
    const palavra = "uma palavra"

    if(chutesEfetuados.includes(chute)){
        alert("Chute ja efetuado");
        return; 
    }

    chutesEfetuados.push(chute);
    
    if(palavra.includes(chute)){

        let palavraMostrada = "";

        for(let i = 0; i < palavra.length; i - i + 1 ){
            if(chutesEfetuados.includes(palavra[i])){
                palavraMostrada = '<span class="letra">' + palavra[i] + '</span>'
            }  
        }
        alert(palavraMostrada);
    }
   
})



