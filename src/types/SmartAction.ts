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
}
