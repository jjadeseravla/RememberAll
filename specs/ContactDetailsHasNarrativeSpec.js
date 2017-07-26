export default function(spec) {

  spec.describe('Contact details of a contact have a narrative in it', function() {

    spec.it('shows the contacts details', async function() {
      await spec.fillIn('NewContactForm.NameInput', 'Kyle');
      await spec.press('NewContactForm.Button');
      await spec.pause(1000);
      await spec.press('Contact.Kyle')
      await spec.exists('ContactDetails.Kyle')
      await spec.exists('ContactDetails.Kyle.Narrative')
    });
  });
}
