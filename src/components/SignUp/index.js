import React from 'react';
import { View, Button } from 'react-native';

const SignUpScreen = ({ onSignUp }) => {
  return (
    <View>
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};

export default SignUpScreen;
