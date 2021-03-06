import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface TradeAction extends Schema.Action, RdfResource {
  price: number | string | undefined;
  priceCurrency: string | undefined;
  priceSpecification: Schema.PriceSpecification | undefined;
}

export function TradeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TradeActionClass extends ActionMixin(Resource) implements TradeAction {
    @property.literal()
    price: number | string | undefined;
    @property.literal()
    priceCurrency: string | undefined;
    @property.resource()
    priceSpecification: Schema.PriceSpecification | undefined;
  }
  return TradeActionClass
}

class TradeActionImpl extends TradeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TradeAction>) {
    super(arg, init)
    this.types.add(schema.TradeAction)
  }

  static readonly __mixins: Mixin[] = [TradeActionMixin, ActionMixin];
}
TradeActionMixin.appliesTo = schema.TradeAction
TradeActionMixin.Class = TradeActionImpl
