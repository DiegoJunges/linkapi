import xml2js from 'xml2js';
import * as HTTPUtil from '../util/request';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { toXML } = require('jstoxml');

export class BlingClient {
  data: any;

  constructor(data?: any, protected request = new HTTPUtil.Request()) {
    this.data = data;
  }

  async postTrades(trades: any) {
    console.log(trades);
    const promises = trades.data.map(
      (data: {
        title: any;
        official_document: any;
        won_time: any;
        value: any;
      }) => {
        const objXml = {
          // pedido: {
          pedido: {
            cliente: {
              nome: data.title,
              tipoPessoa: 'J',
              endereco: 'Rua Visconde de São Gabriel',
              cpf_cnpj: data.official_document,
              ie_rg: '3067663000',
              numero: '392',
              complemento: 'Sala 54',
              bairro: 'Cidade Alta',
              cep: '95.700-000',
              cidade: 'Bento Gonçalves',
              uf: 'RS',
              fone: '5481153376',
              email: 'teste@teste.com.br',
            },
            transporte: {
              transportadora: 'Transportadora XYZ',
              tipo_frete: 'R',
              servico_correios: 'SEDEX - CONTRATO',
              dados_etiqueta: {
                nome: 'Endereço de entrega',
                endereco: 'Rua Visconde de São Gabriel',
                numero: '392',
                complemento: 'Sala 59',
                municipio: 'Bento Gonçalves',
                uf: 'RS',
                cep: '95.700-000',
                bairro: 'Cidade Alta',
              },
              volumes: {
                volumes: [
                  {
                    servico: 'SEDEX - CONTRATO',
                    codigoRastreamento: '',
                  },
                  {
                    servico: 'PAC - CONTRATO',
                    codigoRastreamento: '',
                  },
                ],
              },
            },
            itens: {
              item: [
                {
                  codigo: '001',
                  descricao: 'Caneta 001',
                  un: 'Pç',
                  qtde: '10',
                  vlr_unit: '1.68',
                },
                {
                  codigo: '002',
                  descricao: 'Caderno 002',
                  un: 'Un',
                  qtde: '3',
                  vlr_unit: '3.75',
                },
                {
                  codigo: '003',
                  descricao: 'Teclado 003',
                  un: 'Cx',
                  qtde: '7',
                  vlr_unit: '18.65',
                },
              ],
            },
            parcelas: {
              parcela: [
                {
                  data: data.won_time,
                  vlr: data.value,
                  obs: 'Teste obs 1',
                },
              ],
            },
            vlr_frete: '15',
            vlr_desconto: '10',
            obs: 'Testando o campo observações do pedido',
            obs_internas: 'Testando o campo observações internas do pedido',
          },
          // },
        };
        const xmlOptions = {
          header: true,
          indent: '  ',
        };
        const xml = toXML(objXml, xmlOptions);
        return xml;
      },
    );

    try {
      console.log(promises);
      // await Promise.all(promises);
      const response = await this.request.post<any>(
        `https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.BLING_APIKEY}&xml=${promises}`,
      );

      return response.data;
    } catch (err) {
      console.log(err);
      // return undefined;
    }
  }
}
