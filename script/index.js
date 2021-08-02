// // ♣-. Primer problema
//     const var1 = 5;
//     const var2 = 4;


// function mayorMenor(){

//  if (var1>var2){
//       console.log(var1,'es mayor y',var2,'es menor');
//   }else{
//      if(var1 === var2){
//          console.log(var1,'y',var2,'son iguales');
//      }else{
//       console.log(var2,'es mayor y',var1,'es menor');
//   }
//  } 
// }

// // ♣-. Segundo problema
// if(typeof(var1) === "number" && var1>=0 && typeof(var2) === "number" && var2>=0){
//     console.log('la variable es correcta var1 tiene el valor de',var1,'con el valor tipo',typeof(var1),'y la var2 con un valor de',var2,'tipo',typeof(var2));
//     mayorMenor();
// }else{
//     console.log('la variable var1 tiene el valor de',var1,'con el valor tipo',typeof(var1),'y la var2 con un valor de',var2,'tipo',typeof(var2)  );
// }

// // ♣-. Tercer Problema
// function sumar(){
//     
//    let numero1 = document.getElementById("numero1").value;
//    let numero2 = document.getElementById("numero2").value;

     

  
//    for(aumento = numero1;  aumento <= numero2 ; aumento++){
       
//     console.log(aumento);


//    }
   
//   }

//   ♣-. cuarto Problema
// function sumar(){
// let numero1 = document.getElementById("numero1").value;

// for(aumento = 1;  aumento <= 10 ; aumento++){
       
//         const tabla =  numero1*aumento;


//         console.log(tabla);
    
    
//        }

// }


//♣-. quinto Problema

//  let valor = document.querySelector('.valor')


//  function sumar(){
//      var numero1 = document.getElementById("numero1").value;
//  var numero2 = document.getElementById("numero2").value;
  
//  resultado = parseFloat(numero1)+parseFloat(numero2);
//         console.log(resultado);
//         alert("el resultado es:"+ resultado);
//          valor.innerHTML = resultado;
//  }
//  function restar(){
//      var numero1 = document.getElementById("numero1").value;
//  var numero2 = document.getElementById("numero2").value;
//      resultado =parseFloat(numero1)-parseFloat(numero2); 
//      console.log(resultado);
//      alert("el resultado es:"+ resultado);
//      valor.innerHTML = resultado;

//  }
//  function multiplicar(){
//      var numero1 = document.getElementById("numero1").value;
//  var numero2 = document.getElementById("numero2").value;

//      resultado = parseFloat(numero1)*parseFloat(numero2);  
//      console.log(resultado);
//      alert("el resultado es:"+ resultado);
//      valor.innerHTML = resultado;

//  }
//  function dividir(){
//      var numero1 = document.getElementById("numero1").value;
//      var numero2 = document.getElementById("numero2").value;
//      resultado =parseFloat(numero1)/parseFloat(numero2);
//      console.log(resultado);
//      alert("el resultado es:"+ resultado);
//      valor.innerHTML = resultado;

//  }





 //   ♣-. sexto Y septimo Problema


//  function array(){    
//      let numero1 = document.getElementById("numero1").value;
//      let  numero2 = document.getElementById("numero2").value;
//      let  numero3 = document.getElementById("numero3").value;
//      let  numero4 = document.getElementById("numero4").value;
//      let  numero5 = document.getElementById("numero5").value;



//     let valor = document.querySelector('.valor')

    
//     var arreglo = new Array (numero1, numero2 , numero3, numero4, numero5);


// ♣-. Octavo Problema    
//  arreglo.sort();
//   console.log(arreglo);

//   valor.innerHTML = arreglo;

//  };

 //   ♣-. noveno Problema

//  function Object(){    /*PROBLEMA EDITADO DE SER ARRAY A OBJECT*/
//   let numero1 = document.getElementById("numero1").value,
//       numero2 = document.getElementById("numero2").value,
//       numero3 = document.getElementById("numero3").value,
//       numero4 = document.getElementById("numero4").value,
//       numero5 = document.getElementById("numero5").value;

//       return{numero1,numero2,numero3,numero4,numero5};

//  }






//  function buscar(){
//     let numbers = Object();

//     var arreglo = new Array (numbers.numero1, numbers.numero2 , numbers.numero3, numbers.numero4, numbers.numero5); 

//     let busqueda = document.getElementById("busqueda").value;
//     let valor = document.querySelector('.valor');
//     const Negacion = "Aqui no hay nada de eso";
//     const Afirmacion ="Aqui está lo que buscas";

//      console.log(arreglo);
//      if(arreglo.includes(busqueda)){
//          console.log("True");
//          valor.innerHTML=Afirmacion;
//      }
//      else{console.log("False");
//      valor.innerHTML=Negacion;
//     };
     
    
//  }

// // ♣-. Decimo Problema
// function validar() {
    
    
//     var err_name = document.getElementById("err_name");
//     var err_lastname = document.getElementById("err_lastname");
//     var err_age = document.getElementById("err_age");
//     var nombre, apellidos, edad;
//      nombre = document.getElementById("nombre").value;
//      apellidos = document.getElementById("apellidos").value;
//      edad = document.getElementById("edad").value;
   

//     if (nombre === "" || nombre.length > 20) {
//         err_name.innerHTML = " Por favor, escriba su Nombre correctamente.";


        
//         return false;
//     } else {
//         err_name.innerHTML = "";
//     }
//     if (apellidos === "") {
//         err_lastname.innerHTML = " Por favor, escriba sus Apellidos";

        
//         return false;
//     } else {
//         err_lastname.innerHTML = "";
//     }
//     if (edad === "") {
//         err_age.innerHTML = " Por favor, escriba su Edad";

        
//         return false;
//     } else {
//         let arrayData = new Array (nombre, apellidos, edad);
//         console.log(arrayData);
//         err_age.innerHTML = "";

//     }

// };


// // ♣-. Onceavo Problema
// function createItem() {
//     nombre = document.getElementById("nombre").value;
//     localStorage.setItem("form", nombre);
//     readValue();
//   }
  
//   function readValue() {
    
//     var x = localStorage.getItem("form");
    


//         // Crear nodo de tipo Element
//     var parrafo = document.createElement("li");
//     parrafo.id = "storageList";
        
//     // Crear nodo de tipo Text
//     var contenido = document.createTextNode(nombre);
        
//     // Añadir el nodo Text como hijo del nodo tipo Element
//     parrafo.appendChild(contenido);
        
//     // Añadir el nodo Element como hijo de la pagina
//     document.getElementById("miLista").appendChild(parrafo);
//   }

// //♣-. Doceavo Problema
//   function deleteItem() {
//     var eliminado = document.getElementById("storageList");
//     eliminado.parentNode.removeChild(eliminado);


//   }
// ♣-. Treceavo Problema
fetch('http://localhost:8080/valdo/static/JSON')
    .then(res => res.text())
.then(res => console.log(res));




// fetch("http://localhost:5000/api/get/<tabla>/<columna>/=/<valor>/_/_/_")
// .then(data=>data.json())
// .then(data=>{
//     console.log(data);
// })