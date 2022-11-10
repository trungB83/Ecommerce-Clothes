// Import Product Model
import User from "../models/User.js";

// Get all products
export const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    res.send({
      data: user,
      success: true,
      message: "get User ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get product by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        product_id: req.params.id,
      },
    });
    res.send(product[0]);
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
