import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface MensClothingStore extends Schema.Store, RdfResource {
}

export default function MensClothingStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MensClothingStoreClass extends StoreMixin(Resource) implements MensClothingStore {
  }
  return MensClothingStoreClass
}

class MensClothingStoreImpl extends MensClothingStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MensClothingStore>) {
    super(arg, init)
    this.types.add(schema.MensClothingStore)
  }
}
MensClothingStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MensClothingStore)
MensClothingStoreMixin.Class = MensClothingStoreImpl