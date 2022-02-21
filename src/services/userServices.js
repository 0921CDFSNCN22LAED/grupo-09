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
    try {
      return await db.Users.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  async findOne(id) {
    try {
      return await db.Users.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  async findEmail(email_ingresado) {
    try {
      const user = await db.Users.findOne({
        where: {
          email: email_ingresado,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  async create(body, file) {
    try {
      const user = await db.Users.create({
        email: body.email,
        user_name: body.user_name,
        password: bcryptjs.hashSync(body.password, 10),
        user_image: file,
        address: body.address,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  async update(id, body, file) {
    try {
      const user = await db.Users.findByPk(id);
      if (!file) {
        file = user.user_image;
      }
      if (body.password == "") {
        body.password = user.password;
      }
      if (body.address == "") {
        body.address = user.address;
      }
      await user.update({
        password: bcryptjs.hashSync(body.password, 10),
        user_image: file,
        address: body.address,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  async destroy(id) {
    try {
      return await db.Users.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
