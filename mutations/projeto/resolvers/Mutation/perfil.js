const { perfis, perfilProximoId } = require("../../data/db");

function indicePerfil(filtro) {
  if (!filtro) return -1;
  const { id, nome } = filtro;

  if (id) return perfis.findIndex(perfil => perfil.id === id);
  else if (nome) return perfis.findIndex(perfil => perfil.nome === nome);
  return -1;
}

module.exports = {
  novoPerfil(_, { dados }) {
    const nomeExistente = perfis.some(perfil => perfil.nome === dados.nome);
    if (nomeExistente) {
      throw new Error("Perfil Cadasstrado");
    }
    const perfil = {
      id: perfilProximoId(),
      nome: dados.nome
    };
    perfis.push(perfil);
    return perfil;
  },
  alterarPerfil(_, { filtro, novosDados }) {
    const id = indicePerfil(filtro);
    const nomeExistente = perfis.some(
      perfil => perfil.nome === novosDados.nome
    );

    if (nomeExistente) {
      throw new Error("Perfil Cadasstrado");
    }

    perfis[id].nome = novosDados.nome;
    return perfis[id];
  },
  excluirPerfil(_, { filtro }) {
    const id = indicePerfil(filtro);
    if (id < 0) return null;
    const excluidos = perfis.splice(id, 1);
    return excluidos ? excluidos[0] : null;
  }
};
