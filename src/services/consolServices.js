const db = require("../database/models/");

//Guardando datos en la BD con JSON
/*const consolsJSON = path.join(__dirname, "../database/consolas.json");
const consols = JSON.parse(fs.readFileSync(consolsJSON, "utf-8"));

function saveProducts() {
  const to_text = JSON.stringify(consols, null, 4);
  fs.writeFileSync(consolsJSON, to_text, "utf-8");
}*/

module.exports = {
  async getAll() {
    try {
      return await db.Consoles.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  async findOne(id) {
    try {
      return await db.Consoles.findByPk(id);
    } catch (error) {
      console.log(error);
    }
  },

  async create(body, files) {
    try {
      const consol_to_create = await db.Consoles.create({
        id: Date.now(),
        ...body,
        consol_image: files.consol_image.filename,
        logo: files.logo.filename,
      });
      return consol_to_create;
    } catch (error) {
      console.log(error);
    }
  },

  async update(id, body, files) {
    try {
      const consol = await db.Consoles.findByPk(id);

      const logo_filename = files == true && files.logo == true ? files.logo.filename : consol.logo;

      const consol_image_filename = files == true && files.consol_image == true ? files.consol_image.filename : consol.consol_image;

      await consol.update({
        id: consol.id,
        ...body,
        consol_image: consol_image_filename,
        logo: logo_filename,
        family: consol.family,
      });

      return consol;
    } catch (error) {
      console.log(error);
    }
  },

  async destroy(id) {
    try {
      return await db.Consoles.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
