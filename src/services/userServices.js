const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");

// const usersJSON = path.join(__dirname, "../../databaseJSON/usuarios.json");
// const users = JSON.parse(fs.readFileSync(usersJSON, "utf-8"));

// function saveUsers() {
//   const to_text = JSON.stringify(users, null, 4);
//   fs.writeFileSync(usersJSON, to_text, "utf-8");
// }

module.exports = {
  async getAll() {
    return await db.Users.findAll();
  },

  async findOne(id) {
    return await db.User.findByPk(id);
  },

  async findEmail(email) {
    return await db.User.findOne({
      where: {
        email: email,
      },
    });
  },

  async create(body, file) {
    const user = await db.User.create({
      email: body.email,
      user_name: body.user_name,
      password: bcryptjs.hashSync(body.password, 10),
      user_image: file,
      address: body.address,
    });
    return user;
  },

  async update(id, body, file) {
    const user = await db.User.findByPk(id);
    await user.update({
      email: body.email,
      user_name: body.user_name,
      password: bcryptjs.hashSync(body.password, 10),
      user_image: file,
      address: body.address,
    });
    return user;
  },

  async destroy(id) {
    return await db.User.destroy({
      where: {
        id: id,
      },
    });
  },
};
