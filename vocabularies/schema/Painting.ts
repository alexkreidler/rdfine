import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Painting extends Schema.CreativeWork, RdfResource {
}

export default function PaintingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaintingClass extends CreativeWorkMixin(Resource) implements Painting {
  }
  return PaintingClass
}

class PaintingImpl extends PaintingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Painting>) {
    super(arg, init)
    this.types.add(schema.Painting)
  }
}
PaintingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Painting)
PaintingMixin.Class = PaintingImpl
