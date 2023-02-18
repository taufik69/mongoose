const express = require("express");
const mongoose = require("mongoose");
const Moduledata = require("./model/dataSchema.js");
const app = express();

// connetion code
mongoose.connect(
  "mongodb+srv://test:123test123@cluster0.hzc2sqo.mongodb.net/user?retryWrites=true&w=majority",
  () => {
    console.log("mongo database succesfully connected");
  }
);

app.post("/", function (req, res) {
  const dataAll = {
    item: "journal",
    qty: 25,
    size: { h: 14, w: 21, uom: "cm" },
    status: "A",
  };

  const data = new Moduledata(dataAll);
  data.save();
  res.send(data);
});

app.listen(3000, () => {
  console.log("port running in 3000");
});
