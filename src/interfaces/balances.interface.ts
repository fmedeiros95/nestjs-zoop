import { IZoopQuery } from './common.interface';
import { IZoopHistory } from './transactions.interface';

/**
 * Balance Query Interface
 */
export interface IZoopBalanceQuery extends IZoopQuery {
  readonly 'created_date_range[gte]': string;
  readonly 'created_date_range[lte]': string;
}

export interface IZoopBalance {
  readonly current_balance: string;
  readonly current_blocked_balance: string;
  readonly account_balance: string;
}

export interface IZoopHistoryBalance {
  readonly currentBalance?: string;
  readonly currentBlockedBalance?: string;
  readonly items?: readonly IZoopHistoryBalanceItem[];
}

export interface IZoopHistoryBalanceItem {
  readonly id?: string;
  readonly resource?: string;
  readonly nsu?: string;
  readonly amount?: string;
  readonly blocked_amount?: string;
  readonly gross_amount?: string;
  readonly fee?: string;
  readonly date?: Date;
  readonly description?: string;
  readonly current_balance?: string;
  readonly current_blocked_balance?: string;
  readonly type?: string;
  readonly object_id?: string;
  readonly object_type?: string;
  readonly transaction?: IZoopHistory;
}

export interface ZoopTransaction {
  readonly id?: string;
  readonly authorization_code?: string;
}
