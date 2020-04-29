import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../CivicStructure';
import { EmergencyServiceMixin } from '../EmergencyService';
import { FireStationMixin } from '../FireStation';

export const FireStationDependencies = [
  CivicStructureMixin as Mixin,
  EmergencyServiceMixin as Mixin,
  FireStationMixin as Mixin];