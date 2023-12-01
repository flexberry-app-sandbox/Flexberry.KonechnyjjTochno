import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.caption'),
          title: i18n.t('forms.application.sitemap.konechnyjj-tochno.title'),
          children: [{
            link: 'i-i-s-konechnyjj-tochno-целевая-аудит-l',
            caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-целевая-аудит-l.caption'),
            title: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-целевая-аудит-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-tochno-спрос-l',
            caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-спрос-l.caption'),
            title: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-спрос-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-tochno-персонал-l',
            caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-персонал-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-tochno-должность-l',
            caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-должность-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-tochno-маркетолог-l',
            caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-маркетолог-l.caption'),
            title: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-маркетолог-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-konechnyjj-tochno-основ-показат-l',
            caption: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-основ-показат-l.caption'),
            title: i18n.t('forms.application.sitemap.konechnyjj-tochno.i-i-s-konechnyjj-tochno-основ-показат-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})