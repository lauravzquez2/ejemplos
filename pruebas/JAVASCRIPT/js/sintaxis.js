console.log("hola a todos");

nombre=prompt(='dime tu nombre');

console.log('hola' + nombre);

const numero = +prompt("dime un numero")
//como no se declaran los tipos de variable, se coge automáticamente como string, hay que convertirlo a num, por eso se pone +prompt

console.log(typeof numero); //para ver si ha cambiado el tipo de la variable
conslole.log(numero + 2);

if (numero = 5) {
    console.log("ok");
} else {
    console.log("pues no es 5")
}
//los tipos que no se declaran, se convierten al vuelo. = es una asignación, no una comparacion. Al poner numero=5 lo hemos reasignado, así que ya
//no hay booleando para la sentencia if. Cuando se hacen comparaciones con === se compara el valor y el tipo de la variable.

let variable;
console.log(variable);
//Cuando declaramos con let, sin asignar un valor,se crea la variable undefined (valor=tipo=undefined). Puede declararse como null(tipo objeto)