// import the validator class
const { validate } = require("jsonschema");

// require the book schema (a JSON file that we generated on jsonschema.net)
const bookSchema = require("./bookSchema.json");

router.route("/books").post((req, res, next) => {
  // check if the current request.body payload is a valid book
  const result = validate(req.body, bookSchema);

  // jsonschema validation results in a "valid" key being set to "false" if the instance doesn't match the schema
  if (!result.valid) {
    // pass the validation errors to the error handler
    //  the "stack" key is generally the most useful
    return next(result.errors.map((error) => error.stack));
  }

  // at this point in the code, we know we have a valid payload with a data key
  const book = req.body.data;
  /* 
    (not implemented) insert the book into the database here
  */
  return res.status(201).json(book);
});
