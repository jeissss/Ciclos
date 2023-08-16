/*Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes. El
algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son
menores de edad. */
let acum = 0
let mayor = 0
let menor = 0
for(let i = 1; i <= 10; i++){
    let edad = Number(prompt("Ingrese la edad del estudiante # " + i));{
    acum = acum + 1
     
    if(i >= 18){
        mayor = mayor + 1
    }else{
        menor = menor + 1
    }
    }

}

console.log("Número de estudiantes: " + acum +" " + mayor +" de ellos son mayores y " + menor + " son menores")

