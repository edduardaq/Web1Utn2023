var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
        console.log("QUACK!!!");
    }
};
var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
        console.log("Estoy encantado de conocerle.");
    }
};
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
        console.log("Hi there!");
    }
};


//Acá declaramos el arreglo que contiene la información de los tres pinguinos.
const pinguinos = [fred, ramon, gunter];


//For que recorre los pinguinos e imprime los nombres únicamente.
for (var i = 0; i < pinguinos.length; i++) {
    console.log("El nombre del pinguino es:", pinguinos[i].name);
}

//Estamos imprimiendo la longitud de la matriz que se llama pinguinos
console.log("La longitud de la matriz de pinguinos es: ", pinguinos.length);


//Recorrer la matriz y asignar un número de patas aleatorio a un nuevo campo llamado numberOfFeet
for (let i = 0; i < pinguinos.length; i++) {
    const numberOfFeet = Math.floor(Math.random() * 5) + 1;
    pinguinos[i].numberOfFeet = numberOfFeet;
}


//Recorrer matriz e imprimir si el pinguino puede volar
for (let i = 0; i < pinguinos.length; i++) {
    if (pinguinos[i].canFly == true) {
        console.log(pinguinos[i].name + " puede volar!");
    }
}


//Manera de agregar un arreglo de comidas favoritas a los objetos
fred.favoriteFoods = ["Pescado", "Camarones", "Krill"];
ramon.favoriteFoods = ["Plancton", "Lula", "Anchoas"];
gunter.favoriteFoods = ["Pulpitos", "Peces", "Calamares"];


//Manera de imprimir la segunda comida favorita de cada pinguino
for (let i = 0; i < pinguinos.length; i++) {
    console.log("La segunda comida favorita de "+pinguinos[i].name + " es " + pinguinos[i].favoriteFoods[1]);
}


//Forma de reemplazar la última comida de cada pinguino por "Piña"
for (let i = 0; i < pinguinos.length; i++) {
    pinguinos[i].favoriteFoods[pinguinos[i].favoriteFoods.length-1]= "Piñas";
}

//Imprimir la última comida de los pinguinos para probar la función anterior
for (let i = 0; i < pinguinos.length; i++) {
    console.log("La última comida favorita de "+pinguinos[i].name + " es " +pinguinos[i].favoriteFoods[pinguinos[i].favoriteFoods.length-1]);
}

//Forma de imprimir todas las comidas favoritas que tienen los pinguinos
for (var i = 0; i < pinguinos.length; i++) {
    console.log("A " + pinguinos[i].name + " le gusta:");
    for (var j = 0; j < pinguinos[i].favoriteFoods.length; j++) {
      console.log(pinguinos[i].favoriteFoods[j]);
    }
    console.log("\n");
  }
  


