import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МаркетологMixin
} from '../mixins/regenerated/models/i-i-s-konechnyjj-tochno-маркетолог';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МаркетологMixin, Validations, {
});

defineProjections(Model);

export default Model;
