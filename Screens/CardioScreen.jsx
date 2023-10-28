import React from 'react';
import { View, Text,Button, TouchableOpacity,StyleSheet } from 'react-native';


function CardioScreen({ navigation }) {
  return (
    <View style= {StyleSheet.Container}>

      <View style={styles.buttonContainer}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Burpees')}
      >
        <Text style={styles.buttonText}>Burpees</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Jumping')}
      >
        <Text style={styles.buttonText}>Jumping</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Jumping Rope')}
      >
        <Text style={styles.buttonText}>Jumping Rope</Text>
      </TouchableOpacity>
     
      
      
      {/* Diğer menü öğeleri ve yönlendirmeleri */}
      </View>
      <Button
        title="Ana Sayfa'ya Git"
        onPress={() => navigation.navigate('Ana Sayfa')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Öğeleri dikey olarak ortalar
    padding: 16, // Yastıklama
    backgroundColor: '#000000',
    
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  button: {
    width: 100, // Genişlik
    height: 100, // Yükseklik
    justifyContent: 'center',
    alignItems: 'center', // Öğeleri dikey olarak ortalar
    margin: 10,
    backgroundColor: '#BB994A',
    
    borderRadius: 10,
    marginBottom: 10,  
  },


  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#BB994A',
  },


  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default CardioScreen;
