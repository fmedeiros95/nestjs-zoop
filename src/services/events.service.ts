import { Injectable } from '@nestjs/common';
import * as qs from 'qs';
import { IZoopQuery } from '../interfaces';
import { ZoopService } from '../zoop.service';

@Injectable()
export class ZoopEventsService {
  constructor(private readonly zoopService: ZoopService) {}

  list(query?: IZoopQuery) {
    const queryString = qs.stringify(query);
    return this.zoopService.get(`/events?${queryString}`);
  }

  replayAll(query?: IZoopQuery) {
    const queryString = qs.stringify(query);
    return this.zoopService.get(`/events/actions/replay?${queryString}`);
  }

  replay(eventId: string) {
    return this.zoopService.get(`/events/${eventId}/actions/replay`);
  }
}
