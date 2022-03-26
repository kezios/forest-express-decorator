import { BaseSmartAction } from '../../../../core/BaseSmartAction';
import { SMART_ACTION_TYPE } from '../../../../types';
import { SmartAction } from '../../../SmartAction';

@SmartAction({label: 'Ajouter un like', type: SMART_ACTION_TYPE.SINGLE})
export class AddLike extends BaseSmartAction { }
