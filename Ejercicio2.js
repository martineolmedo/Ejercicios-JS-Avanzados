function procesarListas(...listas) {
  const todos = listas.flat();

  const invitadosUnicos = new Set(todos);

  return {
    invitadosUnicos,
    conteoTotalInvitados: todos.length,
    conteoInvitadosUnicos: invitadosUnicos.size
  };
}

const lista1 = ["Martin", "Andres", "Pedro"];
const lista2 = ["Juan", "Martin"];
const lista3 = ["María", "Sofía"];

const resultado = procesarListas(lista1, lista2, lista3);


console.log(resultado.invitadosUnicos);
console.log(resultado.conteoTotalInvitados);
console.log(resultado.conteoInvitadosUnicos);