import React from 'react';
import { View, Text, Button,  TouchableOpacity,StyleSheet  } from 'react-native';

function OmuzScreen({ navigation }) {
  return (
    <View style= {StyleSheet.Container}>

      <View style={styles.buttonContainer}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Arnold Press')}
      >
        <Text style={styles.buttonText}>Arnold Press</Text>
      </TouchableOpacity> 


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Back Press')}
      >
        <Text style={styles.buttonText}>Back Press</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cable Bent Over Lateral Raise')}
      >
        <Text style={styles.buttonText}>Bent Over Cable Bent Over Lateral Raise</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Bent Over Lateral Raise')}
      >
        <Text style={styles.buttonText}>Bent Over Lateral Raise</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dumbel Front Raises')}
      >
        <Text style={styles.buttonText}>Dumbel Front Raises</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Face Pull')}
      >
        <Text style={styles.buttonText}>Face Pull</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Front Raise')}
      >
        <Text style={styles.buttonText}>Front Raise</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lateral Raise')}
      >
        <Text style={styles.buttonText}>Lateral Raise</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Overhead Press')}
      >
        <Text style={styles.buttonText}>Overhead Press</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Up Right Row')}
      >
        <Text style={styles.buttonText}>Up Right Row</Text>
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




export default OmuzScreen;
