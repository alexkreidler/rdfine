import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { DataCatalogMixin } from '../DataCatalog';
import { DatasetMixin } from '../Dataset';

export const DataCatalogDependencies = [
  CreativeWorkMixin as Mixin,
  DataCatalogMixin as Mixin,
  DatasetMixin as Mixin];