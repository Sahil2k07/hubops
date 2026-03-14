import type { Request, Response } from "express";
import servicesService, { ServicesService } from "../services/services.service";

class ServiceController {
  private readonly service: ServicesService;

  constructor(service: ServicesService) {
    this.service = service;
  }

  listServices = async (req: Request, res: Response) => {
    try {
      const data = await this.service.listServices();

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: (error as Error).message || "Something went wrong",
        error,
      });
    }
  };
}

export default new ServiceController(servicesService);
