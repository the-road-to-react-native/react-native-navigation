import React from 'react';
import { Button } from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LandingScreen from './components/Landing';
import SignInScreen from './components/SignIn';
import SignUpScreen from './components/SignUp';
import HomeScreen from './components/Home';
import AccountScreen from './components/Account';
import PasswordChangeScreen from './components/PasswordChange';
import PasswordForgetScreen from './components/PasswordForget';

const Drawer = createDrawerNavigator();

const HomeTabs = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen
        name="PasswordForget"
        component={PasswordForgetScreen}
      />
      <Drawer.Screen
        name="PasswordChange"
        component={PasswordChangeScreen}
      />
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isSignedIn ? (
          <RootStack.Screen
            name="Home"
            component={HomeTabs}
            options={({ navigation, route }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                  title="Menu"
                />
              ),
              headerRight: () => (
                <Button
                  onPress={() => setIsSignedIn(false)}
                  title="Sign Out"
                />
              ),
            })}
          />
        ) : (
          <>
            <RootStack.Screen
              name="Landing"
              component={LandingScreen}
              options={{
                // When logging out, a pop animation feels intuitive
                // You can remove this if you want the default 'push' animation
                animationTypeForReplace: !isSignedIn ? 'pop' : 'push',
              }}
            />
            <RootStack.Screen name="SignIn">
              {(props) => (
                <SignInScreen
                  {...props}
                  onSignIn={() => setIsSignedIn(true)}
                />
              )}
            </RootStack.Screen>
            <RootStack.Screen
              name="SignUp"
              component={SignUpScreen}
            />
            <RootStack.Screen
              name="PasswordForget"
              component={PasswordForgetScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
