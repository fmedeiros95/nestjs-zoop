import { Injectable } from '@nestjs/common';
import * as qs from 'qs';
import { IZoopBuyer, IZoopDelete, IZoopQuery, IZoopResponse, IZoopSearch } from '../interfaces';
import { ZoopService } from '../zoop.service';

@Injectable()
export class ZoopBuyersService {
  constructor(private readonly zoopService: ZoopService) {}

  list(query?: IZoopQuery) {
    const queryString = qs.stringify(query);
    return this.zoopService.get<IZoopResponse<IZoopBuyer>>(`/buyers?${queryString}`);
  }

  create(data: IZoopBuyer) {
    return this.zoopService.post<IZoopBuyer, IZoopBuyer>('/buyers', data);
  }

  read(id: string) {
    return this.zoopService.get<IZoopResponse<IZoopBuyer>>(`/buyers/${id}`);
  }

  update(id: string, data: IZoopBuyer) {
    return this.zoopService.put<IZoopBuyer, IZoopBuyer>(`/buyers/${id}`, data);
  }

  delete(id: string) {
    return this.zoopService.delete<IZoopDelete>(`/buyers/${id}`);
  }

  search(query: IZoopSearch) {
    if (!query) throw new Error('query is not valid');

    const queryString = qs.stringify(query);
    return this.zoopService.get<IZoopResponse<IZoopBuyer>>(`/buyers?${queryString}`);
  }
}
