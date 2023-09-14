import React from 'react';
import { View, Text,Button, } from 'react-native';

function LyingTricepsExtensionScreen({ navigation }) {
    return (
      <View>
        <Text>Lying Triceps Extension</Text>
        <Button
          title="Arka Kol Egzersizine Git"
          onPress={() => navigation.navigate('Arka Kol')}
        />
        
      </View>
    );
  }

export default LyingTricepsExtensionScreen;
