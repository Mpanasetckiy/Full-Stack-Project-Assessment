exports.errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    console.log(err.message);
    return res.status(400).send({ message: err.message });
  }
  res.status(500).send({ message: err.message });
};
