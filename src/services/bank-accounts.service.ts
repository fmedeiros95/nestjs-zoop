import { Injectable } from '@nestjs/common';
import { IZoopBank, IZoopBankAccount, IZoopBankToken, IZoopDelete, IZoopResponse } from '../interfaces';
import { ZoopService } from '../zoop.service';

@Injectable()
export class ZoopBankAccounts {
  constructor(private readonly zoopService: ZoopService) {}

  list() {
    return this.zoopService.get<IZoopResponse<IZoopBank>>('/bank_accounts');
  }

  read(banckAccountId: string) {
    return this.zoopService.get<IZoopBank>(`/bank_accounts/${banckAccountId}`);
  }

  findBySeller(sellerId: string) {
    return this.zoopService.get<IZoopBank>(`/sellers/${sellerId}/bank_accounts`);
  }

  tokenize(data: IZoopBankAccount) {
    return this.zoopService.post<IZoopBankToken, IZoopBankAccount>('/bank_accounts/tokens', data);
  }

  attachToCustomer(banckAccountId: string, customerId: string) {
    return this.zoopService.post<IZoopBank, unknown>('/bank_accounts', {
      customer: customerId,
      token: banckAccountId,
    });
  }

  delete(bankAccountId: string) {
    return this.zoopService.delete<IZoopDelete>(`/bank_accounts/${bankAccountId}`);
  }
}
