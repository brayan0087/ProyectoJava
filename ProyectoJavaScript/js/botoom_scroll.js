export function scroll(scroll){

    const d = document;
    const w =window;

    d.addEventListener("click",e=>{

        if (e.target.matches(scroll) || e.target.matches(".up-scroll *")) {
            
        w.scrollTo({
            behavior: "smooth",
            top:0
         });
        }

    });


    d.addEventListener("scroll", (e) => {

        if (w.scrollY > 0) {

            d.querySelector(scroll).classList.remove("trnspa");
            
            
        
        } else {

            d.querySelector(scroll).classList.add("trnspa");
            
        }  
           
    
        

    });

  

}

