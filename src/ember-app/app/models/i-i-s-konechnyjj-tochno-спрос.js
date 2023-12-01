import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпросMixin
} from '../mixins/regenerated/models/i-i-s-konechnyjj-tochno-спрос';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпросMixin, Validations, {
});

defineProjections(Model);

export default Model;
