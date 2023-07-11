const { Schema, default: mongoose } = require("mongoose");

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;
