export default function(spec) {

  spec.describe('Filter by tag', function() {

    spec.it('shows contacts when filtered', async function() {
      await spec.fillIn('NewContactForm.NameInput', 'Sally');
      await spec.fillIn('NewContactForm.TagsInput', 'Cool');
      await spec.press('NewContactForm.Button');
      await spec.pause(1000);
      await spec.exists('ContactEntry.Sally');
    }
  });
