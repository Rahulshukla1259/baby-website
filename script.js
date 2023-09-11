let kid=document.querySelector(".kids")

kid.addEventListener("click",()=>{

    kid.style.color="orange"
})

document.querySelector(".bar").addEventListener("click",()=>{

     if(document.querySelector(".menu-res-content").style.display=="none"){

        document.querySelector(".menu-res-content").style.display=="flex"
     } else{

        document.querySelector(".menu-res-content").style.display=="none"
     }

})
    
   
    
