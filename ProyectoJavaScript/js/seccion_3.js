export function countdown(count,limitdate,message){

const $countdown = document.getElementById(count),
countdownDate = new Date (limitdate).getTime();

let countdownTempo = setInterval(()=>{

let now =new Date().getTime(),
limittime = countdownDate - now,
days= Math.floor(limittime/(1000 * 60 * 60 * 24)),
hours = ("0" + Math.floor((limittime % (1000 * 60 * 60 * 24))/(1000*60*60))).slice(-2),

minutes = ("0" + Math.floor((limittime % (1000 * 60 * 60))/(1000*60))).slice(-2),

seconds=("0" + Math.floor((limittime % (1000 * 60))/(1000))).slice(-2);


$countdown.innerHTML=`<h3> Faltan: ${days} Dias ${hours} Horas 
${minutes} Minutos  ${seconds} 
Segundos Para Acabar La Promociòn </h3>`;

if (limittime < 0 ){
    clearInterval(countdownTempo);
    $countdown.innerHTML=`<h3> ${message}</h3>`;
}
},1000);


}

