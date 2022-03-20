import { BaseSmartAction } from '../../../../core/BaseSmartAction';
import { SMART_ACTION_TYPE } from '../../../../types';
import { SmartAction, SmartActionField } from '../../../SmartAction';

@SmartAction('Ajouter un like', SMART_ACTION_TYPE.SINGLE)
export class AddLike extends BaseSmartAction {
  @SmartActionField({type: 'Number', label: 'Nombre de likes à ajouter'})
  nb: unknown;

  @SmartActionField({type: 'DateOnly', label: 'Date'})
  date: unknown;
}
