const { Schema, default: mongoose } = require("mongoose");

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    releaseYear: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
