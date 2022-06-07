const d = document,
w=window;


export function responsiveMedia(id,mq,mobileContent,desktopContent){

let breakpoints = w.matchMedia(mq); //captura la media query 1024px

const responsive= (e) =>{  

if (e.matches){

    d.getElementById(id).innerHTML = desktopContent;
    
}else {
    
    d.getElementById(id).innerHTML = mobileContent;

}
//console.log(e.matches);

};
breakpoints.addEventListener("change", responsive);
responsive(breakpoints);




}