export default function(spec) {

  spec.describe('Contact details have a section that', function() {

    spec.it('shows the narrative', async function() {
      await spec.fillIn('NewContactForm.NameInput', 'Kye');
      await spec.fillIn('NewContactForm.RoleInput', 'WebDev');
      await spec.fillIn('NewContactForm.OrganisationInput', 'Makers Academy');
      await spec.fillIn('NewContactForm.ContextInput', 'Ruby Conf');
      await spec.press('NewContactForm.Button');
      await spec.pause(50);
      await spec.press('Contact.Kye')
      await spec.exists('ContactDetails.Kye')
      await spec.exists('ContactDetails.Kye.Narrative')
    });
  });
}
