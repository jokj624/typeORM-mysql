import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import * as ormConfig from "./config/ormconfig";

dotenv.config();

const connectionDB = createConnection(ormConfig);

connectionDB.then(() => {
    console.log("[🔥 DB] Connected");
}).catch((err) => {
    console.log("[💡 ERR] ", err);
});

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '*',
    credentials: true
}));

export = app;