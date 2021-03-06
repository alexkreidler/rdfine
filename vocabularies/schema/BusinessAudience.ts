import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AudienceMixin } from './Audience';

export interface BusinessAudience extends Schema.Audience, RdfResource {
  numberOfEmployees: Schema.QuantitativeValue | undefined;
  yearlyRevenue: Schema.QuantitativeValue | undefined;
  yearsInOperation: Schema.QuantitativeValue | undefined;
}

export function BusinessAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusinessAudienceClass extends AudienceMixin(Resource) implements BusinessAudience {
    @property.resource()
    numberOfEmployees: Schema.QuantitativeValue | undefined;
    @property.resource()
    yearlyRevenue: Schema.QuantitativeValue | undefined;
    @property.resource()
    yearsInOperation: Schema.QuantitativeValue | undefined;
  }
  return BusinessAudienceClass
}

class BusinessAudienceImpl extends BusinessAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusinessAudience>) {
    super(arg, init)
    this.types.add(schema.BusinessAudience)
  }

  static readonly __mixins: Mixin[] = [BusinessAudienceMixin, AudienceMixin];
}
BusinessAudienceMixin.appliesTo = schema.BusinessAudience
BusinessAudienceMixin.Class = BusinessAudienceImpl
