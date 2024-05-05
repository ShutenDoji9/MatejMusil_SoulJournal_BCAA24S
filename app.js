const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const userController = require("./controller/user");
const noteController = require("./controller/note");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/user", userController);
app.use("/note", noteController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
