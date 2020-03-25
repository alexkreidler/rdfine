import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import RadioChannelMixin from './RadioChannel';

export interface AMRadioChannel extends Schema.RadioChannel, RdfResource {
}

export default function AMRadioChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AMRadioChannelClass extends RadioChannelMixin(Resource) implements AMRadioChannel {
  }
  return AMRadioChannelClass
}

class AMRadioChannelImpl extends AMRadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AMRadioChannel>) {
    super(arg, init)
    this.types.add(schema.AMRadioChannel)
  }
}
AMRadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AMRadioChannel)
AMRadioChannelMixin.Class = AMRadioChannelImpl