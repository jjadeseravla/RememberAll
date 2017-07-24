import React from 'react';
import { Text, View } from 'react-native';
import Contact from './Contact'
import SearchBar from './SearchBar'

import realm from '../models/realm'


class ContactsList extends React.Component {

  constructor() {
    super()
    this.state = {refreshing: false, text: null}
    this.refreshContacts = this.refreshContacts.bind(this)
    realm.addListener('change', () => {
      this.setState({ refreshing: true })
    })
  }

  refreshContacts(text) {
    this.setState({refreshing: true, text: text})
  }

  renderContacts(text = null) {

    if (text === null) {
      return realm.objects('Contact').map((contact, i) =>
        <Contact
          name={contact.name}
          key={`contact#${i}`}
        />
      )
    } else {
      console.log(text)
      const filterContacts = realm.objects('Contact').filtered(`name CONTAINS "${text.text}"`)
      console.log(filterContacts)
      return filterContacts.map((contact, i) =>
      <Contact
        name={contact.name}
        key={`contact#${i}`}
      />
      )
    }
  }

  render() {
    return (
      <View>
        <SearchBar onChangeText={this.refreshContacts}/>
        {this.renderContacts(this.state.text)}
      </View>
    )
  };
};

export default ContactsList
