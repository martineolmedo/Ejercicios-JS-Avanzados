function transformarYAgruparUsuario(usuariosApi, ...propiedadesAdicionales) {
    const usuariosTransformados = usuariosApi.map(usuario => {
        const { id, nombre_completo, email, detalles = {} } = usuario;

        const nombre = nombre_completo.split(' ')[0];

        const extras = {};
        propiedadesAdicionales.forEach(prop => {
            if (prop in detalles) {
                extras[prop] = detalles[prop];
            }
        });

        return {
            userId: id,
            nombre,
            email,
            ...extras
        };
    });

    const usuariosPorPais = new Map();
    const incluirPais = propiedadesAdicionales.includes("pais_residencia");

    if (incluirPais) {
        usuariosApi.forEach(usuario => {
            const { id, detalles = {} } = usuario;
            const pais = detalles.pais_residencia;

            if (!pais) return;

            if (!usuariosPorPais.has(pais)) {
                usuariosPorPais.set(pais, new Set());
            }

            usuariosPorPais.get(pais).add(id);
        });
    }

    return {
        usuariosTransformados,
        usuariosPorPais
    };
}

const usuariosApi = [
  {
    id: 1,
    nombre_completo: "Ana Pérez",
    email: "ana.perez@example.com",
    detalles: { edad: 30, pais_residencia: "ES" }
  },
  {
    id: 2,
    nombre_completo: "Juan Gómez",
    email: "juan.gomez@example.com",
    detalles: { edad: 25, pais_residencia: "AR" }
  },
  {
    id: 3,
    nombre_completo: "María López",
    email: "maria.lopez@example.com",
    detalles: { edad: 28, pais_residencia: "ES" }
  },
  {
    id: 4,
    nombre_completo: "Carlos Ruiz",
    email: "carlos.ruiz@example.com",
    detalles: { edad: 35 }
  },
  {
    id: 5,
    nombre_completo: "Lucía Fernández",
    email: "lucia.fernandez@example.com",
    detalles: { pais_residencia: "AR" }
  },
  {
    id: 6,
    nombre_completo: "Pedro Sánchez",
    email: "pedro.sanchez@example.com",
    detalles: {}
  }
];

const resultado = transformarYAgruparUsuario(
  usuariosApi,
  "edad",
  "pais_residencia"
);

console.log(resultado.usuariosTransformados);
console.log(resultado.usuariosPorPais);