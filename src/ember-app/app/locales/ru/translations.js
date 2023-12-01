import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKonechnyjjTochnoДолжностьLForm from './forms/i-i-s-konechnyjj-tochno-должность-l';
import IISKonechnyjjTochnoМаркетологLForm from './forms/i-i-s-konechnyjj-tochno-маркетолог-l';
import IISKonechnyjjTochnoОсновПоказатLForm from './forms/i-i-s-konechnyjj-tochno-основ-показат-l';
import IISKonechnyjjTochnoПерсоналLForm from './forms/i-i-s-konechnyjj-tochno-персонал-l';
import IISKonechnyjjTochnoСпросLForm from './forms/i-i-s-konechnyjj-tochno-спрос-l';
import IISKonechnyjjTochnoЦелеваяАудитLForm from './forms/i-i-s-konechnyjj-tochno-целевая-аудит-l';
import IISKonechnyjjTochnoДолжностьEForm from './forms/i-i-s-konechnyjj-tochno-должность-e';
import IISKonechnyjjTochnoМаркетологEForm from './forms/i-i-s-konechnyjj-tochno-маркетолог-e';
import IISKonechnyjjTochnoОсновПоказатEForm from './forms/i-i-s-konechnyjj-tochno-основ-показат-e';
import IISKonechnyjjTochnoПерсоналEForm from './forms/i-i-s-konechnyjj-tochno-персонал-e';
import IISKonechnyjjTochnoСпросEForm from './forms/i-i-s-konechnyjj-tochno-спрос-e';
import IISKonechnyjjTochnoЦелеваяАудитEForm from './forms/i-i-s-konechnyjj-tochno-целевая-аудит-e';
import IISKonechnyjjTochnoДолжностьModel from './models/i-i-s-konechnyjj-tochno-должность';
import IISKonechnyjjTochnoМаркетологModel from './models/i-i-s-konechnyjj-tochno-маркетолог';
import IISKonechnyjjTochnoОсновПоказатModel from './models/i-i-s-konechnyjj-tochno-основ-показат';
import IISKonechnyjjTochnoПерсоналModel from './models/i-i-s-konechnyjj-tochno-персонал';
import IISKonechnyjjTochnoСпросModel from './models/i-i-s-konechnyjj-tochno-спрос';
import IISKonechnyjjTochnoЦелеваяАудитModel from './models/i-i-s-konechnyjj-tochno-целевая-аудит';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-konechnyjj-tochno-должность': IISKonechnyjjTochnoДолжностьModel,
    'i-i-s-konechnyjj-tochno-маркетолог': IISKonechnyjjTochnoМаркетологModel,
    'i-i-s-konechnyjj-tochno-основ-показат': IISKonechnyjjTochnoОсновПоказатModel,
    'i-i-s-konechnyjj-tochno-персонал': IISKonechnyjjTochnoПерсоналModel,
    'i-i-s-konechnyjj-tochno-спрос': IISKonechnyjjTochnoСпросModel,
    'i-i-s-konechnyjj-tochno-целевая-аудит': IISKonechnyjjTochnoЦелеваяАудитModel
  },

  'application-name': 'Konechnyjj tochno',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Konechnyjj tochno',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Konechnyjj tochno',
          title: 'Konechnyjj tochno'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'konechnyjj-tochno': {
          caption: 'KonechnyjjTochno',
          title: 'KonechnyjjTochno',
          'i-i-s-konechnyjj-tochno-целевая-аудит-l': {
            caption: 'Целевая аудит',
            title: ''
          },
          'i-i-s-konechnyjj-tochno-спрос-l': {
            caption: 'Спрос',
            title: ''
          },
          'i-i-s-konechnyjj-tochno-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-konechnyjj-tochno-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-konechnyjj-tochno-маркетолог-l': {
            caption: 'Маркетолог',
            title: ''
          },
          'i-i-s-konechnyjj-tochno-основ-показат-l': {
            caption: 'Основ показат',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-konechnyjj-tochno-должность-l': IISKonechnyjjTochnoДолжностьLForm,
    'i-i-s-konechnyjj-tochno-маркетолог-l': IISKonechnyjjTochnoМаркетологLForm,
    'i-i-s-konechnyjj-tochno-основ-показат-l': IISKonechnyjjTochnoОсновПоказатLForm,
    'i-i-s-konechnyjj-tochno-персонал-l': IISKonechnyjjTochnoПерсоналLForm,
    'i-i-s-konechnyjj-tochno-спрос-l': IISKonechnyjjTochnoСпросLForm,
    'i-i-s-konechnyjj-tochno-целевая-аудит-l': IISKonechnyjjTochnoЦелеваяАудитLForm,
    'i-i-s-konechnyjj-tochno-должность-e': IISKonechnyjjTochnoДолжностьEForm,
    'i-i-s-konechnyjj-tochno-маркетолог-e': IISKonechnyjjTochnoМаркетологEForm,
    'i-i-s-konechnyjj-tochno-основ-показат-e': IISKonechnyjjTochnoОсновПоказатEForm,
    'i-i-s-konechnyjj-tochno-персонал-e': IISKonechnyjjTochnoПерсоналEForm,
    'i-i-s-konechnyjj-tochno-спрос-e': IISKonechnyjjTochnoСпросEForm,
    'i-i-s-konechnyjj-tochno-целевая-аудит-e': IISKonechnyjjTochnoЦелеваяАудитEForm
  },

});

export default translations;
