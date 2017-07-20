export default function(spec) {

  spec.describe('Adding a contact', function() {

    spec.it('shows the contact on the page', async function() {
      await spec.fillIn('NewContactForm.TextInput', 'Sally');
      await spec.press('NewContactForm.Button');
      await spec.pause(1000);
      await spec.exists('ContactEntry.Sally');
    });
  });
}
