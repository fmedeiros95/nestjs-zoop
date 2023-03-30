import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { IZoopOptions } from './interfaces';
import { ZoopBankAccounts, ZoopBuyersService, ZoopSellersService } from './services';
import { ZOOP_OPTIONS } from './zoop.constans';
import { ZoopService } from './zoop.service';

@Module({})
export class ZoopModule {
  static register(options: IZoopOptions): DynamicModule {
    return {
      module: ZoopModule,
      imports: [
        HttpModule.register({
          baseURL: options.baseURL || 'https://api.zoop.ws',
          headers: {
            Accept: 'application/json',
          },
          auth: {
            username: options.publishableKey || '',
            password: '',
          },
        }),
      ],
      providers: [
        {
          provide: ZOOP_OPTIONS,
          useValue: options,
        },
        ZoopService,
        ZoopBankAccounts,
        ZoopBuyersService,
        ZoopSellersService,
      ],
      exports: [ZoopService, ZoopBankAccounts, ZoopBuyersService, ZoopSellersService],
    };
  }
}
