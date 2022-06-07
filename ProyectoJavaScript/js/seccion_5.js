const d = document,
w=window;


export function responsiveTester(form){
const $form = d.getElementById (form);
let tester;


d.addEventListener("submit", e=>{ //el evento submit se activa cuando form envia un formulario 

    if (e.target === $form) {
       alert("Formulario Enviado");
    }

})



}

