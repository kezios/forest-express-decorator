import { Request } from 'express';

export enum SMART_ACTION_TYPE {
  BULK,
  SINGLE,
  GLOBAL
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

export type hookFunction = (params: hookParams) => any[];

export interface hookParams {
  request: Request;
  fields: any[];
}
