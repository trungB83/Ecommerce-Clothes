// Import Post Model
import Permision from "../models/Permision.js";

// Get all Permision
export const getPermisions = async (req, res) => {
  try {
    const post = await Permision.findAll();
    res.send({
      data: post,
      success: true,
      message: "get post ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Permision by id
export const getPermisionById = async (req, res) => {
  try {
    const data = await Permision.findAll({
      where: {
        permision_id: req.params.id,
      },
    });
    res.send(data[0]);
  } catch (err) {
    console.log(err);
  }
};

// Create a new Permision
export const createPermision = async (req, res) => {
  try {
    await Permision.create(req.body);
    res.json({
      message: "Permision Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Permision by id
export const updatePermision = async (req, res) => {
  try {
    await Permision.update(req.body, {
      where: {
        permision_id: req.params.id,
      },
    });
    res.json({
      message: "Permision Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Permision by id
export const deletePermision = async (req, res) => {
  try {
    await Permision.destroy({
      where: {
        permision_id: req.params.id,
      },
    });
    res.json({
      message: "Permision Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
