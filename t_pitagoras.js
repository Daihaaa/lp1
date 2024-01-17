// obtener valores de los lados a y b 
let ladoA = parseFloat(prompt("ingresa el valor del lado A:"));
let ladoB = parseFloat(prompt("ingresa el valor del lado B:"));

//calcular la hipotenusa usando el teorema de pitagoras
let hipotenusa = Math.sqrt(Math.pow(ladoA, 2)+Math.pow(ladoB, 2));

console.log("La hipotenusa es: " + hipotenusa);