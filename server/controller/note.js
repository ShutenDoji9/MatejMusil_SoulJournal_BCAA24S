const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/notes/getAbl");
const ListAbl = require("../abl/notes/listAbl");
const CreateAbl = require("../abl/notes/createAbl");
const UpdateAbl = require("../abl/notes/updateAbl");
const DeleteAbl = require("../abl/notes/deleteAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;
