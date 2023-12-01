import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  броньЧерСайт: DS.attr('boolean'),
  занятВМесяц: DS.attr('number'),
  категорНомера: DS.attr('number'),
  номер: DS.attr('number'),
  скВторНомер: DS.attr('boolean'),
  скДр: DS.attr('boolean'),
  скПриДлитПрож: DS.attr('boolean'),
  суммСоСкид: DS.attr('number'),
  цена: DS.attr('number'),
  юридич: DS.attr('boolean'),
  маркетолог: DS.belongsTo('i-i-s-konechnyjj-tochno-маркетолог', { inverse: null, async: false })
});

export let ValidationRules = {
  броньЧерСайт: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.броньЧерСайт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  занятВМесяц: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.занятВМесяц.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  категорНомера: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.категорНомера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  скВторНомер: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.скВторНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скДр: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.скДр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  скПриДлитПрож: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.скПриДлитПрож.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммСоСкид: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.суммСоСкид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юридич: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.юридич.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  маркетолог: {
    descriptionKey: 'models.i-i-s-konechnyjj-tochno-спрос.validations.маркетолог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпросE', 'i-i-s-konechnyjj-tochno-спрос', {
    номер: attr('Номер', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    категорНомера: attr('Категор номера', { index: 2 }),
    занятВМесяц: attr('Занят в месяц', { index: 3 }),
    юридич: attr('Юридич', { index: 4 }),
    броньЧерСайт: attr('Бронь чер сайт', { index: 5 }),
    скПриДлитПрож: attr('Ск при длит прож', { index: 6 }),
    скДр: attr('Ск др', { index: 7 }),
    скВторНомер: attr('Ск втор номер', { index: 8 }),
    суммСоСкид: attr('Сумм со скид', { index: 9 })
  });

  modelClass.defineProjection('СпросL', 'i-i-s-konechnyjj-tochno-спрос', {
    номер: attr('Номер', { index: 0 }),
    цена: attr('Цена', { index: 1 }),
    категорНомера: attr('Категор номера', { index: 2 }),
    занятВМесяц: attr('Занят в месяц', { index: 3 }),
    юридич: attr('Юридич', { index: 4 }),
    броньЧерСайт: attr('Бронь чер сайт', { index: 5 }),
    скПриДлитПрож: attr('Ск при длит прож', { index: 6 }),
    скДр: attr('Ск др', { index: 7 }),
    скВторНомер: attr('Ск втор номер', { index: 8 }),
    суммСоСкид: attr('Сумм со скид', { index: 9 })
  });
};
