import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface InviteAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export default function InviteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InviteActionClass extends CommunicateActionMixin(Resource) implements InviteAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InviteActionClass
}

class InviteActionImpl extends InviteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InviteAction>) {
    super(arg, init)
    this.types.add(schema.InviteAction)
  }
}
InviteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InviteAction)
InviteActionMixin.Class = InviteActionImpl