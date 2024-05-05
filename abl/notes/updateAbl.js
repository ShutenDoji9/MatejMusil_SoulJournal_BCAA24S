const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const noteDao = require("../../dao/notes-dao.js");

const updateNoteDtoInSchema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
    date: { type: "string", format: "date-time" },
    name: { type: "string", minLength: 3 },
    note: { type: "string" },
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
  try {
    let note = req.body;

    // validate input
    const valid = ajv.validate(updateNoteDtoInSchema, note);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    const updatedNote = noteDao.update(note);
    if (!updatedEvent) {
      res.status(404).json({
        code: "noteNotFound",
        message: `Event ${note.id} not found`,
      });
      return;
    }

    res.json(updatedNote);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
