const userServices = require("../../services/userServices");
const API_HOST = require("../../constants");

const userController = {
  /*List Method*/
  list: async (req, res) => {
    const users = await userServices.getAll();
    const newUsers = [];
    for (let i = 0; i < users.length; i++) {
      newUsers.push({
        id: users[i].id,
        user_name: users[i].user_name,
        email: users[i].email,
        detail: `${API_HOST}/api/users/${users[i].id}`,
      });
    }
    const respuesta = {
      meta: {
        status: 200,
        count: users.length,
        url: "api/users",
      },
      data: newUsers,
    };
    res.json(respuesta);
  },

  /*Detail Method*/
  detail: async (req, res) => {
    const user = await userServices.findOne(req.params.id);
    const newUser = {
      id: user.id,
      user_name: user.user_name,
      email: user.email,
      address: user.address,
      user_image: `${API_HOST}/api/users/${user.id}/${user.user_image}`,
    };
    const respuesta = {
      meta: {
        status: 200,
        url: `api/users/${user.id}`,
      },
      data: newUser,
    };
    res.json(respuesta);
  },
};

module.exports = userController;
