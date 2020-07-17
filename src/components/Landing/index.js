import React from 'react';
import { View, Button, Text } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Public Landing Screen</Text>

      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate('Sign In')}
      />
    </View>
  );
};

export default LandingScreen;
