import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ComputerLanguage extends Schema.Intangible, RdfResource {
}

export default function ComputerLanguageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComputerLanguageClass extends IntangibleMixin(Resource) implements ComputerLanguage {
  }
  return ComputerLanguageClass
}

class ComputerLanguageImpl extends ComputerLanguageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComputerLanguage>) {
    super(arg, init)
    this.types.add(schema.ComputerLanguage)
  }
}
ComputerLanguageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComputerLanguage)
ComputerLanguageMixin.Class = ComputerLanguageImpl