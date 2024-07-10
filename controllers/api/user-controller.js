const UserAddDTO = require("../../models/user/user-add-dto");
const userService = require("../../services/user-service");

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();
  res.json(result);
};

const getOneUser = async (req, res) => {
  const result = await userService.getOneUser(req.params.id);
  res.json(result);
};

const getOneUserByActiveStatus = async (req, res) => {
  const { isActive } = req.query;
  const result = await userService.getOneUserByActiveStatus(
    req.params.id,
    isActive
  );
  res.json(result);
};

const getUserByUsername = async (req, res) => {
  const result = await userService.getUserByUsername(req.params.username);
  res.json(result);
};

const getUsersByActiveStatus = async (req, res) => {
  const { isActive } = req.query;
  const result = await userService.getUsersByActiveStatus(isActive);
  res.json(result);
};

const addUser = async (req, res) => {
  const userDTO = new UserAddDTO(req.body);
  const result = await userService.addUser(userDTO);
  res.json(result);
};

module.exports = {
  getAllUsers,
  getOneUser,
  getOneUserByActiveStatus,
  getUserByUsername,
  getUsersByActiveStatus,
  addUser,
};
