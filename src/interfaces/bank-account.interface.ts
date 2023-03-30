import { IZoopEnty, IZoopMetadata } from './common.interface';

/**
 * Bank Account interface
 */
export interface IZoopBankAccount extends IZoopBank {
  readonly type?: ZoopAccountType;
}

/**
 * Bank Response interface
 */
export interface IZoopBankToken extends IZoopEnty {
  readonly bank_account?: IZoopBankAccount;
}

/**
 * Bank Account Type Enum
 */
export enum ZoopBankAccountType {
  PF = 'taxpayer_id',
  PJ = 'ein',
}

/**
 * Account Type Enum
 */
export enum ZoopAccountType {
  CORRENTE = 'checking',
  POUPANCA = 'savings',
}

/**
 * Account interface
 */
export interface IZoopAccount {
  readonly holder_name: string;
  readonly bank_code: string;
  readonly routing_number: number;
  readonly account_number: number;
  readonly taxpayer_id?: string;
  readonly ein?: string;
}

/**
 * Bank interface
 */
export interface IZoopBank extends IZoopAccount, IZoopEnty {
  readonly address?: string;
  readonly country_code?: string;
  readonly customer?: string;
  readonly debitable?: string;
  readonly description?: string;
  readonly fingerprint?: string;
  readonly is_active?: string;
  readonly is_verified?: string;
  readonly last4_digits?: string;
  readonly metadata?: IZoopMetadata;
  readonly phone_number?: string;
  readonly routing_check_digit?: string;
  readonly uri?: string;
  readonly verification_checklist?: IZoopVCheckList;
}

/**
 * CheckList interface
 */
export interface IZoopVCheckList {
  readonly postal_code_check?: string;
  readonly address_line1_check?: string;
  readonly deposit_check?: string;
}
