import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import ObjectPropertyMixin from './ObjectProperty';

export interface ReflexiveProperty extends Owl.ObjectProperty, RdfResource {
}

export default function ReflexivePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ReflexivePropertyClass extends ObjectPropertyMixin(Resource) implements ReflexiveProperty {
  }
  return ReflexivePropertyClass
}

class ReflexivePropertyImpl extends ReflexivePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReflexiveProperty>) {
    super(arg, init)
    this.types.add(owl.ReflexiveProperty)
  }
}
ReflexivePropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.ReflexiveProperty)
ReflexivePropertyMixin.Class = ReflexivePropertyImpl