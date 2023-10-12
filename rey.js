// Declara un objeto para cada una de las personas y guardarlos en un arreglo
const personas = [
  {
    nombre: "Pedro",
    apellido: "Lopez",
    edad: 25,
    buenaSalud: true,
    antecedentesPenales: false,
    apellidoRey: false,
  },
  {
    nombre: "Mara",
    apellido: "Gonzales",
    edad: 45,
    buenaSalud: true,
    antecedentesPenales: false,
    apellidoRey: false,
  },
  {
    nombre: "Agustina",
    apellido: "Rey",
    edad: 30,
    buenaSalud: true,
    antecedentesPenales: false,
    apellidoRey: true,
  },
];

// aca verifica si la persona es apta para el ejército 
function esAptoParaEjercito
(persona) {
  if (
    persona.edad >= 18 &&
    persona.edad <= 35 &&
    persona.buenaSalud &&
    !persona.antecedentes &&
    !persona.apellidoRey
  ) {
    return true;
  } else {
    return false;
  }
}

// aca mostramos por consola el nombre, apellido y si es apto para el ejército 
personas.forEach((persona) => {
  console.log(
    `${persona.nombre} ${persona.apellido} - Apto para el ejército: ${
      esAptoParaEjercito(persona) ? "Sí" : "No"
    }`
  );
});

// se cuenta cuántas personas son aptas para el ejército
const personasAptas = personas.filter((persona) => esAptoParaEjercito(persona));
console.log(`Total de personas aptas para el ejército: ${personasAptas.length}`);
