import React from 'react';
import { View, Text,Button, } from 'react-native';

function CloseGripBenchPressScreen({ navigation }) {
    return (
      <View>
        <Text>Close Grip Bench Press</Text>
        <Button
          title="Arka Kol Egzersizine Git"
          onPress={() => navigation.navigate('Arka Kol')}
        />
        
      </View>
    );
  }

export default CloseGripBenchPressScreen;
