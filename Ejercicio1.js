function crearGestorTareas() {
  const tareas = new Map();

  function agregarTarea({ id, descripcion, etiquetas = [] }) {
    if (tareas.has(id)) {
      return false;
    }

    const tarea = {
      id,
      descripcion,
      completada: false,
      etiquetas: new Set(etiquetas)
    };

    tareas.set(id, tarea);
    return true;
  }

  function marcarCompletada(id) {
    if (!tareas.has(id)) return false;

    const tarea = tareas.get(id);
    tarea.completada = true;
    return true;
  }

  function obtenerTareasPorEtiqueta(etiqueta) {
    const resultado = [];

    for (const tarea of tareas.values()) {
      if (tarea.etiquetas.has(etiqueta)) {
        resultado.push(tarea.descripcion);
      }
    }

    return resultado;
  }

  function obtenerResumenTareas() {
    let total = tareas.size;
    let completadas = 0;

    for (const tarea of tareas.values()) {
      if (tarea.completada) completadas++;
    }

    return {
      total,
      completadas,
      pendientes: total - completadas
    };
  }

  return {
    agregarTarea,
    marcarCompletada,
    obtenerTareasPorEtiqueta,
    obtenerResumenTareas
  };
}

const gestor = crearGestorTareas();

gestor.agregarTarea({
  id: 1,
  descripcion: "JavaScript avanzado",
  etiquetas: ["programacion","javascript"]
});

gestor.agregarTarea({
  id: 2,
  descripcion: "Express y NodeJS",
  etiquetas: ["backend"]
});

gestor.marcarCompletada(1);
console.log(gestor.obtenerTareasPorEtiqueta("backend"));
console.log(gestor.obtenerResumenTareas());