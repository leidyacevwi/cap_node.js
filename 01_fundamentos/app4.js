

console.log('Inicio de programa');

setTimeout( () => {                         // callback es una funcion que recibe una funcion como argumento
    console.log('Primer Timeout');
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout');
}, 0 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');

