import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface ElementarySchool extends Schema.EducationalOrganization, RdfResource {
}

export default function ElementarySchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElementarySchoolClass extends EducationalOrganizationMixin(Resource) implements ElementarySchool {
  }
  return ElementarySchoolClass
}

class ElementarySchoolImpl extends ElementarySchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ElementarySchool>) {
    super(arg, init)
    this.types.add(schema.ElementarySchool)
  }
}
ElementarySchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ElementarySchool)
ElementarySchoolMixin.Class = ElementarySchoolImpl