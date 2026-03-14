import providedServices, { type Services } from "../data/services";

export class ServicesService {
  private readonly store: Services[];

  constructor() {
    this.store = providedServices;
  }

  listServices = async () => this.store;
}

export default new ServicesService();
