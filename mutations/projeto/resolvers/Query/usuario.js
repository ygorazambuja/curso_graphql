const { usuarios } = require("../../data/db");

module.exports = {
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const filtered = usuarios.filter(u => u.id == id);
    return filtered ? filtered[0] : null;
  }
};
