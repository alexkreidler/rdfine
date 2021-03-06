import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface BedDetails extends Schema.Intangible, RdfResource {
  numberOfBeds: number | undefined;
  typeOfBed: string | undefined;
  typeOfBedTerm: Schema.BedType | undefined;
}

export function BedDetailsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BedDetailsClass extends IntangibleMixin(Resource) implements BedDetails {
    @property.literal({ type: Number })
    numberOfBeds: number | undefined;
    @property.literal()
    typeOfBed: string | undefined;
    @property({ path: schema.typeOfBed })
    typeOfBedTerm: Schema.BedType | undefined;
  }
  return BedDetailsClass
}

class BedDetailsImpl extends BedDetailsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BedDetails>) {
    super(arg, init)
    this.types.add(schema.BedDetails)
  }

  static readonly __mixins: Mixin[] = [BedDetailsMixin, IntangibleMixin];
}
BedDetailsMixin.appliesTo = schema.BedDetails
BedDetailsMixin.Class = BedDetailsImpl
