function crearFiltroPorPropiedad(nombrePropiedad) {
  return function (valorEsperado, arrayObjetos) {
    return arrayObjetos.filter(obj => obj[nombrePropiedad] === valorEsperado);
  };
}

const filtrarPorCiudad = crearFiltroPorPropiedad("ciudad");

const personas = [
  { nombre: "Ana", ciudad: "Cordoba" },
  { nombre: "Luis", ciudad: "Buenos Aires" },
  { nombre: "Carlos", ciudad: "Santa Fe" }
];

const residentesCordoba = filtrarPorCiudad("Cordoba", personas);

console.log(residentesCordoba);