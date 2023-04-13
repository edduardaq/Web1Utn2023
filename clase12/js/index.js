function validar(){

    input = document.getElementById('nombre').value;

    if(input===""){
        alert('Falta el nombre')
        document.getElementById('nombre').focus();
        return false;
    }

    input = document.getElementById('primerapellido').value;

    if(input===""){
        alert('Falta el Primer Apellido')
        document.getElementById('primerapellido').focus();
        return false;
    }
    
    input = document.getElementById('segundoapellido').value;

    if(input===""){
        alert('Falta el segundo Apellido')
        document.getElementById('segundoapellido').focus();
        return false;
    }

    input= document.getElementById('edad').value;
    if(!isNaN(input)){
        alert('Falta la edad')
        document.getElementById('edad').focus();
        return false;
    }


input= document.getElementById('color').selectindex;
if(input==0){
    alert('Debe escoger un color')
    document.getElementById('color').focus();
    return false;

}

valor = document.getElementById("campo").value; 
if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)) ) { 
alert('No tiene formato de correo')
document.getElementById('correo').focus();
 return false; 
} 





}






// validar=>{
//     alert('ffff')
// }