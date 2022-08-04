const d = document,
w=window;
// prueba de json 
var empleado ={

    nombre:'thomas',
    profesion:'dev'
};

console.log (JSON.stringify(empleado));
// termina prueba json
export function responsiveTester(form){
const $form = d.getElementById (form);
let tester;


d.addEventListener("submit", e=>{ //el evento submit se activa cuando form envia un formulario 

    if (e.target === $form) {

       e.preventDefault(); 
       //alert("Formulario Enviado");


        tester = w.open($form.url.value,"tester", `innerWidth=${$form.Ancho.value},innerHeight=${$form.Alto.value}`);  //se accde al input del form mediante notacion del punto

        

    };


});

d.addEventListener("click", e=>{

    if (e.target === $form.cerrar)tester.close();
    
    
    
});

}

