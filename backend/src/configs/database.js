// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('exam_hop', 'exam_user', 'hophop01', {
    host: '103.154.177.135',
    dialect: 'mysql'
});
 
// export connection
export default db;