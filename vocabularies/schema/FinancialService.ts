import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface FinancialService extends Schema.LocalBusiness, RdfResource {
  feesAndCommissionsSpecification: rdf.Term;
  feesAndCommissionsSpecificationLiteral: string;
}

export default function FinancialServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FinancialServiceClass extends LocalBusinessMixin(Resource) implements FinancialService {
    @property()
    feesAndCommissionsSpecification!: rdf.Term;
    @property.literal({ path: schema.feesAndCommissionsSpecification })
    feesAndCommissionsSpecificationLiteral!: string;
  }
  return FinancialServiceClass
}

class FinancialServiceImpl extends FinancialServiceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FinancialService)
  }
}
FinancialServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FinancialService)
FinancialServiceMixin.Class = FinancialServiceImpl
