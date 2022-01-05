## 1- Variables y operaciones

## ¿Qué es una variable y para qué sirve?

-Es una forma de almacenar un valor en la memoria RAM. Para Poder reutilizarlas,calcularlas,etc.

## ¿Cuál es la diferencia entre declarar e inicializar una variable?

- Declarar es dar un nombre a la variable ej: `let numero`
- Inicializar es **asignar** un valor a la variable ej: `numero = 1`

## ¿Cuál es la diferencia entre sumar números y concatenar strings?

- La suma se realiza unicamente con variables de tipo `number`
- La concatenacion se realiza uniendo `string` con otros valores

## ¿Qué operador me permite sumar o concatenar?

- El operador de suma: `+`

## Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre `const nombre = 'Mauro'`
Apellido `const apellido = 'Gutierrez'`
Nombre de usuario `const username = 'Dizer'`
Edad `let edad = 18`
Correo electrónico `let email = 'maurogutierrez_develop@hotmail.com'`
Mayor de edad `let mayorEdad= true`
Dinero ahorrado ``let ahorro = 10000`
Deudas `let deudas = 20000`

## Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en un archivo nuevo

`const persona = { nombre = 'Mauro', apellido = 'Gutierrez', username = 'Dizer', edad = 18, email = 'maurogutierrez_develop@hotmail.com', mayorEdad= true, ahorro = 10000, deudas = 20000 }`

## Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
  `const nombreCompleto = persona.nombre + ' ' + persona.apellido`
- Dinero real (dinero ahorrado menos deudas)
  `const patrimonio = persona.ahorro - persona.deudas`

## 2- Funciones

## ¿Qué es una función?

- Es un conjunto de instrucciones agrupadas en un bloque de codigo

## ¿Cuándo me sirve usar una función en mi código?

- Me sirve para dividir mis tareas en diferentes funciones que realizan una unica tarea

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

- Parametros son cuando inicializamos la funcion.
- Argumentos son cuando llamamos a la funcion.

## Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

`const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");`

`function presentacion (completeName, nickName) { 
  const frase = `Mi nombre es ${completeName}, pero prefiero que me digas ${nickName}.` 
  return frase; }
  const frase = (completeName, nick)`

## 3- Condicionales

## ¿Qué es una condicional?

- Los condicionales es una forma de controlar el flujo de ejecucion de mi codigo. Por el lado verdadero y el falso.

## ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

- Existen 4 tipos: if else, else if, switch y if ternario. cuando tenemos varios else if anidados nos conviene usar un switch

## ¿Puedo combinar funciones y condicionales?

- si

## Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
case "Free":
console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
console.log("Puedes tomar casi todos los cursos durante un mes");
break;
case "Expert":
console.log("Puedes tomar casi todos los cursos durante un año");
break;
case "ExpertPlus":
console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
break;
}

`if (tiposDeSuscripcion === 'free') { console.log ("Solo puedes tomar los cursos gratis"); } else if (tiposDeSuscripcion === 'Basic') { console.log ("Puedes tomar casi todos los cursos durante un mes"); } else if (tiposDeSuscripcion === 'Expert') { console.log ("Puedes tomar casi todos los cursos durante un año"); } else if (tiposDeSuscripcion === 'ExpertPlus') { console.log ("Tú y alguien más pueden tomar TODOS los cursos durante un año"); }`

## Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

`if (tipoDeSubscripcion === 'free') console.log ("Solo puedes tomar los cursos gratis")`
`if (tipoDeSubscripcion === 'Basic') console.log ("SPuedes tomar casi todos los cursos durante un mes")`
`if (tipoDeSubscripcion === 'Expert') console.log ("Puedes tomar casi todos los cursos durante un año")`
`if (tipoDeSubscripcion === 'ExpertPlus') console.log (Tú y alguien más pueden tomar TODOS los cursos durante un año")`

## Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.

`const subs = ['free', 'Basic', 'Expert', 'ExpertPlus']`
`const mensaje = ['mens1', 'm2', 'm3', 'm4']`
`const pos = subs.indexOf (tiposDeSubscripcion)`
`if (pos !== -1) { `console.log(mensaje[pos])` }`


## 4- Ciclos
## ¿Qué es un ciclo?

- Dicho en otras palabras, es una manera en la cual se repite un mismo código varias veces.

## ¿Qué tipos de ciclos existen en JavaScript?

- existen 3 ciclos el `while`, el `for` ,y el `do while`

## ¿Qué es un ciclo infinito y por qué es un problema?

- Es cuando un codigo no se detiene, sucede cuando nos olvidamos de hacer una accion para que pare el ciclo.
- Es un problema porque la pantalla del navegador se puede trabar.

## ¿Puedo mezclar ciclos y condicionales?

- si se pueden mezclar, es posible


## Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

## RESPUESTA:

`let i = 0 `
`while (i < 0) {
  console.log (`el valor de i es: ${i}`)
}`

## Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
Pista: puedes usar la función prompt de JavaScript.

`const num = Number(prompt(¿Cuanto es 2 + 2, respondaa por favor?))`
`if (num === 4) {
  console.log(`Felicitaciones, respuesta correcta`);
} else {
  console.log(`Error, respuesta incorrecta`);
}`

## 5- Arrays y Objetos
## 5-1 Responde las siguientes preguntas en un nuevo archivo:

## ¿Qué es un array?

- Podria decirse que es una lista, donde se pueden guardar objetos, strings, o numeros, etc.

## ¿Qué es un objeto?

- Es un tipo de dato en javascript donde podemos declarar varios titulos,variables,etc. y sus respectivos valores.

## ¿Cuándo es mejor usar objetos o arrays?

- El array se utiliza cuando queremos tener una lista de cosas,productos,etc. ej: nombre de personas ['mauro', 'franco', 'jael']
- El objeto se usa cuando quieres saber el producto mas su descripcion o otros datos relacionados al producto ej:
`const descripcion = {
  nombre = mauro,
  apellido = gutierrez,
  celular = 3885178612,
}`

## ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

- En los objetos no pueden haber arrays, pero si puede haber un objeto dentro de un array

## 5-2 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

- listo en js/punto5-2

## 5-3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

- listo en js/punto5-3

## 5-4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

- listo en js/punto5-4
