import { BaseCollection } from "../../../../core"
import { SmartActionIntegration } from "../../../SmartAction";
import { SmartField } from "../../../SmartField"

import { AddLike } from './AddLike';

export class Post extends BaseCollection {
  @SmartField({ type: 'String', get: () => { return '2/10' } })
  popularity!: string

  @SmartActionIntegration(AddLike)
  addLike!: AddLike
}
