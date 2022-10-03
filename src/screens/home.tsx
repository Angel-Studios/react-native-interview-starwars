import type { NavigationScreen, Screen } from 'app/navigation/types';
import { StyleSheet, Text, View } from 'react-native';

export const Home: NavigationScreen<Screen.Home> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
