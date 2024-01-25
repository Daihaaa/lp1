//definiendo la funcion
function decirhola() {
console.log("holisssss");


}

    function otraFuncion() {
        alert("soy una alertita");
    }
//lo que esta dentro delparentesis se llama parametro y es por defecto
function decirNombre(nombre="") {
    console.log(`el nombre ingresadoes ${nombre}`);
}
//funcionees anonimas
const recibiendoFuncionAnonima = function() { console.log("Soy una funcion anonima")}
//invocar o llamar
decirhola();
otraFuncion();
decirNombre("abii")
decirNombre();
