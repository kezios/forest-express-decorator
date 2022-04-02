import { hookFunction } from './../types/SmartAction';
import { BaseCollection } from './../core/BaseCollection';
import { BaseSmartAction } from './../core/BaseSmartAction';
import { SmartActionFieldOptions, SMART_ACTION_TYPE } from '../types';
import { kebabCase, omit } from 'lodash';

interface SmartActionOptions {
  label: string,
  type: SMART_ACTION_TYPE,
  onLoad?: hookFunction,
}

const SmartAction = (options: SmartActionOptions) => {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
        label = options.label;
        type = options.type;
        onLoad = options.onLoad;
      }
  }
}


function SmartActionIntegration<Type extends BaseSmartAction>(classSmartAction: { new (): Type }) {
  const smartAction = new classSmartAction();

  return function(target: BaseCollection, propertyKey: string) {
    if(target.actions === undefined) target.actions = {};
    target.actions[kebabCase(propertyKey)] = smartAction;
  }
}

const SmartActionField = (options: SmartActionFieldOptions) => {
  return function(target: BaseSmartAction, propertyKey: string) {
    //todo use propery key to create reverser-map propertyKey <--> field
    if(target.fields === undefined) target.fields = [];
    target.fields.push({
      ...omit(options, 'label'),
      field: options.label,
      name: propertyKey,
    });
  }
}

export { SmartAction, SmartActionField, SmartActionIntegration };
