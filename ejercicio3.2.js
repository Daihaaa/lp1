let listaCompras = [];

listaCompras.push("Leche", "Pan", "Manzanas");

listaCompras[1] = "Bananas";
listaCompras[2] = "Huevos";

listaCompras.pop();

listaCompras.sort();

let indiceLeche = listaCompras.indexOf("Leche");
console.log("Índice de 'Leche':", indiceLeche);

listaCompras.splice(indiceLeche + 1, 0, "Zanahorias", "Lechuga");

let nuevaLista = ["Jugo", "Refresco"];

listaCompras = listaCompras.concat(nuevaLista, nuevaLista);

let ultimoIndicePop = listaCompras.lastIndexOf("Refresco");
console.log("Último índice de 'Refresco':", ultimoIndicePop);

console.log("Lista final de compras:", listaCompras);
