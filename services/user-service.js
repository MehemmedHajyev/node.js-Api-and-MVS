const pool = require("../config/db");
const {
  DATA_LISTED_SUCCESSFULLY,
  DUPLICATE_ROW_FOUND,
  DATA_ADDED_SUCCESSFULLY,
} = require("../utils/constants/messages");
const { SuccessResult, ErrorResult } = require("../utils/results/result");
const UserValidation = require("../validations/user");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  try {
    const res = await pool.query("select * from users u where u.deleted = 0");
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY, res.rows);
  } catch (error) {
    // log database error here
    return new ErrorResult(error.message);
  }
};

const getUserByUsername = async (username) => {
  try {
    const res = await pool.query(
      "select * from users u where u.deleted = 0 and u.username = $1",
      [username]
    );
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY, res.rows[0]);
  } catch (error) {
    return new ErrorResult(error.message);
  }
};

const getOneUser = async (id) => {
  try {
    const res = await pool.query(
      "select * from users u where u.deleted = 0 and u.id = $1",
      [id]
    );
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY, res.rows[0]);
  } catch (error) {
    return new ErrorResult(error.message);
  }
};

const getUsersByActiveStatus = async (status) => {
  try {
    const res = await pool.query(
      "select * from users u where u.deleted = 0 and u.isActive = $1",
      [status]
    );
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY, res.rows);
  } catch (error) {
    return new ErrorResult(error.message);
  }
};

const getOneUserByActiveStatus = async (id, status) => {
  try {
    const res = await pool.query(
      "select * from users u where u.deleted = 0 and u.isactive = $1 and u.id = $2",
      [status, id]
    );
    return new SuccessResult(DATA_LISTED_SUCCESSFULLY, res.rows[0]);
  } catch (error) {
    return new ErrorResult(error.message);
  }
};

const addUser = async (user) => {
  try {
    const validator = new UserValidation(user);
    const validationResult = validator.validate();

    if (!validationResult.isValid)
      return new ErrorResult(validationResult.toString());

    const businessResult = await checkDuplicateUser(user);
    console.log(businessResult);
    if (!businessResult.success) return businessResult;

    user.password = await bcrypt.hash(user.password, 10);

    const res = await pool.query("call add_user($1,$2,$3)", [
      user.username,
      user.password,
      user.isActive,
    ]);
    const addedUser = await getUserByUsername(user.username);
    return new SuccessResult(DATA_ADDED_SUCCESSFULLY, addedUser.data);
  } catch (error) {
    return new ErrorResult(error.message);
  }
};

const checkDuplicateUser = async (user) => {
  const isExistingData = await getUserByUsername(user.username);
  if (isExistingData.data) return new ErrorResult(DUPLICATE_ROW_FOUND);

  return new SuccessResult();
};

module.exports = {
  getAllUsers,
  getOneUser,
  getOneUserByActiveStatus,
  getUserByUsername,
  getUsersByActiveStatus,
  addUser,
};
