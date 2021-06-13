import * as HTTPUtil from '../util/request';

export class PipedriveClient {
  constructor(protected request = new HTTPUtil.Request()) {}

  async fetchTradeIns(): Promise<any[] | undefined> {
    try {
      const response = await this.request.get<any>(
        `https://${process.env.ENTERPRISE_DOMAIN}.pipedrive.com/api/v1/deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_APIKEY}`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
}
