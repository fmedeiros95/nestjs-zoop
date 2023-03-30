import { IZoopQuery, ZoopFrenquencyType } from './common.interface';

export enum ZoopTransferStatus {
  CREATED = 'created',
  CONFIRMED = 'confirmed',
  SUCCEEDED = 'successded',
  PENDING = 'pending',
  FAILED = 'failed',
}

export interface IZoopTransferQuery extends IZoopQuery {
  // Retorna transferência onde o status for igual o informado.
  readonly status?: ZoopTransferStatus;
}

export interface IZoopFutureTransferQuery {
  readonly 'expected_on_range[gt]': string;
  readonly 'expected_on_range[gte]': string;
  readonly 'expected_on_range[lt]': string;
  readonly 'expected_on_range[lte]': string;
  readonly 'created_at_range[gt]': string;
  readonly 'created_at_range[gte]': string;
  readonly 'created_at_range[lt]': string;
  readonly 'created_at_range[lte]': string;
}

export interface IReceivingPolicy {
  readonly transfer_interval: ZoopFrenquencyType;
  readonly transfer_day: number;
  readonly transfer_enabled: boolean;
  readonly minimum_transfer_value: number;
}
