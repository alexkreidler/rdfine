import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import EmergencyServiceMixin from './EmergencyService';

export interface FireStation extends Schema.CivicStructure, Schema.EmergencyService, RdfResource {
}

export default function FireStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FireStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) implements FireStation {
  }
  return FireStationClass
}

class FireStationImpl extends FireStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FireStation>) {
    super(arg, init)
    this.types.add(schema.FireStation)
  }
}
FireStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FireStation)
FireStationMixin.Class = FireStationImpl