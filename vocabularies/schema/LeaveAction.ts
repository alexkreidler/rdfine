import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface LeaveAction extends Schema.InteractAction, RdfResource {
  event: Schema.Event;
}

export default function LeaveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LeaveActionClass extends InteractActionMixin(Resource) implements LeaveAction {
    @property.resource()
    event!: Schema.Event;
  }
  return LeaveActionClass
}

class LeaveActionImpl extends LeaveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LeaveAction>) {
    super(arg, init)
    this.types.add(schema.LeaveAction)
  }
}
LeaveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LeaveAction)
LeaveActionMixin.Class = LeaveActionImpl