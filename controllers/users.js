const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();

  return res.json(users);
};

const createUser = async (req, res) => {
  const user = req.body;
  const createdUser = await User.create(user);

  return res.json(createdUser);
};

exports.getUsers = getUsers;
exports.createUser = createUser;
