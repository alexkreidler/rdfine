import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface CreativeWorkSeason extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person;
  director: Schema.Person;
  endDate: Date | Date;
  episode: Schema.Episode;
  episodes: Schema.Episode;
  numberOfEpisodes: number;
  partOfSeries: Schema.CreativeWorkSeries;
  productionCompany: Schema.Organization;
  seasonNumber: number | string;
  startDate: Date | Date;
  trailer: Schema.VideoObject;
}

export default function CreativeWorkSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkSeasonClass extends CreativeWorkMixin(Resource) implements CreativeWorkSeason {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    director!: Schema.Person;
    @property.literal()
    endDate!: Date | Date;
    @property.resource()
    episode!: Schema.Episode;
    @property.resource()
    episodes!: Schema.Episode;
    @property.literal({ type: Number })
    numberOfEpisodes!: number;
    @property.resource()
    partOfSeries!: Schema.CreativeWorkSeries;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.literal()
    seasonNumber!: number | string;
    @property.literal()
    startDate!: Date | Date;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return CreativeWorkSeasonClass
}

class CreativeWorkSeasonImpl extends CreativeWorkSeasonMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CreativeWorkSeason)
  }
}
CreativeWorkSeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreativeWorkSeason)
CreativeWorkSeasonMixin.Class = CreativeWorkSeasonImpl
