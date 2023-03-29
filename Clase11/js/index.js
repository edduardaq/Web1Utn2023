// alert("Estoy en el js externo");

// num = 5;
// nombre = "Eduar";
// let bandera = true;
// console.log(num);
// console.log(nombre);
// console.log(bandera);

// if(5>3){
//     //var son variables globales

//     var edad = 50;
//     console.log(edad);
// }
// console.log(edad);


// if(5>3){
//     //Let son variables que se definen dentro de un ámbito unicamente

//     let nombre2 = "Eddu";
//     console.log(nombre2);
// }
// console.log(nombre2);
//  var edad = prompt("Ingresa tu edad:");

//  if (edad >= 18) {
//    alert("Eres mayor de edad");
//  } else {
//    alert("Eres menor de edad");
//  }

// const persona={
//     cedula:118970820,
//     nombre:"Eduar",
//     Apellido:"Arias",
//     edad: 19,
//     apellido2:"Quirós"
// }
// alert(JSON.stringify(persona.nombre));
// alert(JSON.stringify(persona.Apellido));
// alert(JSON.stringify(persona.cedula));
// alert(JSON.stringify(persona.edad));

// if(persona.apellido2){
//     alert(persona.apellido2);

// }
// else{
//     alert("No tiene un segundo apellido");
// }

// const lista=["Arroz", "Frijoles", "Maiz", "Atún"];
// const mensaje=`El nombre de la persona es: ${persona.nombre}, y la edad es: ${persona.edad}`;
// alert(mensaje);

// for (let i = 0; i < lista.length; i++) {
//     alert(lista[i]);
//   }

//   lista.forEach((value, index)=>{
//     const mensaje = `El producto es: ${value}, en la posición: ${index}`
//     alert(mensaje);
//   }
//   )

//   lista.map((valol, indice)=>{
//     if(valol=="Atún"){
//         alert("ES ATÚÚÚÚÚÚÚNNNNN")
//     }
//     else{
//         alert("NO ESSSSSSSSSSSSSSSSSSS")
//     }
//   });



const ListaPersona = [
    {
        cedula: 1,
        nombre: "Eduar",
        Apellido: "Arias",
        edad: 19,
        apellido2: "Quirós"
    },
    {
        cedula: 2,
        nombre: "Andrés",
        Apellido: "Mejías",
        edad: 21,
        apellido2: "Ruiz"
    },
    {
        cedula: 3,
        nombre: "Mario",
        Apellido: "Cubero",
        edad:22,
        apellido2: "Quirós"
    },
    {
        cedula: 40,
        nombre: "Pablo",
        Apellido: "Torres",
        edad: 19,
        apellido2: "Quirós"
    },
    {
        cedula: 5,
        nombre: "Kenneth",
        Apellido: "Venegaz",
        edad: 11,
        apellido2: "Quirós"
    },


]

const result = ListaPersona.map((persona, index)=>{
    const nombre = `${persona.nombre} ${persona.Apellido}`;
    return{
        id: index,
        cedula: persona.cedula,
        nombreCompleto: nombre,
        edad: persona.edad
    }

}).filter(x=>x.edad>19);

alert(JSON.stringify(result));



function calcular(){
    
}