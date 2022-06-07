const d =document;
    export default function reloj(reloj,mostrar,stop){
            var clockTempo; 
            d.addEventListener("click",e=>{
            if (e.target.matches(reloj)){

                clockTempo = setInterval(()=>{
                    let clockfecha = new Date().toLocaleDateString();
                    let clockHour= new Date().toLocaleTimeString();
                    d.querySelector(mostrar).innerHTML ="<h3> " + clockfecha + "    " + clockHour + "</h3>";
                },1000);

                e.target.disabled = true;

            }


             if (e.target.matches(stop)){

                clearInterval(clockTempo);
                d.querySelector(mostrar).innerHTML =null;
                d.querySelector(reloj).disabled = false;
            } 

        });

    }



     export  function alarma(sound,start,stopp){
        let alarmaTempo;
        const $alarm =d.createElement("audio");
        $alarm.src=sound;

        d.addEventListener("click",e=>{
        
            if (e.target.matches(start)){
        
                alarmaTempo = setTimeout(() => {
                    $alarm.play();
                }, 2000);
               /*  d.querySelector(start).innerHTML ="<audio src='/assets/alarma_5.mp3' autoplay> </audio>";*/
                e.target.disabled = true; 

            }

            if (e.target.matches(stopp)){
                clearTimeout(alarmaTempo);
                $alarm.pause();
                $alarm.currentTime=0;
                d.querySelector(start).disabled = false;
                   
              /*   d.querySelector(start).innerHTML =null;
                d.querySelector(start).disabled = false */;
            } 
        
        });

    } 





      






        
        
    
    

        