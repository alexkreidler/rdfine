import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface SportsEvent extends Schema.Event, RdfResource {
  awayTeam: Schema.Person | Schema.SportsTeam;
  competitor: Schema.Person | Schema.SportsTeam;
  homeTeam: Schema.Person | Schema.SportsTeam;
}

export default function SportsEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SportsEventClass extends EventMixin(Resource) implements SportsEvent {
    @property.resource()
    awayTeam!: Schema.Person | Schema.SportsTeam;
    @property.resource()
    competitor!: Schema.Person | Schema.SportsTeam;
    @property.resource()
    homeTeam!: Schema.Person | Schema.SportsTeam;
  }
  return SportsEventClass
}

class SportsEventImpl extends SportsEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SportsEvent)
  }
}
SportsEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SportsEvent)
SportsEventMixin.Class = SportsEventImpl
