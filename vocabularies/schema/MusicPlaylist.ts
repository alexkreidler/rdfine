import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface MusicPlaylist extends Schema.CreativeWork, RdfResource {
  numTracks: number | undefined;
  track: Schema.ItemList | Schema.MusicRecording | undefined;
  tracks: Schema.MusicRecording | undefined;
}

export function MusicPlaylistMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MusicPlaylistClass extends CreativeWorkMixin(Resource) implements MusicPlaylist {
    @property.literal({ type: Number })
    numTracks: number | undefined;
    @property.resource()
    track: Schema.ItemList | Schema.MusicRecording | undefined;
    @property.resource()
    tracks: Schema.MusicRecording | undefined;
  }
  return MusicPlaylistClass
}

class MusicPlaylistImpl extends MusicPlaylistMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MusicPlaylist>) {
    super(arg, init)
    this.types.add(schema.MusicPlaylist)
  }

  static readonly __mixins: Mixin[] = [MusicPlaylistMixin, CreativeWorkMixin];
}
MusicPlaylistMixin.appliesTo = schema.MusicPlaylist
MusicPlaylistMixin.Class = MusicPlaylistImpl
