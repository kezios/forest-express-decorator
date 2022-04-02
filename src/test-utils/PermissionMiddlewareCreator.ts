import { Response, NextFunction } from 'express';
import { Request } from 'express';

class PermissionMiddlewareCreator {
  private name: string;

  constructor(collectionName: string){
    this.name = collectionName;
  }

  smartAction() {
    return (req: Request, res: Response, next: NextFunction) => {
      return next();
    };
  }
}

export { PermissionMiddlewareCreator };
