import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';



function HomeScreen({ navigation }) {
  return (
   
    
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Arka Kol')}
      >
        <Text style={styles.buttonText}>Arka Kol</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Bacak')}
      >
        <Text style={styles.buttonText}>Bacak</Text>
      </TouchableOpacity>
      
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Kardio')}
      >
        <Text style={styles.buttonText}>Kardio</Text>
      </TouchableOpacity>
      
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Göğüs')}
      >
        <Text style={styles.buttonText}>Göğüs</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Kalca')}
      >
        <Text style={styles.buttonText}>Kalça</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Karın')}
      >
        <Text style={styles.buttonText}>Karın</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Omuz')}
      >
        <Text style={styles.buttonText}>Omuz</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ic Kol')}
      >
        <Text style={styles.buttonText}>Ön Kol</Text>
      </TouchableOpacity>  

      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sırt Kanat')}
      >
        <Text style={styles.buttonText}>Sırt-Kanat</Text>
      </TouchableOpacity>
      </View>
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

  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', // Resmi boyutlandırma modu
  },
  // Diğer stil özellikleri burada tanımlanabilir
});


export default HomeScreen;
