import type { NavigationScreen, Screen } from 'app/navigation/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Details: NavigationScreen<Screen.Details> = ({navigation, route}) => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
