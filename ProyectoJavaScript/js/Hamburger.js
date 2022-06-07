export default function hamburgerMenu(panelBtn,panel,closesec){//delegacion de eventos parametros necesarios

const d =document; //se asigna a la variable de de dom el documento html

d.addEventListener("click",(e)=>{

     if(e.target.matches(panelBtn) || e.target.matches(".panel-btn *") ){
        d.querySelector(panelBtn).blur();//quito foco para que no bloquee el evento de teclado enter
        d.querySelector(panelBtn).classList.toggle("is-active");
        d.querySelector(panel).classList.toggle("is-active");
        
    }

    if (e.target.matches(closesec)){

        d.querySelector(panelBtn).classList.remove("is-active");
        d.querySelector(panel).classList.remove("is-active");

    }



});

}