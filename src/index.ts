import express, { Express } from "express";
import cors from "cors";
import { getConnection } from "./core/db.core";
import { userRouter } from "./modules/user-management/user.controller";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1/user-management", userRouter);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(getConnection());
  console.log(`⚡️[server]: is running at local on http://localhost:${PORT}`);
});
