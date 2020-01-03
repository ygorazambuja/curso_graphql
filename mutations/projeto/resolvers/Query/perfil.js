const { perfis } = require("../../data/db");
module.exports = {
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const filtered = perfis.filter(p => p.id == id);
    return filtered ? filtered[0] : null;
  }
};
