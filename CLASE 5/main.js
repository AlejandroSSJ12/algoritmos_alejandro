var n = "si";
var m = "no";
var decision = "si"
var decla = "no";
var a = 12;
var b = "0.5"
//1
if (decision == m ) {
    console.log ("Me baño hoy:3");
} else {
    console.log("no me baño hoy xd");
}
//2
if (decision == n) {
    console.log ("No hago mi tarea hasta mañana xd");
} else {
    console.log ("si la tuve que hacer xd");
}
//EJERCICIO 3
if ( decla == m ){
    console.log ("Me le declaro a la de 5t0 cuatrimestre:3");
} else {
    console.log("no se dejo:(");
}
//4
if ( a == 13 ){
    console.log ("el numero es igual a 12");
} else {
    console.log("el numero es mayor o menor que 12");
}
//5
if ( b == 0.6 ){
    console.log ("el numero decimal si es igual");
} else {
    console.log("el numero decimal es diferente");
}
//CONDICIONES DE SIWTCH
var persona="pedro";
var edad="12";
var perrito="pancho";
var accion="pasear";
switch (persona) {
    case "pedro":
        console.log("Pedro es mi nombre y mi edad es 12años");
        break;
}
switch (perrito) {
    case "pancho":
        console.log("Mi nombre es "+perrito,"y me gusta salir a "+accion);
        break;
}
//condiciones de switch e if
var tiempo = "1";
var clima = "frio";
switch (tiempo) {
    case "2":
    if ( clima == "frio") {
        console.log("Si esta haciendo frio");
    } else {
        console.log ("esta haciendo calor");
    }
    break;
    }