import {
  defineNamespace,
  defineProjections,
  Model as СпросMixin
} from '../mixins/regenerated/models/i-i-s-konechnyjj-tochno-спрос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпросMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
