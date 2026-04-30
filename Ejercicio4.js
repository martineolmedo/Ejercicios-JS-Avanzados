function crearRegistroEventos() {
  const eventos = new Map();

  function registrarEvento(descripcion) {
    let timestamp = Date.now();
    while (eventos.has(timestamp)) {
      timestamp++;
    }

    eventos.set(timestamp, descripcion);
    return timestamp;
  }

  function obtenerEventosEntre({ inicio, fin }) {
    const resultado = [];

    for (const [timestamp, descripcion] of eventos) {
      if (timestamp >= inicio && timestamp <= fin) {
        resultado.push({ timestamp, descripcion });
      }
    }

    return resultado;
  }

  return {
    registrarEvento,
    obtenerEventosEntre
  };
}

const registro = crearRegistroEventos();

const t1 = registro.registrarEvento("Usuario logueado");
const t2 = registro.registrarEvento("Usuario hizo click");
const t3 = registro.registrarEvento("Usuario cerró sesión");

const eventos = registro.obtenerEventosEntre({
  inicio: t1,
  fin: t3
});

console.log(eventos);
