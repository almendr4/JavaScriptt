const data = require('./users.json').users
const personas = data.map((persona) => {
  return{
    nombre: persona.name,
    edad: persona.age,
    pais: persona.country,
  };
});

let totalEdades = 0;
let personasMayores18 = 0;
let pesonasMenores35 = 0;

personas.forEach((persona) =>{
  totalEdades += persona.edad;
  if (persona.edad > 18) {
    personasMayores18++;
  }
  if (persona.edad < 35) {
    personasMenores35++;
  }
});
const promedioEdades = totalEdades / personas.length;
const porcentajeMayores18 = (personasMayores18 / personas.length) * 100;
const porcentajeMenores35 = (personasMenores35 / personas.length) * 100;


console.log('- - - - Informacion acerca de las 100 personas - - - -');
console.log('Promedio de Edades:', promedioEdades.toFixed(2));
console.log('Porcentaje de personas Mayores de 18:', porcentajeMayores18.toFixed(2) + '%');
console.log('Porcentaje de personas Menores de 35:', porcentajeMenores35.toFixed(2) + '%');
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');




