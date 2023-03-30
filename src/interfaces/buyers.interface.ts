import { IZoopEnty, IZoopPerson, IZoopSearch } from './common.interface';
import { IZoopStatement } from './sellers.interface';

export interface IZoopSearchBuyer extends IZoopSearch {
  readonly taxpayer_id: string;
}
export interface IZoopBuyer extends IZoopPerson, IZoopEnty, IZoopStatement {}
