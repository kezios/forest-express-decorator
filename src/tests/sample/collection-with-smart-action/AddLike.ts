import { Request, Response } from 'express';
import { BaseSmartAction } from '../../../core/BaseSmartAction';
import { SMART_ACTION_TYPE } from '../../../types';
import { SmartAction, SmartActionField } from '../../../decorator/SmartAction';

const onNbChange = ({fields, request}: any) => {
  return fields;
}
@SmartAction({label: 'Ajouter un like', type: SMART_ACTION_TYPE.SINGLE})
export class AddLike extends BaseSmartAction {
  onCall(req: Request, res: Response): void {
    console.log('On ajoute un like en base donnée');
    res.status(201).send();
  }

  @SmartActionField({type: 'Number', label: 'Nombre de likes à ajouter', onChange: onNbChange})
  nb: unknown;

  @SmartActionField({type: 'DateOnly', label: 'Date'})
  date: unknown;
}
