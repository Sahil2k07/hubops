import { Router } from "express";
import servicesController from "../controllers/services.controller";

const servicesRoutes = Router();

servicesRoutes.get("/services", servicesController.listServices);

export default servicesRoutes;
