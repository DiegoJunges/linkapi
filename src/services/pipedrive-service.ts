import { PipedriveClient } from '../clients/pipedrive';

export class PipedriveService {
  constructor(protected pipedriveClient = new PipedriveClient()) {}

  async fetchTradeIns() {
    return this.pipedriveClient.fetchTradeIns();
  }
}
