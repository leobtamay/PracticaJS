const prompt = require("prompt-sync")(({sigint:true}))

const calculo = (x,y,z) =>{
    let result;
    if(z==1){
        result = x+y;
    }else if(z==2){
        result = x-y;
    }else if(z==3){
        result = x*y;
    }else if(z==4){
        result = x/y;
    }
    else{
        result="Fuera de rango 1-4"
    }
    return result;
}

let a = prompt("Ingrese un numero A: ");
let b = prompt("Ingrese un numero B: ");
let op = prompt("Selecciones una accion 1.- SUMA 2.- RESTA 3.- MULT 4.- DIV = ");

let acciones = calculo(a,b,op);
console.log(acciones);