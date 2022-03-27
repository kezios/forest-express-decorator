import { Request, Response } from 'express';
import { BaseSmartAction } from '../../../../core/BaseSmartAction';
import { SMART_ACTION_TYPE } from '../../../../types';
import { SmartAction, SmartActionField } from '../../../SmartAction';

@SmartAction({label: 'Ajouter un like', type: SMART_ACTION_TYPE.SINGLE})
export class AddLike extends BaseSmartAction {
  onCall(req: Request, res: Response): void {
    console.log('On ajoute un like en base donnée');
    res.status(201).send();
  }

  @SmartActionField({type: 'Number', label: 'Nombre de likes à ajouter'})
  nb: unknown;

  @SmartActionField({type: 'DateOnly', label: 'Date'})
  date: unknown;
}
