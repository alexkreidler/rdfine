import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface ChildCare extends Schema.LocalBusiness, RdfResource {
}

export default function ChildCareMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChildCareClass extends LocalBusinessMixin(Resource) implements ChildCare {
  }
  return ChildCareClass
}

class ChildCareImpl extends ChildCareMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChildCare>) {
    super(arg, init)
    this.types.add(schema.ChildCare)
  }
}
ChildCareMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChildCare)
ChildCareMixin.Class = ChildCareImpl