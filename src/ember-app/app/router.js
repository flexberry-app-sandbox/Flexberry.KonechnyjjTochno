import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-konechnyjj-tochno-должность-l');
  this.route('i-i-s-konechnyjj-tochno-должность-e',
  { path: 'i-i-s-konechnyjj-tochno-должность-e/:id' });
  this.route('i-i-s-konechnyjj-tochno-должность-e.new',
  { path: 'i-i-s-konechnyjj-tochno-должность-e/new' });
  this.route('i-i-s-konechnyjj-tochno-маркетолог-l');
  this.route('i-i-s-konechnyjj-tochno-маркетолог-e',
  { path: 'i-i-s-konechnyjj-tochno-маркетолог-e/:id' });
  this.route('i-i-s-konechnyjj-tochno-маркетолог-e.new',
  { path: 'i-i-s-konechnyjj-tochno-маркетолог-e/new' });
  this.route('i-i-s-konechnyjj-tochno-основ-показат-l');
  this.route('i-i-s-konechnyjj-tochno-основ-показат-e',
  { path: 'i-i-s-konechnyjj-tochno-основ-показат-e/:id' });
  this.route('i-i-s-konechnyjj-tochno-основ-показат-e.new',
  { path: 'i-i-s-konechnyjj-tochno-основ-показат-e/new' });
  this.route('i-i-s-konechnyjj-tochno-персонал-l');
  this.route('i-i-s-konechnyjj-tochno-персонал-e',
  { path: 'i-i-s-konechnyjj-tochno-персонал-e/:id' });
  this.route('i-i-s-konechnyjj-tochno-персонал-e.new',
  { path: 'i-i-s-konechnyjj-tochno-персонал-e/new' });
  this.route('i-i-s-konechnyjj-tochno-спрос-l');
  this.route('i-i-s-konechnyjj-tochno-спрос-e',
  { path: 'i-i-s-konechnyjj-tochno-спрос-e/:id' });
  this.route('i-i-s-konechnyjj-tochno-спрос-e.new',
  { path: 'i-i-s-konechnyjj-tochno-спрос-e/new' });
  this.route('i-i-s-konechnyjj-tochno-целевая-аудит-l');
  this.route('i-i-s-konechnyjj-tochno-целевая-аудит-e',
  { path: 'i-i-s-konechnyjj-tochno-целевая-аудит-e/:id' });
  this.route('i-i-s-konechnyjj-tochno-целевая-аудит-e.new',
  { path: 'i-i-s-konechnyjj-tochno-целевая-аудит-e/new' });
});

export default Router;
