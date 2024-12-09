document.addEventListener("DOMContentLoaded", () =>{
    const yanabuton = document.querySelector("#Yanabutton")
    const kakabuton = document.querySelector("#Kakabutton")
    const nellbuton = document.querySelector("#Nellbutton")
    const mebuton = document.querySelector("#Mebutton")
    const memorybuton = document.querySelector("#rightnavmemories")
    const Yanaplace = document.querySelector("#Yana-them")
    const Kakaplace = document.querySelector("#kaka-them")
    const Nellplace = document.querySelector("#nell-them")
    const Meplace = document.querySelector("#me-them")
    const memoryplace = document.querySelector("#Memoriesstarting")
    
    yanabuton.onclick = () =>{
        Yanaplace.scrollIntoView({behavior: "smooth"})
    };

    kakabuton.onclick = () =>{
        Kakaplace.scrollIntoView({behavior:"smooth" })
    }
      
    nellbuton.onclick = () =>{
        Nellplace.scrollIntoView({behavior:"smooth"})
    }

    mebuton.onclick = () =>{
        Meplace.scrollIntoView({behavior:"smooth"})
    }

    memorybuton.onclick =()=>{
        memoryplace.scrollIntoView({behavior:"smooth"})
    }

})
