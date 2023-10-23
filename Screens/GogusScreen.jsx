import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

function GogusScreen({ navigation }) {
  return (
    <View style= {StyleSheet.Container}>

      <View style={styles.buttonContainer}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Bench Press')}
      >
        <Text style={styles.buttonText}>Bench Press</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cable Cross Over')}
      >
        <Text style={styles.buttonText}>Cable Cross Over</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Decline Bench Press')}
      >
        <Text style={styles.buttonText}>Decline Bench Press</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dumbell Fly')}
      >
        <Text style={styles.buttonText}>Dumbell Fly</Text>
      </TouchableOpacity>


       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dumbell Press')}
      >
        <Text style={styles.buttonText}>Dumbell Press</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dumbell Pull Over')}
      >
        <Text style={styles.buttonText}>Dumbell Pull Over</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('İncline Bench Press')}
      >
        <Text style={styles.buttonText}>İncline Bench Press</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Incline Dumbell Press')}
      >
        <Text style={styles.buttonText}>Incline Dumbell Press</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lover Pec Dec Fly')}
      >
        <Text style={styles.buttonText}>Lover Pec Dec Fly</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pec Fly Machine')}
      >
        <Text style={styles.buttonText}>Pec Fly Machine</Text>
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


export default GogusScreen;
