import { IZoopEnty, ZoopFrenquencyType, ZoopPaymentType } from './common.interface';
import { IZoopCurrency } from './transactions.interface';

export interface IPlan extends IZoopCurrency {
  // Frequencia que o plano será cobrado
  readonly frequency: ZoopFrenquencyType;
  // intervalo entre frequencia de cobrança
  readonly interval: number;
  // Frequencia que o plano será cobrado
  readonly payment_methods: readonly ZoopPaymentType[];
  // Valor do setup do plano em centavos
  readonly setup_amount?: number;
  // Descrição do plano
  readonly description?: string;
  // Nome do plano
  readonly name: string;
  // Tempo de duração do plano em relação à frequencia escolhida
  readonly duration?: number;
}

/**
 * Plan Interface
 */
export interface IZoopPlanResponse extends IZoopEnty {
  readonly name: string;
  readonly invoice_name: string;
  readonly is_active: string;
  readonly maximum_amount: number;
  readonly setup_cost: number;
  readonly date_start: string;
  readonly date_end: string;
  readonly interval: string;
  readonly interval_count: number;
  readonly duration_in_months: number;
  readonly grace_period_in_minutes: number;
  readonly is_default_per_transaction: boolean;
  readonly prepaid: boolean;
  readonly fee_details: string;
  readonly uri: string;
  readonly visible: boolean;
}

/**
 * Plan Details Interface
 */
export interface IZoopPlanDetails {
  readonly id: string;
  readonly resource: string;
  readonly name: string;
  readonly invoice_name: string;
  readonly description: string;
  readonly is_active: boolean;
  readonly maximum_amount: number;
  readonly setup_cost: number;
  readonly date_start: string;
  readonly date_end: string;
  readonly interval: string;
  readonly interval_count: number;
  readonly duration_in_months: number;
  readonly grace_period_in_minutes: number;
  readonly is_default_per_transaction: boolean;
  readonly prepaid: boolean;
  readonly fee_details: IZoopFeeDetails;
  readonly uri: string;
  readonly visible: boolean;
  readonly created_at: string;
  readonly updated_at: string;
}

/**
 * Fee Details Interface
 */
export interface IZoopFeeDetails extends IZoopCurrency {
  readonly type: string;
  readonly card_brand: string;
  readonly percent_amount: number;
  readonly dollar_amount: number;
  readonly is_gateway_fee: boolean;
  readonly description: string;
  readonly payment_type: string;
  readonly number_installments: number;
  readonly settlement_days: number;
  readonly source: string;
  readonly prepaid: boolean;
  readonly capture_mode: string;
}
