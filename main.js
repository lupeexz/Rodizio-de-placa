function placa(){
    const num = document.querySelector('#num').value;
    const dia = document.querySelector('#dia').value;
    const msg = document.querySelector(".msg");


    if((num == 1 || num == 2) && ( dia == "segunda" || dia == "Segunda")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 3 || num == 4) && (dia == "terça" || dia == "Terça")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 5 || num == 6) && (dia == "quarta" || dia == "Quarta")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 7 || num == 8) && (dia == "quinta" || dia == "Quinta")){
        msg.innerHTML = "Não pode dirigir";
    }

    else if((num == 9 || num == 0) && (dia == "sexta" || dia == "Sexta")){
        msg.innerHTML = "Não pode dirigir";
    }

    else{
        msg.innerHTML = "Pode dirigir";
    }
}