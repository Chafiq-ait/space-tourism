const container2=document.querySelectorAll(".container2")
const container3=document.querySelectorAll(".wrapper3 .container3")
const container4=document.querySelectorAll(".wrapper4 .container4")
const openSideBar=document.querySelector(".nav .open")
const sideBar=document.querySelector(".nav ul")

window.onclick=()=>{
    const selectPlanet=document.querySelectorAll(".shown .rightSide .select li");
   

    selectPlanet.forEach(selected=>selected.addEventListener("click",()=>{
      
        container2.forEach(container=>container.classList.remove("shown"))
     
        container2.forEach(conatiner=>{
            if(conatiner.classList.contains(selected.innerHTML)){
            
               
                conatiner.classList.add("shown")
                
            }
        })
    }))

    const selectCrew=document.querySelectorAll(".container3.marked .leftSide .choose .crew");

    selectCrew.forEach(crew=>crew.addEventListener("click",()=>{
  
        container3.forEach(container3=>container3.classList.remove("marked"));
  
    
        container3.forEach(show=>{
            if(show.classList.contains(crew.id)){
               console.log("yes")
               show.classList.add("marked")
                
            }else{
                console.log("no")
            }
        })
    }
    ))


    const techno=document.querySelectorAll(".clicked .leftSide .choose .techno");
    techno.forEach(technology=>technology.addEventListener("click",()=>{
        container4.forEach(container4=>container4.classList.remove("clicked"));
        container4.forEach(container=>{
            if(container.classList.contains(technology.id)){
                container.classList.add("clicked")
            }
        })
    }))
}
console.log(sideBar)

openSideBar.addEventListener("click",()=>{
    console.log("yes")
if( sideBar.style.right=="-300px"){
    console.log("yes");
    sideBar.style.display="block"
    setTimeout(()=>{
        sideBar.style.right="0";
        openSideBar.style.background= "url(imgs/shared/icon-close.svg)"
        openSideBar.style.backgroundSize= "cover"
    },100)
       
 
   
}else{
    setTimeout(()=>{
        sideBar.style.display="none"
    },505)
    openSideBar.style.background= "url(imgs/shared/icon-hamburger.svg)"
    openSideBar.style.backgroundSize= "cover"
    sideBar.style.right="-300px";
}
  
})


