// all global packages
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

// expres app
const app = express();

// all global middlewares
app.use(helmet());

app.use(cors());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

import messageRoutes from "./routes/message.routes.js";
import chatRoutes from "./routes/chat.routes.js";
app.use("/api/v1", chatRoutes);

app.use("/api/v1", messageRoutes);
// app.use()

export default app;
