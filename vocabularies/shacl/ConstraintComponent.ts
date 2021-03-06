import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import { ParameterizableMixin } from './Parameterizable';

export interface ConstraintComponent extends Sh.Parameterizable, RdfResource {
  nodeValidator: Sh.Validator | undefined;
  propertyValidator: Sh.Validator | undefined;
  validator: Sh.Validator | undefined;
}

export function ConstraintComponentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ConstraintComponentClass extends ParameterizableMixin(Resource) implements ConstraintComponent {
    @property.resource({ implicitTypes: [sh.Validator] })
    nodeValidator: Sh.Validator | undefined;
    @property.resource({ implicitTypes: [sh.Validator] })
    propertyValidator: Sh.Validator | undefined;
    @property.resource({ implicitTypes: [sh.Validator] })
    validator: Sh.Validator | undefined;
  }
  return ConstraintComponentClass
}

class ConstraintComponentImpl extends ConstraintComponentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConstraintComponent>) {
    super(arg, init)
    this.types.add(sh.ConstraintComponent)
  }

  static readonly __mixins: Mixin[] = [ConstraintComponentMixin, ParameterizableMixin];
}
ConstraintComponentMixin.appliesTo = sh.ConstraintComponent
ConstraintComponentMixin.Class = ConstraintComponentImpl
