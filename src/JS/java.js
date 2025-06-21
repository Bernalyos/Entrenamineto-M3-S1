// Get the input elements and other DOM elements
  let name = document.getElementById("name")
  let age = document.getElementById("age")
  let boton=document.getElementById("boton")
  let result = document.getElementById("result")
  
// Add a click event listener to the button
  boton.addEventListener("click", function (){
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let menssage 
    // Check if age is less than 18 and greater than 0
   if(age < 18 && age >0){
    menssage="Eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
   }
  // Check if age is 18 or older
   else if(age >=18 ){
    menssage="Eres mayor de edad¡Prepárate para grandes oportunidades en el mundo de la programación!"
   }
   // If age is not a valid value
   else{menssage="Por favor ingrese un valor valido"}
  // Display the greeting message with the name and the age message
   result.textContent='Hola ' +name + menssage
  
  })
