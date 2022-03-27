import { Request, Response } from "express";

export abstract class BaseSmartAction {
  public label!: string;
  public type!: any;
  public fields!: any[];

  abstract onCall(req: Request, res: Response): void;
}
