import React from 'react';
import { View, Button, Text } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Public Landing Screen</Text>

      <Button
        title="Go to SignIn"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default LandingScreen;
