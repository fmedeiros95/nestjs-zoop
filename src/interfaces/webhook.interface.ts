import { IZoopEnty, IZoopMetadata } from './common.interface';

/**
 * WebHooks Interface
 */
export interface IZoopWebHooks extends IZoopEnty {
  readonly method: string;
  readonly url: string;
  readonly event: readonly string[];
  readonly description?: string;
  readonly last_error?: string;
  readonly retries?: number;
  readonly events_sent?: number;
  readonly batches_sent?: number;
  readonly metadata?: IZoopMetadata;
  readonly last_sent_at?: string;
  readonly uri?: string;
  readonly authorization?: string;
}
