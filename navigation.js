import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { List } from "./components/List/List";
import { Photo } from "./components/Photo/Photo";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Galery"
          component={List}
          options={{
            title: 'Galery',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Photo" component={Photo}
          options={{
            title: 'Photo',
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: '#fff',
            headerBackTitleStyle: {color: '#fff'},
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#212121',
    height: 80,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  }
});
