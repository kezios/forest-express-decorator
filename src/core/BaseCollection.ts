import { BaseSmartAction } from './BaseSmartAction';
export class BaseCollection {
  public name: string | undefined;
  public fields!: any[];
  public actions!: BaseSmartAction[];

  initialize(){
   console.log('this', this)
   console.log('name', this.name);
   console.log('fields', this.fields);
   console.log('actions', this.actions);
  }
}
