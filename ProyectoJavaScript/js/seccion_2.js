const d =document;
let x = 0;
let y = 0;

//atajos personalizados
export function shortCuts(e,panelBtn,panel,a1,a2,a3,a4,a5,head,bol){
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e); */

    //eventos prueba
    /* if(e.key ==="a" && e.altKey){

        alert("Atajo de mi pagina web alert");
   
    }

    if(e.key ==="c" && e.altKey){

        confirm("Atajo de mi pagina web confirm");
    }

    if(e.key ==="q" && e.ctrlKey){

        prompt("Atajo de mi pagina web prompt");
    } */

    //evento escape menu hambur
    if(e.key ==="Escape"){
            d.querySelector(panelBtn).classList.remove("is-active");
            d.querySelector(panel).classList.remove("is-active");       
    }

    //evento abrir menu hambur
    if(e.key ==="Enter"){

        d.querySelector(panelBtn).classList.add("is-active");
        d.querySelector(panel).classList.add("is-active");  

        if(d.querySelector(panel).classList.contains("is-active")){

            d.querySelector(head).classList.remove("inde");
            d.querySelector(bol).classList.add("hid");
    
        }else{
    
            d.querySelector(head).classList.add("inde");
            d.querySelector(bol).classList.remove("hid");
        }
         
    }
    
    /* //eventos para abrir las secciones con los numeros
    if(e.key ==="1"){
        d.querySelector(a1).click();    
    }

    if(e.key ==="2"){
        d.querySelector(a2).click();
             
    }
    if(e.key ==="3"){
        d.querySelector(a3).click();;
         
    }
    if(e.key ==="4"){
        d.querySelector(a4).click();
    
    }
    if(e.key ==="5"){
        d.querySelector(a5).click();
             
    } */

    
   


};

/* //abrir menu al pasar maus por encima y cerrar al quitarlo de encima
export function over(openmenu,abrir){
            
    d.addEventListener("mouseover",e=>{
    
         if(e.target.matches(openmenu)) {
    
            d.querySelector(openmenu).classList.toggle("is-active");
            d.querySelector(abrir).classList.toggle("is-active");    
  
        }

    });

  /*   d.addEventListener("mouseout",e=>{
    
        if(e.target.matches(openmenu) || e.target.matches(".panel-btn *") ){
    
            d.querySelector(openmenu).classList.remove("is-active");
            d.querySelector(abrir).classList.remove("is-active");   
  
        }

    }); 

}; */

//eventos game

export function game(e,ball,stage){
const $ball =d.querySelector(ball),//.blur() solucionar bug de bola bloqea desplzamiento en formulario
$stage =d.querySelector(stage),
limistball = $ball.getBoundingClientRect(),
limitstage = $stage.getBoundingClientRect();


switch (e.keyCode) {
    
    //arriba
    case 38:
        
        if(limistball.top >= limitstage.top + 15 )  {
            e.preventDefault();
            y--;
        }
  
    break;

    //abajo
    case 40:
       
        if(limistball.bottom <= limitstage.bottom -15) 
        {
            e.preventDefault();
            y++;
        }
    break;
            
    //izquierda        
    case 37:
        
        if(limistball.left >= limitstage.left + 10 )
        {
            e.preventDefault();
            x--;
        }
        
    break;
    
    //derecha
    case 39:
       
        if(limistball.right <= limitstage.right -10) {
            e.preventDefault();
            x++;
        }
    break;
                    
                    
        default:           
        break;    
}

 $ball.style.transform = `translate(${x*10}px,${y*10}px)`;


};



//esconder header del menu y quitar ball para que no se sobremonte
export function hidenHeadMenu(head,panel,bol){

    d.addEventListener("click",(e)=>{

        if(d.querySelector(panel).classList.contains("is-active")){

        d.querySelector(head).classList.remove("inde");
        d.querySelector(bol).classList.add("hid");

    }else{

        d.querySelector(head).classList.add("inde");
        d.querySelector(bol).classList.remove("hid");
    }

    
   /*  console.log(d.querySelector(panel).classList.contains("is-active"));
    console.log(d.querySelector(head).classList.remove("inde")); */
});

};

