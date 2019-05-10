import React, { Component } from 'react';
import Colors from '../../constants/Colors';
import { Icon } from 'expo';
import { Text } from 'react-native';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={30}
        style={{ marginBottom: -10 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}