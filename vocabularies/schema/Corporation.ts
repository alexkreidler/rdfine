import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface Corporation extends Schema.Organization, RdfResource {
  tickerSymbol: string | undefined;
}

export function CorporationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CorporationClass extends OrganizationMixin(Resource) implements Corporation {
    @property.literal()
    tickerSymbol: string | undefined;
  }
  return CorporationClass
}

class CorporationImpl extends CorporationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Corporation>) {
    super(arg, init)
    this.types.add(schema.Corporation)
  }

  static readonly __mixins: Mixin[] = [CorporationMixin, OrganizationMixin];
}
CorporationMixin.appliesTo = schema.Corporation
CorporationMixin.Class = CorporationImpl
