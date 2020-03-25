import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface GiveAction extends Schema.TransferAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function GiveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GiveActionClass extends TransferActionMixin(Resource) implements GiveAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return GiveActionClass
}

class GiveActionImpl extends GiveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GiveAction>) {
    super(arg, init)
    this.types.add(schema.GiveAction)
  }
}
GiveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GiveAction)
GiveActionMixin.Class = GiveActionImpl