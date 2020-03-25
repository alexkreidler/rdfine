import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Aquarium extends Schema.CivicStructure, RdfResource {
}

export default function AquariumMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AquariumClass extends CivicStructureMixin(Resource) implements Aquarium {
  }
  return AquariumClass
}

class AquariumImpl extends AquariumMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Aquarium>) {
    super(arg, init)
    this.types.add(schema.Aquarium)
  }
}
AquariumMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Aquarium)
AquariumMixin.Class = AquariumImpl