import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ElectronicsStore extends Schema.Store, RdfResource {
}

export default function ElectronicsStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElectronicsStoreClass extends StoreMixin(Resource) implements ElectronicsStore {
  }
  return ElectronicsStoreClass
}

class ElectronicsStoreImpl extends ElectronicsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ElectronicsStore>) {
    super(arg, init)
    this.types.add(schema.ElectronicsStore)
  }
}
ElectronicsStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ElectronicsStore)
ElectronicsStoreMixin.Class = ElectronicsStoreImpl