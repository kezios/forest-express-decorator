/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import { capitalize, kebabCase, omit } from 'lodash';
import { LianaCollection, LianaSmartActionField, LianaSmartActionHook, SmartActionOptions } from '../types';
import { BaseSmartAction } from './BaseSmartAction';

export class BaseCollection {
  public name: string | undefined;
  public fields!: any[];
  public actions!: Record<string, BaseSmartAction>;

  initialize(app: Application, Liana: any){
    if(this.name === undefined)
      throw 'Cannot initialize collection with undefined name';

    const config: LianaCollection = {
      actions: this.initializeSmartActions(app, Liana),
      fields: this.initializeSmartField(),
    }

    return config;
  }

  private initializeSmartActions(app: Application, Liana: any){
    const actionsConfig: SmartActionOptions[] = [];
    //--------- Smart action properties
    for(const smartActionName in this.actions){
      const fieldsConfig = [];
      const hooksConfig: LianaSmartActionHook = {change: {}};

      if(this.actions[smartActionName].onLoad)
        hooksConfig.load = this.actions[smartActionName].onLoad;

      for(const field of this.actions[smartActionName].fields) {
        const fieldConfig: LianaSmartActionField = omit(field, ['onChange']);

        if(field.onChange !== undefined){
          const hookName = `on${(capitalize(field.name))}Change`;


          fieldConfig.hook = hookName;
          hooksConfig.change[hookName] = field.onChange;
        }

        fieldsConfig.push(fieldConfig);
      }

      actionsConfig.push({
        name: this.actions[smartActionName].label,
        type: this.actions[smartActionName].type.toString(),
        fields: fieldsConfig,
        hooks: hooksConfig,
      })
    }

    //--------- Smart action ROUTER
    const router = express.Router();
    const permissionMiddleware = new Liana.PermissionMiddlewareCreator(this.name);

    for(const smartActionName in this.actions){
      router.post(
        `/${kebabCase(this.name)}/smart-action/${kebabCase(smartActionName)}`,
        permissionMiddleware.smartAction(),
        this.actions[smartActionName].onCall
      )
    }
    //---------

    app.use(router);
    return actionsConfig;
  }

  private initializeSmartField(){
    return this.fields;
  }
}
