import { IZoopEnty, ZoopPaymentType } from './common.interface';

export interface IZoopSubscription extends IZoopEnty {
  readonly uuid?: string;
  readonly plan?: string;
  readonly on_behalf_of?: string;
  readonly customer?: string;
  readonly description?: string;
  readonly payment_method?: ZoopPaymentType;
  readonly due_date?: Date;
  readonly due_since_date?: Date;
  readonly expiration_date?: Date;
  readonly amount?: number;
  readonly currency?: string;
  readonly suspended_at?: Date;
  readonly uri?: string;
}
