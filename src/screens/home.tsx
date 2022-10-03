import { Screen } from 'app/navigation/types';
import type { NavigationScreen } from 'app/navigation/types';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const Home: NavigationScreen<Screen.Home> = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate(Screen.Details, { id: 1234 })}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
