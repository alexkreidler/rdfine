import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AssessActionMixin } from '../AssessAction';
import { ReviewActionMixin } from '../ReviewAction';
import { ReviewMixin } from '../Review';

export const ReviewActionDependencies = [
  AssessActionMixin as Mixin,
  ReviewActionMixin as Mixin,
  ReviewMixin as Mixin];