import { IZoopEnty, IZoopMetadata } from './common.interface';

export interface IZoopBoleto extends IZoopEnty {
  readonly accepted?: string;
  readonly address?: string;
  readonly bank_code?: string;
  readonly barcode?: string;
  readonly customer?: string;
  readonly description?: string;
  readonly document_number?: string;
  readonly downloaded?: string;
  readonly expiration_date?: Date;
  readonly fingerprint?: string;
  readonly metadata?: IZoopMetadata;
  readonly paid_at?: string;
  readonly printed?: string;
  readonly recipient?: string;
  readonly reference_number?: string;
  readonly sequence?: string;
  readonly uri?: string;
  readonly url?: string;
}
