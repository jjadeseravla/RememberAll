import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class WelcomeHeader extends React.Component {
  render() {
    return <Text style={styles.maintitle}>
    RememberAll
    </Text>
  }
}

const styles = StyleSheet.create({
  maintitle: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Euphemia UCAS',
  },
});

export default WelcomeHeader
