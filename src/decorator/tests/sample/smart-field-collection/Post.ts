import { BaseCollection } from "../../../../core"
import { SmartField } from "../../../SmartField"

export class Post extends BaseCollection {
  @SmartField({ type: 'String', get: () => { return '2/10' } })
  popularity!: string
}
