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
  getAll() {
    return db.Users.findAll();
  },

  findOne(id) {
    return db.Users.findByPk(id);
  },

  findEmail(email_ingresado) {
    const user = db.Users.findOne({
      where: {
        email: email_ingresado,
      },
    });
    return user;
  },

  async create(body, file) {
    const user = await db.Users.create({
      email: body.email,
      user_name: body.user_name,
      password: bcryptjs.hashSync(body.password, 10),
      user_image: file,
      address: body.address,
    });
    return user;
  },

  async update(id, body, file) {
    const user = await db.Users.findByPk(id);
    // if (!file) {
    //   file = user.user_image;
    //   console.log(file);
    // }
    // if (body.password == "") {
    //   body.password = user.password;
    //   console.log(body.password);
    // }
    // if (body.address == "") {
    //   body.address = user.address;
    //   console.log(body.address);
    // }
    await user.update({
      //password: bcryptjs.hashSync(body.password, 10),
      user_image: file,
      address: body.address,
    });
    return user;
  },

  async destroy(id) {
    return await db.Users.destroy({
      where: {
        id: id,
      },
    });
  },
};
