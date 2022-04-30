function ejercicio1(){
    var num = Number(prompt("Elegi un numero del 1 al 12"));
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    if (num ===1){
        alert ('El mes correspondiente es: ' + meses[0])}
    else if (num ===2){
        alert ('El mes correspondiente es: ' + meses[1])}
    else if (num ===3){
        alert ('El mes correspondiente es: ' + meses[2])}
    else if (num ===4){
        alert ('El mes correspondiente es: ' + meses[3])}
    else if (num ===5){
        alert ('El mes correspondiente es: ' + meses[4])}
    else if (num ===6){
        alert ('El mes correspondiente es: ' + meses[5])}
    else if (num ===7){
        alert ('El mes correspondiente es: ' + meses[6])}
    else if (num ===8){
        alert ('El mes correspondiente es: ' + meses[7])}
    else if (num ===9){
        alert ('El mes correspondiente es: ' + meses[8])}
    else if (num ===10){
        alert ('El mes correspondiente es: ' + meses[9])}
    else if (num ===11){
        alert ('El mes correspondiente es: ' + meses[10])}
    else if (num ===12){
        alert ('El mes correspondiente es: ' + meses[11])}
        else {
            alert('El numero ingresado es incorrecto')
        }
}

function ejercicio2(){
    var letras = (prompt("Escribi una letra del abededario"));
    vocales = ["a", "e", "i", "o", "u"]

    if(letras === vocales[0] || letras === vocales[1] || letras === vocales[2] ||letras === vocales[3] || letras === vocales[4])
    {
        alert('Es una vocal')
    }else {
        alert('No es una vocal')
    }
}

function ejercicio4() {
    var num1 = Number(prompt('Escribe un numero'))
    var num2 = Number(prompt('Otro número más'))
    var num3 = Number(prompt('Un último número'))

    var numbers = [num1, num2, num3]
    var numOrdenado = numbers.sort(function(a, b){
        return a - b; 
    });
    alert('Los numeros ordenados son: ' + numOrdenado) }

function ejercicio5() {
    var num1 = Number(prompt('Escribe un numero'))
    var num2 = Number(prompt('Otro número más'))
    var num3 = Number(prompt('Un último número'))
    
    var numbers = [num1, num2, num3]
    var numOrdenado = numbers.sort(function(a, b){
        return b - a; 
    });
    alert('Los numeros ordenados son: ' + numOrdenado) }
    

function ejercicio6() {
    
    var numero = Number(prompt('Introduce un número '))

    if (numero < 0) {
        alert (numero + ' es negativo') }
    
        else if (numero > 0){
            alert (numero + ' es positivo')
        }
        else if (numero == 0) {
            alert('es cero')
        }
    else {
        alert('Dato incorrecto')
    };
    }

function ejercicio7() {
    var letra = prompt('Escribi una letra')

    if (letra ==="s" || letra==="S" || letra==="n" || letra==="N"){
        alert('Es un dato correcto')
    }
    else {
        alert('Lo introducido no es correcto')
    };
}

function ejercicio8() {

    var num = Number(prompt('Introduce un numero'))

    if (num >= 100){
        alert('El numero es mayor de 100 o igual a 100')
    }
    else if (num <100){
        alert('Es menor que 100')
    }
    else {
        alert('No son numeros')
    };
}

function ejercicio9() {
        var num1 = Number(prompt('Escribe un numero'))
        var num2 = Number(prompt('Otro número más'))
        var num3 = Number(prompt('Un último número'))
    
        var numeros = [num1, num2, num3]
        var numOrdenado = [num1, num2, num3].sort(function(a, b){
            return a - b; 
        })
        var contador = 0
        
        for (i in numeros){
            if(numeros[i] === numOrdenado[i]){
                contador = contador+1;
            }
        };

        if (contador === numeros.length) {
            alert('Los numeros estan ordenados crecientemente')
        }
        else{
            alert('Los numeros no estan ordenados crecientemente')};
        }

function ejercicio10() {
        var num1 = Number(prompt('Escribe un numero'))
        var num2 = Number(prompt('Otro número más'))
        var num3 = Number(prompt('Un último número'))
        
        var numeros = [num1, num2, num3]
        var numOrdenado = [num1, num2, num3].sort(function(a, b){
                return b - a; 
        })

        var contador = 0
            
        for (i in numeros){
            if(numeros[i] === numOrdenado[i]){
                contador = contador+1;
            }
        };
            
        if (contador === numeros.length) {
                alert('Los numeros estan ordenados decrecientemente')
        }
        else{
            alert('Los numeros no estan ordenados decrecientemente')};
        };

function ejercicio11() {

        var num0 = prompt('Pon un numero')
        var num1 = prompt('Pon un numero')
        var num2 = prompt('Pon un numero')
        var num3 = prompt('Pon un numero')
        var num4 = prompt('Pon un numero')
        var num5 = prompt('Pon un numero')
        var num6 = prompt('Pon un numero')
        var num7 = prompt('Pon un numero')
        var num8 = prompt('Pon un numero')
        var num9 = prompt('Pon un numero')

        var mayor = Math.max(num0, num1, num2, num3, num4, num5, num6, num7, num8, num9)
        var menor = Math.min(num0, num1, num2, num3, num4, num5, num6, num7, num8, num9)

        alert('El mayor es: ' + mayor + ' y el menor es: ' + menor)
        };

function ejercicio12() {

        var num1 = Number(prompt('Pon un numero'))
        var num2 = Number(prompt('Pon un numero'))
        var num3 = Number(prompt('Pon un numero'))

        var num4 = num1 + num2

        if (num3 == num4) {
            alert('El ' + num3 + ' es igual a la suma de ' + num1 + ' y ' + num2)
        }
        else {
            alert('El tercer numero no es suma de los dos primeros')
        }

        };

function ejercicio14() {

    var num1 = Number(prompt('Escribi un numero del 1 al 5'))
    var num2 = Number(prompt('Escribi otro numero del 1 al 5'))

    if (num1/2 && num2/2 && num1!=1 || num2!=1) {
        alert('Los dos numeros no son primos')
    }
    else {
        alert('Los dos numeros elegidos son primos')
    }

}

function ejercicio15(){
    var num1 = parseInt(prompt('Escribi un numero'))
    var num2 = parseInt(prompt('Escribi otro numero'))

    if (num1%2==0 && num2%2==0) {
        alert('Los dos numeros son pares')
    }
    else {
        alert('Un numero es impar')
    }
}

function ejercicio16() {

    var num1 = Number(prompt('Pon un numero'))
    var num2 = Number(prompt('Pon un numero'))
    var num3 = Number(prompt('Pon un numero'))

    var num4 = num1 * num2

    if (num3 == num4) {
        alert('El ' + num3 + ' es igual a la multiplicación de ' + num1 + ' y ' + num2)
    }
    else {
        alert('El tercer numero no es la multiplicación de los dos primeros')
    }

    };

function ejercicio17() {

        var num1 = Number(prompt('Pon un numero'))
        var num2 = Number(prompt('Pon un numero'))
        var num3 = Number(prompt('Pon un numero'))
    
        var num4 = num1 / num2
    
        if (num3 === num4) {
            alert('El ' + num3 + ' es igual al resto de la division entre ' + num1 + ' y ' + num2)
        }
        else {
            alert('El tercer numero no es la resta de los dos primeros')
        }
    
        };

         // Ejercicio 18 

        function mostrar() {
            div = document.getElementById('flotante');
            div.style.display = '';
        }

        function cerrar() {
            div = document.getElementById('flotante');
            div.style.display = 'none';
        }

        function opcion1() {
            alert('Su perimetro es: 3a siendo a el valor de su lado')
        }
        function opcion2() {
            alert('Su perimetro es: b + 2a siendo a y b valores de sus lados')
        }
        function opcion3() {
            alert('Su perimetro es: a + b + c siendo a,b y c valores de sus lados')
        };

function ejercicio20() {
    var importeNeto = Number(prompt('Escribi tu importe: '))

    var importeMayor = Number(importeNeto - (importeNeto*0.16))
    var importeMenor = Number(importeNeto - (importeNeto*0.10))

    if (importeNeto <= 15000 && importeNeto>= 0) {
        alert('$' + importeMenor)
    }
    else {
        alert('$' + importeMayor)
    }


};

function ejercicio21() {
    
    var TiempoTotal = Number(prompt('Escribi el tiempo que tenes en el trabajo '))

    const importeNeto = 80000;

    var listaTiempo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var tiempoMenor_3 = Number(importeNeto + (importeNeto*0.3))
    var tiempoEntre_3_5 = Number(importeNeto + (importeNeto*0.5))
    var tiempoEntre_5_10 = Number(importeNeto + (importeNeto*0.7))
    var tiempoMayor_10 = Number(importeNeto + (importeNeto*0.10))

    if (TiempoTotal == listaTiempo[0] || TiempoTotal == listaTiempo[1]) {
        alert('Su aporte es: $' + tiempoMenor_3)
    } else if (TiempoTotal == listaTiempo[2] || TiempoTotal == listaTiempo[3]) {
        alert('Su aporte es: $' + tiempoEntre_3_5)
    } else if (TiempoTotal == listaTiempo[4] || TiempoTotal == listaTiempo[5] || TiempoTotal == listaTiempo[6] || TiempoTotal == listaTiempo[7] || TiempoTotal == listaTiempo[8]) {
        alert('Su aporte es: $' + tiempoEntre_5_10)
    } else {
        alert('Su aporte es: $' + tiempoMayor_10)
    };
};

function ejercicio22() {

    alert('Adivina el número')

    Number(prompt('Elegi un número del 1 al 10'))

    var numerosRandom = Math.floor(Math.random() * 10 + 1)

    var intentos = 0
    
    while (elección !== numerosRandom) {
        var elección = Number(prompt('Escribi otro número: '))

        intentos = intentos+1;

        if (elección === numerosRandom) {
            alert ('Adivinaste el número en: ' + intentos + ' intentos')
        }
        else {
            alert ('Seguí intentando')
        }
    }
}