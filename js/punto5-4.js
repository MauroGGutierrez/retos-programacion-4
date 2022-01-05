var Descripcion = {
  nombre: 'Mauro',
  apellido: 'Gutierrez',
  dni: 43889123,
  edad: 19,
  sexo: 'Masculino'
};

function MiDescripcion(Descripcion) {
  let objectValues = Object.values(Descripcion);
  objectValues.forEach((item) => {
    console.log(item);
  });
}

MiDescripcion(Descripcion);