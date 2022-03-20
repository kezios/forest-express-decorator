import { BaseCollection } from './../core/BaseCollection';
import { SmartFieldOptions } from "forest-express-sequelize";

const SmartField = (options: Omit<SmartFieldOptions, 'field'>) => {
  return function(target: BaseCollection, propertyKey: string) {
    if(target.fields === undefined) target.fields = [];
    target.fields.push({...options, field: propertyKey});
  }
}

export { SmartField }
