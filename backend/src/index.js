// import external libraries
import express from "express";
import cors from "cors";

// import internal libraries
import db from "./configs/database.js";
import routers from "./routes/routes.js";
import { APP_PORT } from "./configs/common.js";
const app = express();

// middlewares 
app.use(express.json());
app.use(cors());

// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use routers
app.use('/api/v1', routers);

// listen on port
app.listen(APP_PORT, () => console.log(`Server running at http://localhost:${APP_PORT}`));