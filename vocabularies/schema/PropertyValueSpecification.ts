import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface PropertyValueSpecification extends Schema.Intangible, RdfResource {
  defaultValue: Schema.Thing;
  defaultValueLiteral: string;
  maxValue: number;
  minValue: number;
  multipleValues: boolean;
  readonlyValue: boolean;
  stepValue: number;
  valueMaxLength: number;
  valueMinLength: number;
  valueName: string;
  valuePattern: string;
  valueRequired: boolean;
}

export default function PropertyValueSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PropertyValueSpecificationClass extends IntangibleMixin(Resource) implements PropertyValueSpecification {
    @property.resource()
    defaultValue!: Schema.Thing;
    @property.literal({ path: schema.defaultValue })
    defaultValueLiteral!: string;
    @property.literal({ type: Number })
    maxValue!: number;
    @property.literal({ type: Number })
    minValue!: number;
    @property.literal({ type: Boolean })
    multipleValues!: boolean;
    @property.literal({ type: Boolean })
    readonlyValue!: boolean;
    @property.literal({ type: Number })
    stepValue!: number;
    @property.literal({ type: Number })
    valueMaxLength!: number;
    @property.literal({ type: Number })
    valueMinLength!: number;
    @property.literal()
    valueName!: string;
    @property.literal()
    valuePattern!: string;
    @property.literal({ type: Boolean })
    valueRequired!: boolean;
  }
  return PropertyValueSpecificationClass
}

class PropertyValueSpecificationImpl extends PropertyValueSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyValueSpecification>) {
    super(arg, init)
    this.types.add(schema.PropertyValueSpecification)
  }
}
PropertyValueSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PropertyValueSpecification)
PropertyValueSpecificationMixin.Class = PropertyValueSpecificationImpl