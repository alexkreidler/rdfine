import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AudienceMixin from './Audience';

export interface PeopleAudience extends Schema.Audience, RdfResource {
  requiredGender: string;
  requiredMaxAge: number;
  requiredMinAge: number;
  suggestedGender: string;
  suggestedMaxAge: number;
  suggestedMinAge: number;
}

export default function PeopleAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PeopleAudienceClass extends AudienceMixin(Resource) implements PeopleAudience {
    @property.literal()
    requiredGender!: string;
    @property.literal({ type: Number })
    requiredMaxAge!: number;
    @property.literal({ type: Number })
    requiredMinAge!: number;
    @property.literal()
    suggestedGender!: string;
    @property.literal({ type: Number })
    suggestedMaxAge!: number;
    @property.literal({ type: Number })
    suggestedMinAge!: number;
  }
  return PeopleAudienceClass
}

class PeopleAudienceImpl extends PeopleAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PeopleAudience>) {
    super(arg)
    this.types.add(schema.PeopleAudience)
    initializeProperties<PeopleAudience>(this, init)
  }
}
PeopleAudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PeopleAudience)
PeopleAudienceMixin.Class = PeopleAudienceImpl
