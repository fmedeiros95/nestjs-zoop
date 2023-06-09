import { IZoopVCheckList } from './bank-account.interface';
import { IZoopEnty, IZoopMetadata } from './common.interface';
/**
 * Card Token Interface
 */
export interface IZoopCardToken extends IZoopCard {
  readonly address: string;
  readonly address_line1_check: string;
  readonly card_brand: string;
  readonly customer: string;
  readonly description: string;
  readonly fingerprint: string;
  readonly first4_digits: string;
  readonly is_active: boolean;
  readonly is_valid: boolean;
  readonly is_verified: boolean;
  readonly metadata: IZoopMetadata;
  readonly postal_code_check: string;
  readonly security_code_check: string;
  readonly uri: string;
  readonly verification_checklist: IZoopVCheckList;
}
/**
 * Card Interface
 */
export interface IZoopCard extends IZoopEnty {
  readonly card_number?: string;
  readonly holder_name?: string;
  readonly expiration_month?: string;
  readonly expiration_year?: string;
  readonly security_code?: string;
}
