"use strict";



function cambiarColor() {
    let x = document.getElementsByClassName("titulo");
    let y = false;

    fetch("https://docs.github.com/v3/search", {
        /*
        */
    })

    .then(response => response.json())
    
    .then(data => { 
        debugger
        y == false ?  
        x[0].style.color = "green" : x[0].style.color = "red";
          x[0].innerHTML = data.value.joke;
        /*
        if (y == false){
            x[0].style.color = "red"  
        }else if(y == true){
            x[0].style.color = "green"
        }
        x[0].innerHTML = data.value.joke;
          */  
    })
    
    .catch(error  => console.error(error));
}



/*
        if (y == false){
            x[0].style.color = "red"  
        }else if(y == true){
            x[0].style.color = "green"
        }
        x[0].innerHTML = data.value.joke;
  /*   y == false ?  
      x[0].style.color = "green" : x[0].style.color = "red";
        x[0].innerHTML = data.value.joke;
    */
    





/*
function showAlert() {

    fetch("file:///C:/Users/jm.perez/Documents/ejercicios/ejercicios/index.html", {
        /*

        */
  //  })

    /*
    .then(response => response.json())
    .catch(error  => console.error(error));

}






/*let btn = document.getElementById("btn");
*/


 /*
    method: "GET",
    headers:{
            "Content-Type": "application/json",
            "dasdasd":"dasdasd",
            
        },
        body: JSON.stringify({
            name: "tata",
            age: 28,
        })
        .then((reponse)=>{
            debugger
        })
        
        */





    /*
    .then(data => {
        alert(data.value.joke)    
    })
    */

    /*
    then ( response.json())
    then  (alert(data.value.joke) =>{

    })
}
¨*/
    /*
        .then(response => response.json())
        .then(data => {
            debugger
        })
    /*
     .then((response) => {
         debugger
     })



/*
btn.addEventListener("click", EventClick);


/*
btn.addEventListener('click', function(e){
let t_bomba =  document.getElementById("inputBomba").value;
alert("Corra en 5 segundos se activará la Bomba");
setTimeout(function(){
cuentaRegre(t_bomba); }, 5000); // llamado diferido
});

function cuentaRegre(i) {
 let intervalo = setInterval(function() {
     document.getElementById("bomba").innerHTML = i;
     if (i === 0) {
         clearInterval(intervalo); // limpio intervalo para detener
         alert('BOOOOOM!!');
     }
     else {
         i--;
     }
 }, 1000);
}
*/
