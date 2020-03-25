import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface Locksmith extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function LocksmithMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocksmithClass extends HomeAndConstructionBusinessMixin(Resource) implements Locksmith {
  }
  return LocksmithClass
}

class LocksmithImpl extends LocksmithMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Locksmith>) {
    super(arg, init)
    this.types.add(schema.Locksmith)
  }
}
LocksmithMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Locksmith)
LocksmithMixin.Class = LocksmithImpl