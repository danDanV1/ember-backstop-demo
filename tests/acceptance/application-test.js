import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /application', async function(assert) {
    await visit('/application');

    assert.equal(currentURL(), '/application');
  });
});
