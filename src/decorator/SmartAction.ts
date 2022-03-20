import { BaseSmartAction } from './../core/BaseSmartAction';
import { SmartActionFieldOptions, SMART_ACTION_TYPE } from '../types';
import { omit } from 'lodash';

const SmartAction = (smartActionlabel: string, smartActionType: SMART_ACTION_TYPE) => {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
        label = smartActionlabel;
        type = smartActionType;
      }
  }
}

const SmartActionField = (options: SmartActionFieldOptions) => {
  return function(target: BaseSmartAction, propertyKey: string) {
    //todo use propery key to create reverser-map propertyKey <--> field
    if(target.fields === undefined) target.fields = [];
    target.fields.push({...omit(options, 'label'), field: options.label});
  }
}

export { SmartAction, SmartActionField };
