import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LandformMixin from './Landform';

export interface BodyOfWater extends Schema.Landform, RdfResource {
}

export default function BodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BodyOfWaterClass extends LandformMixin(Resource) implements BodyOfWater {
  }
  return BodyOfWaterClass
}

class BodyOfWaterImpl extends BodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BodyOfWater>) {
    super(arg, init)
    this.types.add(schema.BodyOfWater)
  }
}
BodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BodyOfWater)
BodyOfWaterMixin.Class = BodyOfWaterImpl