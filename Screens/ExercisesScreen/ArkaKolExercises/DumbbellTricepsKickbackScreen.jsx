import React from 'react';
import { View, Text,Button, } from 'react-native';

function DumbbellTricepsKickbackScreen({ navigation }) {
    return (
      <View>
        <Text>Dumbbell Triceps Kickback</Text>
        <Button
          title="Arka Kol Egzersizine Git"
          onPress={() => navigation.navigate('Arka Kol')}
        />
        
      </View>
    );
  }

export default DumbbellTricepsKickbackScreen;
