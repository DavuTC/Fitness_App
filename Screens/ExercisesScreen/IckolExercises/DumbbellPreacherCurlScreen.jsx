import React from 'react';
import { View, Text,Button, StyleSheet, Image, } from 'react-native';

function DumbbellPreacherCurlScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        
        <Image
        source={require('../../../Images/IcKol/DumbbellPreacherCurl.jpg')} // Resmin dosya yolunu projenize göre ayarlayın
        style={{ width: 350, height: 250 }} // Genişlik ve yüksekliği ihtiyaca göre ayarlayın
      />
        </View>
        <Text>Dumbbell PreacherCurl</Text>


        <Button
          title="İç Kol Egzersizine Git"
          onPress={() => navigation.navigate('Ic Kol')}
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
  
    ImageBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover', // Resmi boyutlandırma modu
    },
    // Diğer stil özellikleri burada tanımlanabilir
  });

export default DumbbellPreacherCurlScreen;
