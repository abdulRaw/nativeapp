import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationItems } from './NavItems';


export default function Feeds({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }