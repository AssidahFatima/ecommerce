


const mongoose = require("mongoose");

const souscategorySchema = new mongoose.Schema(
  {
    cName: {
      type: String,
      required: true,
    },
},
  { timestamps: true }
);

const souscategoryModel = mongoose.model("sous-categories", souscategorySchema);
module.exports = souscategoryModel;