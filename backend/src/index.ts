import express from "express";
import cors from "cors";
import servicesRoutes from "./routes/services.routes";

const server = express();

server.use(cors({ origin: "*" }));
server.use(express.json());

server.use("/api", servicesRoutes);

server.listen(4000, () => console.log("Server started on port: 4000"));
