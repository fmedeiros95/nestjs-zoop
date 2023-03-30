import { IZoopBoleto } from './boletos.interface';
import { IZoopEnty, IZoopMetadata, IZoopQuery, ZoopPaymentType } from './common.interface';
import { IZoopFeeDetails } from './plans.interface';
import {
  IZoopSplitGrossValue,
  IZoopSplitPercentage,
  IZoopSplitRecipientPercentage,
  IZoopSplitRecipientValue,
  IZoopSplitValue,
} from './split.interface';
import { IZoopCard } from './tokens.interface';

/**
 * Response Transaction
 */
export interface IZoopCancelledLetter {
  //Link de cancelamento
  readonly url?: string;
}

export interface IZoopQueryTransaction extends IZoopQuery {
  // Tipo de pagamento
  readonly payment_type?: string;
  // ID referência da sua aplicação
  readonly reference_id?: readonly string[];
  // Retorna transações onde o status for igual o informado.
  readonly status?: string;
  // Seleciona a página
  readonly page?: string;
}

export interface IZoopResponseTransaction extends IZoopEnty {
  readonly amount?: string;
  readonly app_transaction_uid?: string;
  readonly business: any;
  readonly captured?: boolean;
  readonly currency?: string;
  readonly customer?: string;
  readonly confirmed: string;
  readonly description?: string;
  readonly discounts?: string;
  readonly expected_on?: string;
  readonly fee_details?: readonly IZoopFeeDetails[];
  readonly fees?: string;
  readonly gateway_authorizer?: string;
  readonly history: readonly IZoopHistory[];
  readonly individual: any;
  readonly installment_plan?: string;
  readonly location_latitude: any;
  readonly location_longitude: any;
  readonly metadata?: IZoopMetadata;
  readonly on_behalf_of?: string;
  readonly original_amount?: string;
  readonly payment_authorization?: string;
  readonly payment_method?: IZoopPaymentMethod;
  readonly payment_type?: string;
  readonly point_of_sale?: IZoopPointOfSale;
  readonly pre_authorization?: string;
  readonly refunded?: boolean;
  readonly refunds?: string;
  readonly rewards?: string;
  readonly sales_receipt?: string;
  readonly source?: string;
  readonly statement_descriptor?: string;
  readonly transaction_number?: string;
  readonly uri?: string;
  readonly voided?: boolean;
}

export interface IZoopPixKey {
  readonly type?: string;
  readonly value?: string;
}

export interface IZoopPixQrCode {
  readonly emv?: string;
}

export interface IZoopPixMethod {
  readonly id?: string;
  readonly provider?: string;
  readonly version?: string;
  readonly type?: string;
  readonly reusable?: boolean;
  readonly allow_update?: boolean;
  readonly expiration_date?: Date;
  readonly key?: IZoopPixKey;
  readonly pix_link?: string;
  readonly qr_code?: IZoopPixQrCode;
}

export interface IZoopBoletoMethod extends IZoopBoleto {
  readonly zoop_boleto_id?: string;
  readonly payment_limit_date?: string;
}

export interface IZoopCardMethod extends IZoopEnty {
  readonly card_brand?: string;
  readonly description?: string;
  readonly expiration_month?: string;
  readonly expiration_year?: string;
  readonly fingerprint?: string;
  readonly first4_digits?: string;
  readonly holder_name?: string;
  readonly is_active?: boolean;
  readonly is_valid?: boolean;
  readonly is_verified?: boolean;
  readonly last4_digits?: string;
  readonly metadata?: IZoopMetadata;
  readonly uri?: string;
}

export interface IZoopPaymentMethod extends IZoopCardMethod, IZoopBoletoMethod, IZoopPixMethod {}

export enum ZoopEntryModeType {
  MANUALLY_KEYED = 'manually_keyed',
  CHIP = 'chip',
  BARCODE = 'barcode',
  CONTACTLESS_CHIP = 'contactless_chip',
  CONTACTLESS_MAGSTRIPE = 'contactless_magstripe',
  MAGSTRIPE = 'magstripe',
  MAGSTRIPE_FALLBACK = 'magstripe_fallback',
}

export interface IZoopPointOfSale {
  readonly entry_mode?: ZoopEntryModeType;
  readonly identification_number?: string;
}

export interface IZoopHistory extends IZoopEnty {
  readonly amount?: string;
  readonly authorization_code?: string;
  readonly authorization_nsu?: string;
  readonly authorizer?: string;
  readonly authorizer_id?: string;
  readonly gatewayResponseTime?: string;
  readonly operation_type?: string;
  readonly response_code?: string;
  readonly response_message?: string;
  readonly transaction?: string;
}

export interface IZoopSource extends IZoopCurrency {
  readonly usage?: string;
  readonly type?: string;
  readonly card?: IZoopCard;
}

export interface IZoopInstallment {
  // Número de parcelas (1-12)
  readonly number_installments?: number;
}

export interface IZoopSplitTransaction {
  readonly split_rules?:
    | readonly IZoopSplitValue[]
    | readonly IZoopSplitPercentage[]
    | readonly IZoopSplitRecipientValue[]
    | readonly IZoopSplitRecipientPercentage[]
    | readonly IZoopSplitGrossValue[];
}

export interface IZoopCapture {
  // Nome da empresa que aparecerá na fatura. Utilizando esse campo você sobrescreve a informação do cadastro do Vendedor.
  readonly statement_descriptor?: string;
  // Capturar transação (true) ou criar uma pre-autorização (false) para ser capturada a posteriori
  readonly capture?: boolean;
  // Parcelas
  readonly installment_plan: IZoopInstallment;
}

export interface IZoopCurrency {
  // Valor em centavos a ser cobrado pela transação
  readonly amount?: number;
  // Moeda do valor a ser cobrado na venda BRL
  readonly currency?: string;
}

/**
 * Transactions
 */
export interface IZoopTransaction extends IZoopSplitTransaction {
  // Identificador do seller responsável pela venda.
  readonly on_behalf_of: string;
  // Tipo de pagamento
  readonly payment_type?: ZoopPaymentType;
  // ID referência da sua aplicação
  readonly reference_id?: string;
}

export interface IZoopDirectTransaction extends IZoopCapture, IZoopTransaction {
  // Cartão
  readonly source: IZoopSource;
}

export interface IZoopCustomerTransaction extends IZoopCapture, IZoopCurrency, IZoopTransaction {
  readonly customer: string;
}

export interface IZoopCardTokenTransaction extends IZoopCapture, IZoopCurrency, IZoopTransaction {
  // Token do Cartão
  readonly source: IZoopSource;
}

export interface IZoopPixTransaction extends IZoopCurrency, IZoopTransaction {
  // Uma descrição breve da motivação da sua transação
  readonly description?: string;
}

export interface IZoopBoletoTransaction extends IZoopCurrency, IZoopTransaction {
  // Customer Id
  readonly customer: string;
  // Uma descrição breve da motivação da sua transação
  readonly description?: string;
}
