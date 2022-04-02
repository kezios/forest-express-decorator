import { Request } from 'express';
import { SmartActionValuesInjector } from 'forest-express-sequelize';

export enum SMART_ACTION_TYPE {
  BULK = 'bluk',
  SINGLE = 'single',
  GLOBAL = 'global'
}

export interface SmartActionFieldOptions {
  label: string;
  type: string | string[];
  reference?: string | undefined;
  enums?: string[] | undefined;
  description?: string | undefined;
  isRequired?: boolean | undefined;
  onChange?: hookFunction;
}

export interface SmartActionField extends Omit<SmartActionFieldOptions, 'label'>{
  field: string;
  name: string;
}


export type hookFunction = (params: hookParams) => any[];

export interface hookParams {
  request: Request;
  fields: any[];
}

export interface SmartActionOptions {
  name: string;
  type?: string | undefined;
  fields?: Array<{
      field: string;
      type: string | string[];
      reference?: string | undefined;
      enums?: string[] | undefined;
      description?: string | undefined;
      isRequired?: boolean | undefined;
      hook?: any
  }> | undefined;
  hooks?: any;
  download?: boolean | undefined;
  endpoint?: string | undefined;
  httpMethod?: string | undefined;
  values?: SmartActionValuesInjector | undefined;
}
