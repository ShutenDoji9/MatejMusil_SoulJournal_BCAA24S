const noteDao = require("../../dao/notes-dao.js");

async function ListAbl(req, res) {
  try {
    const noteList = noteDao.list();
    res.json(noteList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
