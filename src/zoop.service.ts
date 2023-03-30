import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { IZoopError, IZoopOptions, IZoopRequestOptions } from './interfaces';
import { ZOOP_OPTIONS } from './zoop.constans';

@Injectable()
export class ZoopService {
  constructor(
    @Inject(ZOOP_OPTIONS) private readonly zoopOptions: IZoopOptions,
    private readonly httpService: HttpService
  ) {}

  private get mktpURL() {
    return `/marketplaces/${this.zoopOptions.marketplaceId}`;
  }

  async get<TResponse>(uri: string, options?: IZoopRequestOptions): Promise<TResponse> {
    const url = this.buildURL(this.mktpURL, uri, options);
    return this.request<TResponse>('get', url);
  }

  async post<TResponse, TBody>(uri: string, body: TBody, options?: IZoopRequestOptions): Promise<TResponse> {
    const url = this.buildURL(this.mktpURL, uri, options);
    return this.request<TResponse>('post', url, body);
  }

  async delete<TResponse>(uri: string, options?: IZoopRequestOptions): Promise<TResponse> {
    const url = this.buildURL(this.mktpURL, uri, options);
    return this.request<TResponse>('delete', url);
  }

  async put<TResponse, TBody>(uri: string, body: TBody, options?: IZoopRequestOptions): Promise<TResponse> {
    const url = this.buildURL(this.mktpURL, uri, options);
    return this.request<TResponse>('put', url, body);
  }

  async patch<TResponse, TBody>(uri: string, body: TBody, options?: IZoopRequestOptions): Promise<TResponse> {
    const url = this.buildURL(this.mktpURL, uri, options);
    return this.request<TResponse>('patch', url, body);
  }

  async request<TResponse, TBody = unknown>(method: string, url: string, body?: TBody): Promise<TResponse> {
    try {
      console.log(url);
      const response = await lastValueFrom(this.httpService.request<TResponse>({ method, url, data: body }));
      return response.data;
    } catch (err) {
      const error = this.extractError(err.response?.data);
      throw new HttpException(error.message, error.status_code);
    }
  }

  private extractError(responseData: any): IZoopError {
    const defaultError: IZoopError = {
      message: 'Erro interno do servidor',
      status_code: HttpStatus.INTERNAL_SERVER_ERROR,
    };
    if (!responseData || !responseData.error) {
      return defaultError;
    }
    return {
      message: responseData.error.message || defaultError.message,
      status_code: responseData.error.status_code || defaultError.status_code,
    };
  }

  private buildURL(url: string, uri: string, options?: IZoopRequestOptions): string {
    const version = options?.version !== undefined && options.version > 0 ? `/v${options.version}` : '/v1';
    return !options?.absolute ? `${version}${url}${uri}` : `${version}${uri}`;
  }
}
