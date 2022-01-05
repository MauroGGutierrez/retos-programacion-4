// otra opcion de hacer este punto es: 

let Incorrecto = true; 

while (Incorrecto) {
  const resp = prompt('¿Cuanto es 2 + 2?')
  if (resp === '4') {
    alert(`Felicitaciones, respuesta correcta`);
    Incorrecto = false;
  }
}