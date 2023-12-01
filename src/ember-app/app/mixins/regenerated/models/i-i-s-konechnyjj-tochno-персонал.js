import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-konechnyjj-tochno-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  телефон: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-персонал.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-персонал.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-персонал.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПерсоналE', 'i-i-s-konechnyjj-tochno-персонал', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });

  modelClass.defineProjection('ПерсоналL', 'i-i-s-konechnyjj-tochno-персонал', {
    фИО: attr('ФИО', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });
};
