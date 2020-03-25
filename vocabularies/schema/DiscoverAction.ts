import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FindActionMixin from './FindAction';

export interface DiscoverAction extends Schema.FindAction, RdfResource {
}

export default function DiscoverActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiscoverActionClass extends FindActionMixin(Resource) implements DiscoverAction {
  }
  return DiscoverActionClass
}

class DiscoverActionImpl extends DiscoverActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiscoverAction>) {
    super(arg, init)
    this.types.add(schema.DiscoverAction)
  }
}
DiscoverActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DiscoverAction)
DiscoverActionMixin.Class = DiscoverActionImpl