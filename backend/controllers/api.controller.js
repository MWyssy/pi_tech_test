exports.getHealth = (req, res) => {
  res.status(200).send({message: "Up and Running"});
};
