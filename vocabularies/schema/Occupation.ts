import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Occupation extends Schema.Intangible, RdfResource {
  estimatedSalary: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
  estimatedSalaryLiteral: number;
  experienceRequirements: string;
  occupationLocation: Schema.AdministrativeArea;
  responsibilities: string;
  skills: rdf.Term;
  skillsLiteral: string;
}

export default function OccupationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OccupationClass extends IntangibleMixin(Resource) implements Occupation {
    @property.resource()
    estimatedSalary!: Schema.MonetaryAmount | Schema.MonetaryAmountDistribution;
    @property.literal({ type: Number, path: schema.estimatedSalary })
    estimatedSalaryLiteral!: number;
    @property.literal()
    experienceRequirements!: string;
    @property.resource()
    occupationLocation!: Schema.AdministrativeArea;
    @property.literal()
    responsibilities!: string;
    @property()
    skills!: rdf.Term;
    @property.literal({ path: schema.skills })
    skillsLiteral!: string;
  }
  return OccupationClass
}

class OccupationImpl extends OccupationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Occupation>) {
    super(arg, init)
    this.types.add(schema.Occupation)
  }
}
OccupationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Occupation)
OccupationMixin.Class = OccupationImpl