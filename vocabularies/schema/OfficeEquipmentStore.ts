import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface OfficeEquipmentStore extends Schema.Store, RdfResource {
}

export default function OfficeEquipmentStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfficeEquipmentStoreClass extends StoreMixin(Resource) implements OfficeEquipmentStore {
  }
  return OfficeEquipmentStoreClass
}

class OfficeEquipmentStoreImpl extends OfficeEquipmentStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OfficeEquipmentStore>) {
    super(arg, init)
    this.types.add(schema.OfficeEquipmentStore)
  }
}
OfficeEquipmentStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OfficeEquipmentStore)
OfficeEquipmentStoreMixin.Class = OfficeEquipmentStoreImpl