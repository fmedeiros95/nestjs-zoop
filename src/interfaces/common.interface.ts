/**
 * Message Interface
 */
export interface IZoopMessage {
  readonly message?: string;
}
/**
 * Entity Interface
 */
export interface IZoopEnty {
  readonly id?: string;
  readonly status?: string;
  readonly resource?: string;
  readonly type?: string;
  readonly created_at?: Date;
  readonly updated_at?: Date;
}
/**
 * Address Interface
 */
export interface IZoopAddress {
  readonly line1: string;
  readonly line2: string;
  readonly line3?: string;
  readonly neighborhood?: string;
  readonly city?: string;
  readonly state?: string;
  readonly postal_code?: string;
  readonly country_code?: string;
}
export interface IZoopSocial {
  readonly website?: string;
  readonly facebook?: string;
  readonly twitter?: string;
}
export interface IZoopProfile {
  readonly first_name?: string;
  readonly last_name?: string;
}
/**
 * Person Interface
 */
export interface IZoopPerson extends IZoopOwner, IZoopSocial {
  readonly address?: IZoopAddress;
}
/**
 * Owner Interface
 */
export interface IZoopOwner extends IZoopProfile {
  readonly birthdate?: string;
  readonly email?: string;
  readonly phone_number?: string;
  readonly taxpayer_id?: string;
}
/**
 * Metadata Interface
 */
export declare type IZoopMetadata = {
  readonly [K in string]?: string;
};
/**
 * Response Interface
 */
export interface IZoopResponse<Type> {
  readonly has_more?: boolean;
  readonly items?: readonly Type[];
  readonly limit?: number;
  readonly offset?: number;
  readonly page?: number;
  readonly resource?: string;
  readonly total?: number;
  readonly total_pages?: number;
  readonly uri?: string;
}
/**
 * Detele Interface
 */
export interface IZoopDelete extends IZoopEnty {
  readonly deleted?: boolean;
}
/**
 * Search Interface
 */
export interface IZoopSearch {
  readonly taxpayer_id?: string;
  readonly ein?: string;
}
/**
 * IQuey Interface
 */
export interface IZoopQuery {
  readonly sort?: ZoopSortType;
  readonly limit?: number;
  readonly offset?: number;
  readonly date_range?: number;
  readonly 'date_range[gt]'?: number;
  readonly 'date_range[gte]'?: number;
  readonly 'date_range[lt]'?: number;
  readonly 'date_range[lte]'?: number;
}
export enum ZoopSortType {
  ASC = 'time-ascending',
  DSC = 'time-descending',
}
export enum ZoopFrenquencyType {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  ANNUALLY = 'annually',
}
export enum ZoopPaymentType {
  PIX = 'pix',
  BOLETO = 'boleto',
  CREDIT = 'credit',
}
