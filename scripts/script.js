//Se nombran los elementos
let boton = document.querySelector("button");
let textoResultado = document.getElementById("Resultado");

//Se declaran las variables con las entradas de texto
let A1 = document.getElementsByName("Ant1")[0].value;
let A2 = document.getElementsByName("Ant2")[0].value;
let C1 = document.getElementsByName("Con1")[0].value;
let C2 = document.getElementsByName("Con2")[0].value;


function calcular() {
    //Se verifica la igualdad entre ambas razones
    if (A1 / C1 === A2 / C2) {
        /*
        Se asigna a la variable resultado el valor de la primera razon.
        Posteriormente se  muestra el resultado en la pagina
        */
        let resultado = A1 / C1;
        textoResultado.textContent = "El resultado es: " + resultado;
    } else {
        //Se  muestra en un parrafo que el texto no es proporcional
        textoResultado.textContent = "No es proporcional";
    };
};

boton.onclick = function() {
    calcular();
};
