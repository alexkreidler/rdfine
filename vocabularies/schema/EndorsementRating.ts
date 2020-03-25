import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import RatingMixin from './Rating';

export interface EndorsementRating extends Schema.Rating, RdfResource {
}

export default function EndorsementRatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EndorsementRatingClass extends RatingMixin(Resource) implements EndorsementRating {
  }
  return EndorsementRatingClass
}

class EndorsementRatingImpl extends EndorsementRatingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EndorsementRating>) {
    super(arg, init)
    this.types.add(schema.EndorsementRating)
  }
}
EndorsementRatingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EndorsementRating)
EndorsementRatingMixin.Class = EndorsementRatingImpl