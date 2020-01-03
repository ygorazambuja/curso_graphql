const { perfis } = require("../data/db");
module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const filtered = perfis.filter(p => p.id == usuario.perfil_id);
    return filtered ? filtered[0] : null;
  }
};
