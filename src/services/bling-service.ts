import { BlingClient } from '../clients/bling';

export class BlingService {
  constructor(protected blingClient = new BlingClient()) {}

  async create(trade: any) {
    return this.blingClient.postTrades(trade);
  }
}
