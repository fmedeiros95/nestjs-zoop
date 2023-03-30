import { IZoopEnty, ZoopPaymentType } from './common.interface';
import { IZoopFeeDetails } from './plans.interface';

export interface IFeeSubscription extends IZoopEnty {
  readonly seller?: string;
  readonly customer?: string;
  readonly start_date?: string;
  readonly auto_collection?: string;
  readonly payment_types?: ZoopPaymentType;
  readonly trial_start?: string;
  readonly trial_end?: string;
  readonly current_term_start?: string;
  readonly current_term_end?: string;
  readonly quantity?: number;
  readonly plan?: IZoopFee;
}
export interface IZoopFee extends IZoopEnty {
  readonly name?: string;
  readonly invoice_name?: string;
  readonly description?: string;
  readonly is_active?: boolean;
  readonly maximum_amount?: number;
  readonly setup_cost?: number;
  readonly date_start?: string;
  readonly date_end?: string;
  readonly interval?: string;
  readonly interval_count?: number;
  readonly duration_in_months?: number;
  readonly grace_period_in_minutes?: number;
  readonly is_default_per_transaction?: boolean;
  readonly prepaid?: boolean;
  readonly fee_details?: IZoopFeeDetails;
  readonly uri?: string;
  readonly visible?: boolean;
}
