import hamburgerMenu from "./Hamburger.js";
import  reloj  from "./seccion_1.js";
import  {alarma}  from "./seccion_1.js";
/* import  {over}  from "./seccion_2.js"; */
import  {shortCuts}  from "./seccion_2.js";
import  {game}  from "./seccion_2.js";
import  {countdown}  from "./seccion_3.js";
import  {scroll}  from "./botoom_scroll.js";
import  {hidenHeadMenu}  from "./seccion_2.js";
import  {ModDark}  from "./Mod_dark.js";
import  {responsiveMedia}  from "./seccion_4.js";
import  {responsiveTester}  from "./seccion_5.js";



const d = document;
d.addEventListener("DOMContentLoaded",e=>{

    hamburgerMenu(".panel-btn",".panel",".menu a");

    reloj("#ir","#mostrar","#dr");

    alarma("/assets/alarma_5.mp3","#ia","#da");

   /*  over(".panel-btn",".panel"); */

    countdown("countdown","oct 31,2022 12:00:00","Se Acabo La Promo ♫↓♫");
    
    scroll(".up-scroll");
    
    hidenHeadMenu(".header",".panel",".bol");
    responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank" rel="noopener">Ver Video</a>` , `<iframe width="600" height="352" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br><br>`);
    responsiveMedia("gmaps","(min-width: 1024px)",`<a href= "https://goo.gl/maps/Fjhpmh3RFk5yGwBo7" target="_blank" rel="noopener">Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127612.06331509382!2d-78.83479451920611!3d1.7874326153561648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2cfdf201909ea1%3A0xcb15a5b34ef472fa!2sTumaco%2C%20San%20Andres%20de%20Tumaco%2C%20Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1654621554567!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("form")

});


d.addEventListener("keydown",e=>{
    
    shortCuts(e,".panel-btn",".panel","#a1","#a2","#a3","#a4","#a5",".header",".bol");
    game(e,".bol",".stage");
    
});


ModDark(".dark-theme-btn","dark-mode");



