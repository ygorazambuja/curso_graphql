const { perfis, usuarios } = require("../data/db");

module.exports = {
  ola() {
    return "Bom dia";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ygor",
      email: "ygorazambuja@gmail.com",
      idade: 25,
      salario_real: 99999.99,
      vip: true
    };
  },
  produtoEmDestaque() {
    return {
      nome: "PC Gaymer",
      preco: 666.88,
      desconto: 10
    };
  },
  numerosMegaSena() {
    //   return [4, 5, 3, 2, 1, 9];
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const filtered = usuarios.filter(u => u.id == id);
    return filtered ? filtered[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const filtered = perfis.filter(p => p.id == id);
    return filtered ? filtered[0] : null;
  }
};
