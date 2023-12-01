import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Konechnyjj tochno',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Konechnyjj tochno',
          title: 'Konechnyjj tochno'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
