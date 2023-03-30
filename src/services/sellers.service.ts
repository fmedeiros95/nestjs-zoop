import { Injectable } from '@nestjs/common';
import qs from 'qs';
import {
  IZoopBusiness,
  IZoopDelete,
  IZoopMcc,
  IZoopQuery,
  IZoopResponse,
  IZoopSearch,
  IZoopSeller,
} from '../interfaces';
import { ZoopService } from '../zoop.service';

@Injectable()
export class ZoopSellersService {
  constructor(private readonly zoopService: ZoopService) {}

  list(query?: IZoopQuery) {
    const queryString = qs.stringify(query);
    return this.zoopService.get<IZoopResponse<IZoopSeller | IZoopBusiness>>(`/sellers?${queryString}`);
  }

  createIndividual(data: IZoopSeller) {
    return this.zoopService.post<IZoopSeller, IZoopSeller>(`/sellers/individuals`, data);
  }

  createBusiness(data: IZoopBusiness) {
    return this.zoopService.post<IZoopBusiness, IZoopBusiness>(`/sellers/businesses`, data);
  }

  read(id: string) {
    return this.zoopService.get<IZoopResponse<IZoopSeller | IZoopBusiness>>(`/sellers/${id}`);
  }

  updateIndividual(id: string, data: IZoopSeller) {
    return this.zoopService.put<IZoopSeller, IZoopSeller>(`/sellers/individuals/${id}`, data);
  }

  updateBusiness(id: string, data: IZoopBusiness) {
    return this.zoopService.put<IZoopBusiness, IZoopBusiness>(`/sellers/businesses/${id}`, data);
  }

  delete(id: string) {
    return this.zoopService.delete<IZoopDelete>(`/sellers/${id}`);
  }

  search(query: IZoopSearch) {
    if (!query) throw new Error('query is not valid');
    const queryString = qs.stringify(query);
    return this.zoopService.get<IZoopSeller | IZoopBusiness>(`/sellers/search?${queryString}`);
  }

  getMcCodes(query?: IZoopQuery) {
    const queryString = qs.stringify(query);
    return this.zoopService.get<IZoopResponse<IZoopMcc>>(`/merchant_category_codes?${queryString}`, {
      absolute: true,
    });
  }
}
