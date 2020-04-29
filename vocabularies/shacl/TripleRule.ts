import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import RuleMixin from './Rule';

export interface TripleRule extends Sh.Rule, RdfResource {
  object: RDF.Term;
  predicate: RDF.Term;
  subject: RDF.Term;
}

export default function TripleRuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class TripleRuleClass extends RuleMixin(Resource) implements TripleRule {
    @property()
    object!: RDF.Term;
    @property()
    predicate!: RDF.Term;
    @property()
    subject!: RDF.Term;
  }
  return TripleRuleClass
}

class TripleRuleImpl extends TripleRuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TripleRule>) {
    super(arg, init)
    this.types.add(sh.TripleRule)
  }
}
TripleRuleMixin.shouldApply = (r: RdfResource) => r.types.has(sh.TripleRule)
TripleRuleMixin.Class = TripleRuleImpl