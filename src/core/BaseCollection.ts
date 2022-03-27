import express, { Application } from 'express';
import { kebabCase } from 'lodash';
import { BaseSmartAction } from './BaseSmartAction';
export class BaseCollection {
  public name: string | undefined;
  public fields!: any[];
  public actions!: Record<string, BaseSmartAction>;

  initialize(app: Application){
    if(this.name === undefined)
      throw 'Cannot initialize collection with undefined name';

    console.log('this', this)
    console.log('name', this.name);
    console.log('fields', this.fields);
    console.log('actions', this.actions);

    const router = express.Router();
    // const permissionMiddleware = new PermissionMiddlewareCreator(this.name);

    for(const smartActionName in this.actions){
      router.post(
        `${kebabCase(this.name)}/smart-action/${kebabCase(smartActionName)}`,
        this.actions[smartActionName].onCall
      )
    }

    app.use(router);
  }
}
