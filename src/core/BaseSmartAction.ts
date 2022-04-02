import { hookFunction } from './../types/SmartAction';
import { Request, Response } from "express";
import { SmartActionField, SMART_ACTION_TYPE } from "../types";

export abstract class BaseSmartAction {
  public label!: string;
  public type!: SMART_ACTION_TYPE;
  public fields!: SmartActionField[];
  public onLoad?: hookFunction;

  abstract onCall(req: Request, res: Response): void;
}
