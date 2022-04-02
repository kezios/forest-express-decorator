import { BaseCollection } from "../../../core"
import { Collection } from "../../../decorator/Collection";
import { SmartActionIntegration } from "../../../decorator/SmartAction";
import { SmartField } from "../../../decorator/SmartField"

import { AddLike } from './AddLike';

@Collection('post')
export class Post extends BaseCollection {
  @SmartField({ type: 'String', get: () => { return '2/10' } })
  popularity!: string

  @SmartActionIntegration(AddLike)
  addLike!: AddLike
}
