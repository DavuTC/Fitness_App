import React from 'react';
import { View, Text, Button } from 'react-native';

function CardioScreen({ navigation }) {
  return (
    <View>
      <Text>Menü Sayfası</Text>
      <Button
        title="Ana Sayfa'ya Git"
        onPress={() => navigation.navigate('Ana Sayfa')}
      />
      {/* Diğer menü öğeleri ve yönlendirmeleri */}
    </View>
  );
}

export default CardioScreen;
