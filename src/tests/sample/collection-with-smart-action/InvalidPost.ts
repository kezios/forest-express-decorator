import { BaseCollection } from "../../../core"
import { SmartActionIntegration } from "../../../decorator/SmartAction";
import { SmartField } from "../../../decorator/SmartField"

import { AddLike } from './AddLike';

export class InvalidPost extends BaseCollection {
  @SmartField({ type: 'String', get: () => { return '2/10' } })
  popularity!: string

  @SmartActionIntegration(AddLike)
  addLike!: AddLike
}
