"use strict";



function cambiarColor() {
    let x = document.getElementsByClassName("titulo");
    let y = false;

    fetch("http://api.icndb.com/jokes/random", {
        /*
        */
    })

    .then(response => response.json())
    
    .then(data => { 

        
        if (y == false){
            x[0].style.color = "red"  
        }else if(y == true){
            x[0].style.color = "green"
        }
        x[0].innerHTML = data.value.joke;
  
    


    
})
    
    .catch(error  => console.error(error));
}


