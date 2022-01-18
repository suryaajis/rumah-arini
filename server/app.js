const express= require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(() => {
  console.log("This app server listening on port:", port);
});
