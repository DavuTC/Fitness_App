import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import GogusScreen from './Screens/GogusScreen';
import SirtKanatScreen from './Screens/SirtKanatScreen';
import OnKolScreen from './Screens/OnKolScreen';
import ArkaKolScreen from './Screens/ArkaKolScreen';
import OmuzScreen from './Screens/OmuzScreen';
import KarinScreen from './Screens/KarinScreen';
import BacakScreen from './Screens/BacakScreen';
import KalcaScreen from './Screens/KalcaScreen';
import CardioScreen from './Screens/CardioScreen';
import DiamondPushUpScreen from './Screens/ExercisesScreen/ArkaKolExercises/DiamondPushUpScreen'; 
import CableTricepsPushDownScreen from './Screens/ExercisesScreen/ArkaKolExercises/CableTricepsPushDownScreen';
import CloseGripBenchPressScreen from './Screens/ExercisesScreen/ArkaKolExercises/CloseGripBenchPressScreen';
import ReverseGripPushDownScreen from './Screens/ExercisesScreen/ArkaKolExercises/ReverseGripPushDownScreen';
import DumbbellTricepsKickbackScreen from './Screens/ExercisesScreen/ArkaKolExercises/DumbbellTricepsKickbackScreen';
import LyingTricepsExtensionScreen from './Screens/ExercisesScreen/ArkaKolExercises/LyingTricepsExtensionScreen';
import OverheadTricepsExtensionScreen from './Screens/ExercisesScreen/ArkaKolExercises/OverheadTricepsExtensionScreen';
import TricepsRopePushdownScreen from './Screens/ExercisesScreen/ArkaKolExercises/TricepsRopePushdownScreen';


const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Ana Sayfa' component={HomeScreen}/>
        <Stack.Screen name='Göğüs' component={GogusScreen}/>
        <Stack.Screen name='Sırt Kanat' component={SirtKanatScreen}/>
        <Stack.Screen name='Ön Kol' component={OnKolScreen}/>
        <Stack.Screen name='Arka Kol' component={ArkaKolScreen}/>
        <Stack.Screen name='Omuz' component={OmuzScreen}/>
        <Stack.Screen name='Karın' component={KarinScreen}/>
        <Stack.Screen name='Bacak' component={BacakScreen}/>
        <Stack.Screen name='Kalça' component={KalcaScreen}/>
        <Stack.Screen name='Kardio' component={CardioScreen}/>
        <Stack.Screen name='Diamond Push Up' component={DiamondPushUpScreen}/>
        <Stack.Screen name='Cable Triceps Push Down' component={CableTricepsPushDownScreen}/>
        <Stack.Screen name='Close Grip Bench Press' component={CloseGripBenchPressScreen}/>
        <Stack.Screen name='Reverse Grip Push Down' component={ReverseGripPushDownScreen}/>
        <Stack.Screen name='Dumbbell Triceps Kickback' component={DumbbellTricepsKickbackScreen}/>
        <Stack.Screen name='Lying Triceps Extension' component={LyingTricepsExtensionScreen}/>
        <Stack.Screen name='Overhead Triceps Extension' component={OverheadTricepsExtensionScreen}/>
        <Stack.Screen name='Triceps Rope Pushdown' component={TricepsRopePushdownScreen}/>
        
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;