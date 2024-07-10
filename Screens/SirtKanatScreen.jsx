import React from 'react';
import { View, Text,Button, TouchableOpacity,StyleSheet } from 'react-native';


function SirtKanatScreen({ navigation }) {
  return (
    <View style= {StyleSheet.Container}>

      <View style={styles.buttonContainer}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cable Pull Downs')}
      >
        <Text style={styles.buttonText}>Cable Pull Downs</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dumbbell Pullover')}
      >
        <Text style={styles.buttonText}>Dumbbell Pullover</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lat Pull Down')}
      >
        <Text style={styles.buttonText}>Lat Pull Down</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pull Ups')}
      >
        <Text style={styles.buttonText}>Pull Ups</Text>
      </TouchableOpacity>

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
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: '#000000',
    
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  button: {
    width: 100, 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center', 
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
export default SirtKanatScreen;


