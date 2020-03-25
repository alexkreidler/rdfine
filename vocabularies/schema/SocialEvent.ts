import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface SocialEvent extends Schema.Event, RdfResource {
}

export default function SocialEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SocialEventClass extends EventMixin(Resource) implements SocialEvent {
  }
  return SocialEventClass
}

class SocialEventImpl extends SocialEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SocialEvent>) {
    super(arg)
    this.types.add(schema.SocialEvent)
    initializeProperties<SocialEvent>(this, init)
  }
}
SocialEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SocialEvent)
SocialEventMixin.Class = SocialEventImpl
