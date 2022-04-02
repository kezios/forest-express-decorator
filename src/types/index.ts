import { SmartFieldOptions } from 'forest-express-sequelize';
import { hookFunction, SmartActionOptions } from './SmartAction';

export * from './SmartAction'

export interface LianaCollection {
  actions: SmartActionOptions[];
  fields: SmartFieldOptions[];
}

export interface LianaSmartActionField {
  field: string;
  type: string | string[];
  reference?: string | undefined;
  enums?: string[] | undefined;
  description?: string | undefined;
  isRequired?: boolean | undefined;
  hook?: string;
}

export interface LianaSmartActionHook {
  load?: hookFunction;
  change: Record<string, hookFunction>;
}
