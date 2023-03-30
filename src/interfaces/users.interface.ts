import { IZoopEnty, IZoopProfile } from './common.interface';

/**
 * Credentials Interface
 */
export interface IZoopCredentials {
  readonly username?: string;
  readonly password?: string;
}

export interface IZoopUser extends IZoopCredentials, IZoopProfile, IZoopEnty {
  readonly token?: string;
  readonly permissions?: readonly IZoopPermissions[];
  readonly profile?: IZoopAccessType;
}

/**
 * Profile Interface
 */
export interface IZoopAccessType {
  readonly dashboard_layout?: string;
}

export enum ZoopPermissionType {
  ADMIN = 'full_access_admin',
  VISUALIZATION = 'full_visualization',
  OPERATION = 'full_access_operation',
  CONFIGURATION = 'full_access_configuration',
  CUSTOMERS = 'customers',
}

/**
 * Permissions Interface
 */
export interface IZoopPermissions {
  readonly type?: string;
  readonly owner: string;
  readonly composite_id: string;
  readonly model_name?: ZoopPermissionType;
}

/**
 * Password Interface
 */
export interface IZoopPassword {
  readonly current_password?: string;
  readonly new_password?: string;
}

export enum ZoopApplicationType {
  DESKTOP = 'panel',
  MOBILE = 'mobile',
}
