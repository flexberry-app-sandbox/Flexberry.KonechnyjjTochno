import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  персонал: DS.belongsTo('i-i-s-konechnyjj-tochno-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  персонал: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-маркетолог.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МаркетологE', 'i-i-s-konechnyjj-tochno-маркетолог', {
    
  });

  modelClass.defineProjection('МаркетологL', 'i-i-s-konechnyjj-tochno-маркетолог', {
    
  });
};
