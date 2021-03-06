import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { AbstractResultMixin } from './AbstractResult';

export interface ValidationResult extends Sh.AbstractResult, RdfResource {
}

export function ValidationResultMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ValidationResultClass extends AbstractResultMixin(Resource) implements ValidationResult {
  }
  return ValidationResultClass
}

class ValidationResultImpl extends ValidationResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ValidationResult>) {
    super(arg, init)
    this.types.add(sh.ValidationResult)
  }

  static readonly __mixins: Mixin[] = [ValidationResultMixin, AbstractResultMixin];
}
ValidationResultMixin.appliesTo = sh.ValidationResult
ValidationResultMixin.Class = ValidationResultImpl
