import React from 'react';
import { View, Text,Button, TouchableOpacity,StyleSheet } from 'react-native';


function ArkaKolScreen({ navigation }) {
  return (
    <View style= {StyleSheet.Container}>

      <View style={styles.buttonContainer}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Diamond Push Up')}
      >
        <Text style={styles.buttonText}>Diamond Push Up</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cable Triceps Push Down')}
      >
        <Text style={styles.buttonText}>Cable Triceps Push Down</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Close Grip Bench Press')}
      >
        <Text style={styles.buttonText}>Close Grip Bench Press</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Reverse Grip Push Down')}
      >
        <Text style={styles.buttonText}>Reverse Grip Push Down</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dumbbell Triceps Kickback')}
      >
        <Text style={styles.buttonText}>Dumbbell Triceps Kickback</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lying Triceps Extension')}
      >
        <Text style={styles.buttonText}>Lying Triceps Extension</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Overhead Triceps Extension')}
      >
        <Text style={styles.buttonText}>Overhead Triceps Extension</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Triceps Rope Pushdown')}
      >
        <Text style={styles.buttonText}>Triceps Rope Pushdown</Text>
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
export default ArkaKolScreen;
