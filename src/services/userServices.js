const fs = require("fs");
const path = require("path")
const bcryptjs = require("bcryptjs")

const usersJSON = path.join(__dirname,"../database/usuarios.json");
const users = JSON.parse(fs.readFileSync(usersJSON, "utf-8"));

function saveUsers() {
  const to_text = JSON.stringify(users, null, 4);
  fs.writeFileSync(usersJSON, to_text, "utf-8");
}

module.exports = {
  getAll() {
    return users;
  },

  findOne(id) {
    const user = users.find((user) => {
      return user.id == id;
    });
    return user;
  },

  create(body) {
    const user_to_create = {
      id: Date.now(),
      user_name : body.user_name,
      mail: body.mail,
      password: body.password,
      address : body.address
    };

    users.push(user_to_create);

    saveUsers();
  },

  update(id, body) {
    const index = users.findIndex((user) => {
      return user.id == id;
    });

    const user_to_update = {
      id: users[index].id,
      image: users[index].image,
      ...body,
    };

    users[index] = user_to_update;

    saveUsers();
  },

  destroy(id) {
    const index = games.findIndex((game) => {
      return game.id == id;
    });

    users.splice(index, 1);

    saveUsers();
  },
};
