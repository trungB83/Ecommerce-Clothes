// Import Product Model
import Role from "../models/Role.js";

// Get all Role
export const getRoles = async (req, res) => {
  try {
    const user = await Role.findAll();
    res.send({
      data: user,
      success: true,
      message: "get User ok",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Role by id
export const getRoleById = async (req, res) => {
  try {
    const user = await Role.findAll({
      where: {
        product_id: req.params.id,
      },
    });
    res.send(product[0]);
  } catch (err) {
    console.log(err);
  }
};

// export const getUserRoleAdmin = async (req, res) => {
//   try {
//     const user = await User.findAll({
//       where: {
//         role_id: req.params.role_id,
//       },
//     });
//     res.send(product[0]);
//   } catch (err) {
//     console.log(err);
//   }
// };

// Create a new Role
export const createRole = async (req, res) => {
  try {
    await Role.create(req.body);
    res.json({
      message: "Role Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Role by id
export const updateRole = async (req, res) => {
  try {
    await Role.update(req.body, {
      where: {
        role_id: req.params.id,
      },
    });
    res.json({
      message: "Role Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Role by id
export const deleteRole = async (req, res) => {
  try {
    await Role.destroy({
      where: {
        role_id: req.params.id,
      },
    });
    res.json({
      message: "Role Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
