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
    } catch (e) {
      return e;
    }
  },

  async findOne(id) {
    return await db.Consoles.findByPk(id);
  },

  async create(body, files) {
    const consol_to_create = await db.Consoles.create({
      id: Date.now(),
      ...body,
      consol_image: files.consol_image.filename,
      logo: files.logo.filename,
    });

    return consol_to_create;
  },

  async update(id, body, files) {
    const consol = await db.Consoles.findByPk(id);

    const logo_filename = files == true && files.logo == true ? files.logo.filename : consols[index].logo;

    const consol_image_filename = files == true && files.consol_image == true ? files.consol_image.filename : consols[index].consol_image;

    await consol.update({
      id: consol.id,
      ...body,
      consol_image: consol_image_filename,
      logo: logo_filename,
      family: consol.family,
    });

    return consol;
  },

  async destroy(id) {
    return await db.Consoles.destroy({
      where: {
        id: id,
      },
    });
  },
};
