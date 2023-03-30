import { Inject, Injectable } from '@nestjs/common';
import { IZoopBoleto, IZoopMessage, IZoopOptions, IZoopResponseTransaction } from '../interfaces';
import { ZOOP_OPTIONS } from '../zoop.constans';
import { ZoopService } from '../zoop.service';

@Injectable()
export class ZoopBoletosService {
  constructor(
    @Inject(ZOOP_OPTIONS) private readonly zoopOptions: IZoopOptions,
    private readonly zoopService: ZoopService
  ) {}

  sendByEmail(boletoId: string) {
    return this.zoopService.post<IZoopMessage, unknown>(`/boletos/${boletoId}/emails`, {});
  }

  read(boletoId: string) {
    return this.zoopService.get<IZoopBoleto>(`/boletos/${boletoId}`);
  }

  approveSandbox(transactionId: string) {
    return this.zoopService.post<IZoopResponseTransaction, unknown>(`/transactions/${transactionId}/approve`, {});
  }

  cancel(transactionId: string) {
    const { baseURL, marketplaceId } = this.zoopOptions;
    const url = baseURL.concat(`/boletos/cancellation/marketplaces/${marketplaceId}/transactions/${transactionId}`);
    return this.zoopService.request('post', url, {});
  }
}
