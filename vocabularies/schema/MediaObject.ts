import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MediaObject extends Schema.CreativeWork, RdfResource {
  associatedArticle: Schema.NewsArticle;
  bitrate: string;
  contentSize: string;
  contentUrl: rdf.Term;
  duration: Schema.Duration;
  embedUrl: rdf.Term;
  encodesCreativeWork: Schema.CreativeWork;
  encodingFormat: rdf.Term;
  encodingFormatLiteral: string;
  endTime: Date | Date;
  height: Schema.Distance | Schema.QuantitativeValue;
  playerType: string;
  productionCompany: Schema.Organization;
  regionsAllowed: Schema.Place;
  requiresSubscription: Schema.MediaSubscription;
  requiresSubscriptionLiteral: boolean;
  startTime: Date | Date;
  uploadDate: Date;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function MediaObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaObjectClass extends CreativeWorkMixin(Resource) implements MediaObject {
    @property.resource()
    associatedArticle!: Schema.NewsArticle;
    @property.literal()
    bitrate!: string;
    @property.literal()
    contentSize!: string;
    @property()
    contentUrl!: rdf.Term;
    @property.resource()
    duration!: Schema.Duration;
    @property()
    embedUrl!: rdf.Term;
    @property.resource()
    encodesCreativeWork!: Schema.CreativeWork;
    @property()
    encodingFormat!: rdf.Term;
    @property.literal({ path: schema.encodingFormat })
    encodingFormatLiteral!: string;
    @property.literal()
    endTime!: Date | Date;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    playerType!: string;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    regionsAllowed!: Schema.Place;
    @property.resource()
    requiresSubscription!: Schema.MediaSubscription;
    @property.literal({ type: Boolean, path: schema.requiresSubscription })
    requiresSubscriptionLiteral!: boolean;
    @property.literal()
    startTime!: Date | Date;
    @property.literal()
    uploadDate!: Date;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return MediaObjectClass
}

class MediaObjectImpl extends MediaObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaObject>) {
    super(arg, init)
    this.types.add(schema.MediaObject)
  }
}
MediaObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaObject)
MediaObjectMixin.Class = MediaObjectImpl