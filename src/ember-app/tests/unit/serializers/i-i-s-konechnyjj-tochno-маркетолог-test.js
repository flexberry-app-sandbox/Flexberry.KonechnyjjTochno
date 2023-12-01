import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-konechnyjj-tochno-маркетолог', 'Unit | Serializer | i-i-s-konechnyjj-tochno-маркетолог', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-konechnyjj-tochno-маркетолог',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
