let arrDeFiguras = ["circulo", "triangulo", "rectangulo", "pentagono"];
console.log({arrDeFiguras});

arrDeFiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDeFiguras);

//experimento de traer solamente 
//"circulo" , "triangulo" y "cuadrado"
const cortadito_1 = arrDeFiguras.splice(0, 2);

//borrar elementos
arrDeFiguras.splice(2, 4, "rombo");
console.log(arrDeFiguras);

