import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface OutletStore extends Schema.Store, RdfResource {
}

export default function OutletStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OutletStoreClass extends StoreMixin(Resource) implements OutletStore {
  }
  return OutletStoreClass
}

class OutletStoreImpl extends OutletStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OutletStore>) {
    super(arg, init)
    this.types.add(schema.OutletStore)
  }
}
OutletStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OutletStore)
OutletStoreMixin.Class = OutletStoreImpl