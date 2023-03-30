import { IZoopEnty, IZoopMetadata, ZoopPaymentType } from './common.interface';
import { IZoopCurrency } from './transactions.interface';

export interface IZoopInvoice extends IZoopCurrency, IZoopEnty {
  readonly subscription?: string;
  readonly on_behalf_of?: string;
  readonly customer?: string;
  readonly invoice_customer?: any;
  readonly description?: string;
  readonly payment_methods?: ZoopPaymentType;
  readonly due_date?: Date;
  readonly paid_at?: Date;
  readonly voided_at: Date;
  readonly expiration_date?: string;
  readonly retries?: number;
  readonly max_retries?: number;
  readonly metadata?: IZoopMetadata;
  readonly uri?: string;
}
