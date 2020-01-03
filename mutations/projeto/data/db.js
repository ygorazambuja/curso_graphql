let id = 1;
let perfilId = 1;

function proximoId() {
  return id++;
}

function perfilProximoId() {
  return perfilId++;
}
const usuarios = [
  {
    id: proximoId(),
    nome: "user1",
    email: "user1@.com",
    idade: 01,
    perfil_id: 1,
    status: "ATIVO"
  },
  {
    id: proximoId(),
    nome: "user2",
    email: "user2@.com",
    idade: 02,
    perfil_id: 2,
    status: "INATIVO"
  },
  {
    id: proximoId(),
    nome: "user3",
    email: "user3@.com",
    idade: 03,
    perfil_id: 1,
    status: "BLOQUEADO"
  }
];

const perfis = [
  {
    id: perfilProximoId(),
    nome: "Comum"
  },
  { id: perfilProximoId(), nome: "Administrador" }
];

module.exports = { usuarios, perfis, proximoId, perfilProximoId };
