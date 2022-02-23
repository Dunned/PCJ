let nombre="Eduardo";
let apellido="Jauregui";
let usuario="Dunned29";
let correo="eduardo@gmail.com";
let mayoria=18;
let ahorros=200.3;
let deudas=100;
console.log(typeof deudas);
console.log(typeof ahorros);
console.log(`${nombre} ${apellido}`)
console.log(`Dinero Real: S/.(${(ahorros-deudas).toFixed(1)}) `);


function mostrar(nombre,apellido,nickname){
    console.log(`Tu nombre es: ${nombre} ${apellido} , y tu nickname es: ${nickname}`);
}
mostrar("Eduardo","Jauregui","Dunned29");

function primero(array){
    console.log(array[0]);
}

function imprimir(array){
    array.forEach(element => {
        console.log(element);
    });
}

array=[10,2,3,4,5,6];
let persona={
    nombre:"Eduardo",
    nacionalidad:"Peruano"
}

imprimir(array);
primero(array);