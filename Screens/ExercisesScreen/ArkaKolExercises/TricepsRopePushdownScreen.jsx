import React from 'react';
import { View, Text,Button, } from 'react-native';

function TricepsRopePushdownScreen({ navigation }) {
    return (
      <View>
        <Text>Triceps Rope Pushdown</Text>
        <Button
          title="Arka Kol Egzersizine Git"
          onPress={() => navigation.navigate('Arka Kol')}
        />
        
      </View>
    );
  }

export default TricepsRopePushdownScreen;
