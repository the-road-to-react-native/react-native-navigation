import React from 'react';
import { View, Button } from 'react-native';

const SignInScreen = ({ onSignIn }) => {
  return (
    <View>
      <Button title="Sign In" onPress={onSignIn} />
    </View>
  );
};

export default SignInScreen;
