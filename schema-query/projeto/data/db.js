const usuarios = [
  {
    id: 1,
    nome: "user1",
    email: "user1@.com",
    idade: 01,
    perfil_id: 1,
    status: "ATIVO"
  },
  {
    id: 2,
    nome: "user2",
    email: "user2@.com",
    idade: 02,
    perfil_id: 2,
    status: "INATIVO"
  },
  {
    id: 3,
    nome: "user3",
    email: "user3@.com",
    idade: 03,
    perfil_id: 1,
    status: "BLOQUEADO"
  }
];

const perfis = [
  {
    id: 1,
    nome: "Comum"
  },
  { id: 2, nome: "Administrador" }
];

module.exports = { usuarios, perfis };
