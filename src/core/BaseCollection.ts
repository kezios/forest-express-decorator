/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import { kebabCase } from 'lodash';
import { BaseSmartAction } from './BaseSmartAction';

export class BaseCollection {
  public name: string | undefined;
  public fields!: any[];
  public actions!: Record<string, BaseSmartAction>;

  initialize(app: Application, Liana: any){
    console.log('this.name', this.name)
    if(this.name === undefined)
      throw 'Cannot initialize collection with undefined name';

    const router = express.Router();
    const permissionMiddleware = new Liana.PermissionMiddlewareCreator(this.name);

    for(const smartActionName in this.actions){
      router.post(
        `${kebabCase(this.name)}/smart-action/${kebabCase(smartActionName)}`,
        permissionMiddleware.smartAction(),
        this.actions[smartActionName].onCall
      )
    }

    app.use(router);
  }
}
