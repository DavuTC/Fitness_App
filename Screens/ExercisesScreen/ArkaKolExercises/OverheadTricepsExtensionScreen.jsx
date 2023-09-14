import React from 'react';
import { View, Text,Button, } from 'react-native';

function OverheadTricepsExtensionScreen({ navigation }) {
    return (
      <View>
        <Text>Overhead Triceps Extension</Text>
        <Button
          title="Arka Kol Egzersizine Git"
          onPress={() => navigation.navigate('Arka Kol')}
        />
        
      </View>
    );
  }

export default OverheadTricepsExtensionScreen;
