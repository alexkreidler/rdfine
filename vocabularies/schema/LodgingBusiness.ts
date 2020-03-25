import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface LodgingBusiness extends Schema.LocalBusiness, RdfResource {
  amenityFeature: Schema.LocationFeatureSpecification;
  audience: Schema.Audience;
  availableLanguage: Schema.Language;
  availableLanguageLiteral: string;
  checkinTime: Date | Date;
  checkoutTime: Date | Date;
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  petsAllowed: boolean | string;
  starRating: Schema.Rating;
}

export default function LodgingBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LodgingBusinessClass extends LocalBusinessMixin(Resource) implements LodgingBusiness {
    @property.resource()
    amenityFeature!: Schema.LocationFeatureSpecification;
    @property.resource()
    audience!: Schema.Audience;
    @property.resource()
    availableLanguage!: Schema.Language;
    @property.literal({ path: schema.availableLanguage })
    availableLanguageLiteral!: string;
    @property.literal()
    checkinTime!: Date | Date;
    @property.literal()
    checkoutTime!: Date | Date;
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numberOfRooms })
    numberOfRoomsLiteral!: number;
    @property.literal()
    petsAllowed!: boolean | string;
    @property.resource()
    starRating!: Schema.Rating;
  }
  return LodgingBusinessClass
}

class LodgingBusinessImpl extends LodgingBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LodgingBusiness>) {
    super(arg, init)
    this.types.add(schema.LodgingBusiness)
  }
}
LodgingBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LodgingBusiness)
LodgingBusinessMixin.Class = LodgingBusinessImpl