const { Mongoose } = require("mongoose");

const instructorSchema = new Mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    isHilarious: {
      type: Boolean,
      default: true,
    },
    favoriteColors: [String],
  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
