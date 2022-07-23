const mongoose = require("mongoose");
const keys = require("./keys");

//mongoDB connection
mongoose.connect(keys.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(con => {
    console.log("connected to mongoDB");
  })
  