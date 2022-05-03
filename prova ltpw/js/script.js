function calc(){
    //entrada
    horario = document.form.horario.value;

    //processamento
    if(horario == "manhã"){
        valor = 31;
    }
    else if (horario == "tarde"){
        valor = 36;
    }
    else{
        valor = 41;
    }
    
    //saída
    document.getElementById('total').value = valor;

    document.getElementById('pipoca').checked = false;
    document.getElementById('bebidas').checked = false;
    document.getElementById('guloseimas').checked = false;
}
  function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    //saída
    document.getElementById('total').value = total;
}
function trocarFilme(){
    //entrada
    filme = document.getElementById('filme').value;

    //processamento
    if (filme == "jujutsu") {
        newFundo = "img/jujutsukaisen.jpg";
        newFoto = "";
        titulo = "Jujutsu Kaisen";
        cor = "red";

        altura = "85%";
        right = "0%";
        bottom = "-5%";
      }
    else if (filme == "animais"){
        newFundo = "img/animaisfantasticos.jpg";
        newFoto = "";    
        titulo = "Animais Fantásticos e os Segredos de Dumbledore";
        cor = "orange";

        altura = "90%";
        right = "5%";
        bottom = "-5%";
    }
    else if(filme == "doutor"){
        newFundo = "img/doutorestranho.jpg";
        newFoto = "";    
        titulo = "Doutor Estranho no Multiverso da Loucura";
        cor = "green";

        altura = "85%";
        right = "-2%";
        bottom = "0%";
    }
    else{
        newFundo = "";
        newFoto = "";    
        titulo = "";
        cor = "black";

        altura = "100%";
        right = "0%";
        bottom = "0%";
    }
    //saida
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;
}
function alerta(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 31){
        msg = "Selecione o Horário da Festa."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 66) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}

