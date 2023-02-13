import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import models from '../routes/models.js';
import { TABLES } from '../configs/database.js';
dotenv.config();
const { User, UserCate, UserPermission } = models;

export const verifyTokenMiddleware = (req, res, next) => {
  const start = new Date().getTime();
  try {
    let accessToken = req.headers?.authorization?.split('Bearer ')[1];

    if (!accessToken) {
      return res.status(403).send({
        error: 'No token provided.',
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }

    jwt.verify(accessToken, process.env.AUTH_ACCESS_SECRET, (err, decoded) => {
      if (err) {
        console.log('Verify access token error', err.message);
        return res.status(401).send({
          error: `Verify access token error: ${err?.message}.`,
          success: false,
          exe_time: new Date().getTime() - start,
        });
      }
      req.userInfo = decoded;
      req.accessToken = accessToken;
      next();
    });
  } catch (error) {
    console.log('internal server error', error.message);
    return res.status(500).send({
      error: error.message,
      success: false,
      exe_time: new Date().getTime() - start,
    });
  }
};

export const verifyPermissionMiddleware = (module, permission) => {
  return async (req, res, next) => {
    const start = new Date().getTime();
    try {
      const data = await User.findOne({
        where: {
          user_id: req?.userInfo?.user_id,
        },
        include: [{ model: UserCate, as: 'user_cate', attributes: TABLES.tbl_user_cates.default_attributes, include: [{ model: UserPermission, as: 'permissions' }] }],
      });
      if (data?.user_cate?.permissions?.length > 0 && data?.user_cate?.permissions?.find((per) => per?.module === module && per?.permission === permission)) {
        console.log('Verified permission');
        return next();
      }
      return res.status(403).send({
        error: 'You do not have permission to access the API.',
        success: false,
        exe_time: new Date().getTime() - start,
      });
    } catch (error) {
      console.log('internal server error', error.message);
      return res.status(500).send({
        error: error.message,
        success: false,
        exe_time: new Date().getTime() - start,
      });
    }
  };
};
