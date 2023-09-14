import React from 'react';
import { View, Text,Button, } from 'react-native';

function ReverseGripPushDownScreen({ navigation }) {
    return (
      <View>
        <Text>Reverse Grip Push Down</Text>
        <Button
          title="Arka Kol Egzersizine Git"
          onPress={() => navigation.navigate('Arka Kol')}
        />
        
      </View>
    );
  }

export default ReverseGripPushDownScreen;
