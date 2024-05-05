const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const notesDao = require("../../dao/notes-dao.js");

const createNoteDtoInSchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3 },
    date: { type: "string", format: "date-time" },
    note: { type: "string" },
    userId: { type: "string" },
  },
  required: ["date", "name"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    let note = req.body;

    // validate input
    const valid = ajv.validate(createNoteDtoInSchema, note);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    note = notesDao.create(note);
    res.json(note);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
