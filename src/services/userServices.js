const fs = require("fs");

const usersJSON = fs.readFileSync("src/database/usuarios.json", "utf-8");
const users = JSON.parse(usersJSON);

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
      ...body,
      image: "",
      logo: "",
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
