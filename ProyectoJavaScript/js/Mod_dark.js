const d = document,
ls = localStorage;
export function ModDark(btn,classDark){
  
  const $themeBtn=d.querySelector(btn),
  $selectors=d.querySelectorAll("[data-dark]");
 
    let moon="☽";
    let sun ="☀️";
    
    const darkMode =()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
        $themeBtn.textContent=sun;
        ls.setItem("theme","dark");
    }


    const lightMode =()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
        $themeBtn.textContent= moon;
        ls.setItem("theme","light");
    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(btn)){
            
            if($themeBtn.textContent===moon){
                
                darkMode();
            }else {

                lightMode();
            }
            
        }
    })
    
    d.addEventListener("DOMContentLoaded",e=>{
        if (ls.getItem("theme")===null)ls.setItem("theme","light");
        if (ls.getItem("theme")==="light")lightMode();
        if (ls.getItem("theme")==="dark")darkMode();   
    });


};

