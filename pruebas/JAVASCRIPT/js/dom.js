'use strict'
//cuando se ha cargado todo el dom, queremos que se ejecute la funcion que se ha pasado. No se ejecutará antes de que se haya cargado el dom
window.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    
    console.log(h1);
//No se estaba ejecutando porque la configuración del VSC estaba mal. Borrar carpeta vss y re-ejecutar
    
    h1.innerHTML='Modificado por JvaScript'
    const input = document.querySelector('input');
    const boton = document.querySelector('button');
    const span = document.querySelector('span');
    
    boton.addEventListener('click', function() {
        span.innerHTML= 'Hola' + input.value;
    })
    const coleccion=['uno', 'dos', 'tres;

    const ul =document.querySelector('ul');

    for (const dato of coleccion){
        const li = document.createElement('li');
        li.innerHTML= dato;

        ul.appendChild(li)
        //cuando quieras añadir algo a una tabla p.e. lo haces con appendChild. Esto está modificando la lista (ul) creada en html
        //esto me permite recoger datos de un formulario y almacenarlos en un objeto, p.e.
    }

} )