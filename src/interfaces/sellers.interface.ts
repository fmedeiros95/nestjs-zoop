import { IZoopAddress, IZoopEnty, IZoopMetadata, IZoopOwner, IZoopPerson } from './common.interface';

/**
 * Merchant Interface
 */
export interface IZoopMerchant {
  readonly mcc: string;
}

/**
 * Statement Interface
 */
export interface IZoopStatement {
  readonly description?: string;
  readonly account_balance?: string;
  readonly current_balance?: string;
  readonly fiscal_responsibility?: string;
  readonly statement_descriptor?: string;
  readonly default_debit?: string;
  readonly default_credit?: string;
  readonly delinquent?: boolean;
  readonly show_profile_online?: boolean;
  readonly is_mobile?: boolean;
  readonly decline_on_fail_security_code?: boolean;
  readonly decline_on_fail_zipcode?: boolean;
  readonly payment_methods?: string;
  readonly merchant_code?: string;
  readonly terminal_code?: string;
  readonly uri?: string;
  readonly marketplace_id?: string;
  readonly metadata?: IZoopMetadata;
}

/**
 * Seller Interface
 */
export interface IZoopSeller extends IZoopMerchant, IZoopStatement, IZoopPerson, IZoopEnty {}

/**
 * Business Interface
 */
export interface IZoopBusiness extends IZoopMerchant, IZoopStatement, IZoopEnty {
  readonly ein: string;
  readonly business_name: string;
  readonly business_email: string;
  readonly business_phone: string;
  readonly business_opening_date?: string;
  readonly business_description?: string;
  readonly business_facebook?: string;
  readonly business_twitter?: string;
  readonly business_website?: string;
  readonly business_address: IZoopAddress;
  readonly owner: IZoopOwner;
  readonly owner_address: IZoopAddress;
}

/**
 * Document Interface
 */
export interface IZoopDocument {
  readonly category: string;
  readonly description: string;
  readonly extension: string;
  readonly id: string;
  readonly md5: string;
  readonly metadata: IZoopMetadata;
  readonly mime_type: string;
  readonly name: string;
  readonly path: string;
  readonly size: number;
  readonly status: string;
  readonly uploaded_by: IUploaded;
  readonly uploaded_ip: string;
}

/**
 * Upload Interface
 */
export interface IUploaded {
  readonly id: string;
  readonly resource: string;
  readonly type: string;
}

export interface IQueryDocument {
  readonly file?: string;
  readonly category?: string;
  readonly metadata?: string;
  readonly description?: string;
}
