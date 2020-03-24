import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ArticleMixin from './Article';

export interface NewsArticle extends Schema.Article, RdfResource {
  dateline: string;
  printColumn: string;
  printEdition: string;
  printPage: string;
  printSection: string;
}

export default function NewsArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NewsArticleClass extends ArticleMixin(Resource) implements NewsArticle {
    @property.literal()
    dateline!: string;
    @property.literal()
    printColumn!: string;
    @property.literal()
    printEdition!: string;
    @property.literal()
    printPage!: string;
    @property.literal()
    printSection!: string;
  }
  return NewsArticleClass
}

class NewsArticleImpl extends NewsArticleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.NewsArticle)
  }
}
NewsArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NewsArticle)
NewsArticleMixin.Class = NewsArticleImpl
