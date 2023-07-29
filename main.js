const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar") {
            if (pantalla.textContent.length === 1) { // para que cuando quede un numero se vuelva 0
                pantalla .textContent = "0";

            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); // para que cuando tengamos mas de uno se borre el del final
            }
            return;

         }

        if (boton.id === "igual") { // para las operaciones
            pantalla.textContent = eval(pantalla.textContent);
            return
        }

        if (pantalla.textContent === "0") {
            pantalla.textContent = botonApretado; // para remplazarlo cuando este en 0

        } else {
            pantalla.textContent += botonApretado; // para sumarle numeros cuando no este el 0
        }
        
    })
})