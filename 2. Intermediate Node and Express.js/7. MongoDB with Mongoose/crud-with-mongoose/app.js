const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/first_mongoose_app", {
    useMongoClient: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const elie = new Instructor({ firstName: "Elie" });

elie
  .save()
  .then((newElie) => {
    console.log(newElie);
  })
  .catch((err) => {
    console.log("Error saving!", err);
  });
