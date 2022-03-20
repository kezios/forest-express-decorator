import { BaseSmartAction } from '../../../../core/BaseSmartAction';
import { SMART_ACTION_TYPE } from '../../../../types';
import { SmartAction } from '../../../SmartAction';

@SmartAction('Ajouter un like', SMART_ACTION_TYPE.SINGLE)
export class AddLike extends BaseSmartAction { }
