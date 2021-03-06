import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface FinancialService extends Schema.LocalBusiness, RdfResource {
  feesAndCommissionsSpecification: string | undefined;
  feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
}

export function FinancialServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialServiceClass extends LocalBusinessMixin(Resource) implements FinancialService {
    @property.literal()
    feesAndCommissionsSpecification: string | undefined;
    @property({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationTerm: RDF.NamedNode | undefined;
  }
  return FinancialServiceClass
}

class FinancialServiceImpl extends FinancialServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FinancialService>) {
    super(arg, init)
    this.types.add(schema.FinancialService)
  }

  static readonly __mixins: Mixin[] = [FinancialServiceMixin, LocalBusinessMixin];
}
FinancialServiceMixin.appliesTo = schema.FinancialService
FinancialServiceMixin.Class = FinancialServiceImpl
