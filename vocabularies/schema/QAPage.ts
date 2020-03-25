import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface QAPage extends Schema.WebPage, RdfResource {
}

export default function QAPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QAPageClass extends WebPageMixin(Resource) implements QAPage {
  }
  return QAPageClass
}

class QAPageImpl extends QAPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<QAPage>) {
    super(arg)
    this.types.add(schema.QAPage)
    initializeProperties<QAPage>(this, init)
  }
}
QAPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QAPage)
QAPageMixin.Class = QAPageImpl
