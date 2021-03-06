import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Parameterizable extends Rdfs.Resource, RdfResource {
  labelTemplate: string | undefined;
  parameter: Sh.Parameter | undefined;
}

export function ParameterizableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ParameterizableClass extends Rdfs.ResourceMixin(Resource) implements Parameterizable {
    @property.literal()
    labelTemplate: string | undefined;
    @property.resource({ implicitTypes: [sh.Parameter] })
    parameter: Sh.Parameter | undefined;
  }
  return ParameterizableClass
}

class ParameterizableImpl extends ParameterizableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Parameterizable>) {
    super(arg, init)
    this.types.add(sh.Parameterizable)
  }

  static readonly __mixins: Mixin[] = [ParameterizableMixin, Rdfs.ResourceMixin];
}
ParameterizableMixin.appliesTo = sh.Parameterizable
ParameterizableMixin.Class = ParameterizableImpl
