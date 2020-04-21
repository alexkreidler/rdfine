import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import ResourceMixin from './Resource';
import StatusMixin from './Status';

export interface Operation extends Hydra.Resource, RdfResource {
  description: string;
  expects: Hydra.Class | Hydra.Resource;
  expectsHeader: string;
  method: string;
  possibleStatus: Array<Hydra.Status>;
  returns: Hydra.Class | Hydra.Resource;
  returnsHeader: string;
  title: string;
}

export default function OperationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class OperationClass extends ResourceMixin(Resource) implements Operation {
    @property.literal()
    description!: string;
    @property.resource()
    expects!: Hydra.Class | Hydra.Resource;
    @property.literal()
    expectsHeader!: string;
    @property.literal()
    method!: string;
    @property.resource({ values: 'array', as: [StatusMixin] })
    possibleStatus!: Array<Hydra.Status>;
    @property.resource()
    returns!: Hydra.Class | Hydra.Resource;
    @property.literal()
    returnsHeader!: string;
    @property.literal()
    title!: string;
  }
  return OperationClass
}

class OperationImpl extends OperationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Operation>) {
    super(arg, init)
    this.types.add(hydra.Operation)
  }
}
OperationMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.Operation)
OperationMixin.Class = OperationImpl