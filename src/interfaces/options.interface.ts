export interface IZoopOptions {
  readonly marketplaceId: string;
  readonly publishableKey: string;
  readonly baseURL?: string;
  readonly sandbox?: boolean;
  readonly requestTimeout?: number;
}
