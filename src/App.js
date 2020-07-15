import * as React from 'react';
import { View, Button } from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Landing"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  );
};

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={AuthenticatedTabs}
            options={({ route }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
            })}
          />
        ) : (
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
