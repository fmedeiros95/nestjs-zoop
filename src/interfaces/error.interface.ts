/**
 * Error Interface
 */
export interface IZoopErrorResponse {
  readonly error?: Error;
}

export interface IZoopError {
  readonly status?: string;
  readonly status_code?: number;
  readonly type?: string;
  readonly category?: string;
  readonly message?: string;
}
