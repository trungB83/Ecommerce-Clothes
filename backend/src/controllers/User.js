// Import Product Model
import User from "../models/User.js";

// Get all User
export const getUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.send({
      data: data,
      success: true,
      message: "get User ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get User by id
export const getUserById = async (req, res) => {
  try {
    const data = await User.findAll({
      where: {
        user_id: req.params.id,
      },
    });
    res.send(data[0]);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

// Get User filler Admin
export const getUserRoleAdmin = async (req, res) => {
  try {
    const data = await User.findAll({
      where: {
        role_id: "1",
      },
    });
    res.send({
      data: data,
      success: true,
      message: "get Admin user ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get User filler Editor
export const getUserRoleEditor = async (req, res) => {
  try {
    const data = await User.findAll({
      where: {
        role_id: "2",
      },
    });
    res.send({
      data: data,
      success: true,
      message: "get Editor user ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get User filler Customer
export const getUserRoleCustomer = async (req, res) => {
  try {
    const data = await User.findAll({
      where: {
        role_id: "3",
      },
    });
    res.send({
      data: data,
      success: true,
      message: "get Customer user ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Create a new User
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.json({
      message: "User Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update User by id
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        user_id: req.params.id,
      },
    });
    res.json({
      message: "User Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete User by id
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        user_id: req.params.id,
      },
    });
    res.json({
      message: "User Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
