import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-konechnyjj-tochno-спрос', 'Unit | Model | i-i-s-konechnyjj-tochno-спрос', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-konechnyjj-tochno-должность',
    'model:i-i-s-konechnyjj-tochno-маркетолог',
    'model:i-i-s-konechnyjj-tochno-основ-показат',
    'model:i-i-s-konechnyjj-tochno-персонал',
    'model:i-i-s-konechnyjj-tochno-спрос',
    'model:i-i-s-konechnyjj-tochno-целевая-аудит',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
