import { Request, Response } from 'express';
import { PipedriveService } from '../services/pipedrive-service';

class ProductController {
  private static PipedriveService = new PipedriveService();

  public async index(req: Request, res: Response) {
    try {
      const trade = await ProductController.PipedriveService.fetchTradeIns();

      res.status(200).send(trade);
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}

export default ProductController;
