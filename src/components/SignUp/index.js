import React from 'react';
import { View, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Landing"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
};

export default SignUpScreen;
