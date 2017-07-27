export default function(spec) {

  spec.describe('Filtering a contact', function() {

    spec.it('filters the contact on the page', async () => {
      await spec.fillIn('NewContactForm.NameInput', 'Suzy');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('NewContactForm.NameInput', 'Timmy');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('SearchBar.TextInput', 'Suzy');
      await spec.pause(1000);
      await spec.notExists('Contact.Timmy');
      await spec.exists('Contact.Suzy');
    });

    spec.it('filters case-insensitively', async () => {
      await spec.fillIn('SearchBar.TextInput', 'timmy');
      await spec.pause(1000);
      await spec.notExists('Contact.Suzy');
      await spec.exists('Contact.Timmy');
    });

    spec.it('filters by any text property', async () => {
      await spec.fillIn('NewContactForm.NameInput', 'Esme');
      await spec.fillIn('NewContactForm.RoleInput', 'CEO');
      await spec.fillIn('NewContactForm.OrganisationInput', 'PWC');
      await spec.fillIn('NewContactForm.ContextInput', 'LRUG');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('SearchBar.TextInput', 'CEO');
      await spec.pause(1000);
      await spec.notExists('Contact.Timmy');
      await spec.exists('Contact.Esme');
      await spec.fillIn('SearchBar.TextInput', 'PWC');
      await spec.pause(1000);
      await spec.notExists('Contact.Timmy');
      await spec.exists('Contact.Esme');
      await spec.fillIn('SearchBar.TextInput', 'LRUG');
      await spec.pause(1000);
      await spec.notExists('Contact.Timmy');
      await spec.exists('Contact.Esme');
    });

    spec.it('filters by tags', async () => {
      await spec.fillIn('NewContactForm.NameInput', 'Goku');
      await spec.fillIn('NewContactForm.TagsInput', 'Super Saiyan, loves food');
      await spec.press('NewContactForm.Button');
      await spec.fillIn('SearchBar.TextInput', 'loves food');
      await spec.notExists('Contact.Esme');
      await spec.exists('Contact.Goku');
    });
  });
}
