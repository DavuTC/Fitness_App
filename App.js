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
import BenchPressScreen from './Screens/ExercisesScreen/GogusExercises/BenchPressScreen';
import CableCrossoverScreen from './Screens/ExercisesScreen/GogusExercises/CableCrossoverScreen';
import DeclineBenchPressScreen from './Screens/ExercisesScreen/GogusExercises/DeclineBenchPressScreen';
import DumbellFlyScreen from './Screens/ExercisesScreen/GogusExercises/DumbellFlyScreen';
import DumbellPressScreen from './Screens/ExercisesScreen/GogusExercises/DumbellPressScreen';
import DumbellPullOverScreen from './Screens/ExercisesScreen/GogusExercises/DumbellPullOverScreen';
import İnclineBenchPressScreen from './Screens/ExercisesScreen/GogusExercises/İnclineBenchPressScreen';
import InclineDumbellPressScreen from './Screens/ExercisesScreen/GogusExercises/InclineDumbellPressScreen';
import LoverPecDecFlyScreen from './Screens/ExercisesScreen/GogusExercises/LoverPecDecFlyScreen';
import PecFlyMachineScreen from './Screens/ExercisesScreen/GogusExercises/PecFlyMachineScreen';
import ArnoldPressScreen from './Screens/ExercisesScreen/OmuzExercises/ArnoldPressScreen';
import BackPressScreen from './Screens/ExercisesScreen/OmuzExercises/BackPressScreen';
import BentOverLateralRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/BentOverLateralRaiseScreen';
import CableBentOverLateralRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/CableBentOverLateralRaiseScreen';
import DumbelFrontRaisesScreen from './Screens/ExercisesScreen/OmuzExercises/DumbelFrontRaisesScreen';
import FacePullScreen from './Screens/ExercisesScreen/OmuzExercises/FacePullScreen';
import FrontRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/FrontRaiseScreen';
import LateralRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/LateralRaiseScreen';
import OverheadPressScreen from './Screens/ExercisesScreen/OmuzExercises/OverheadPressScreen';
import UpRightRowScreen from './Screens/ExercisesScreen/OmuzExercises/UpRightRowScreen';


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
        <Stack.Screen name='Bench Press' component={BenchPressScreen}/>
        <Stack.Screen name='Cable Cross Over' component={CableCrossoverScreen}/>
        <Stack.Screen name='Decline Bench Press' component={DeclineBenchPressScreen}/>
        <Stack.Screen name='Dumbell Fly' component={DumbellFlyScreen}/>
        <Stack.Screen name='Dumbell Press' component={DumbellPressScreen}/>
        <Stack.Screen name='Dumbell Pull Over' component={DumbellPullOverScreen}/>
        <Stack.Screen name='İncline Bench Press' component={İnclineBenchPressScreen}/>
        <Stack.Screen name='Incline Dumbell Press' component={InclineDumbellPressScreen}/>
        <Stack.Screen name='Lover Pec Dec Fly' component={LoverPecDecFlyScreen}/>
        <Stack.Screen name='Pec Fly Machine' component={PecFlyMachineScreen}/>
        <Stack.Screen name='Arnold Press' component={ArnoldPressScreen}/>
        <Stack.Screen name='Back Press' component={BackPressScreen}/>
        <Stack.Screen name='Cable Bent Over Lateral Raise' component={CableBentOverLateralRaiseScreen}/>
        <Stack.Screen name='Bent Over Lateral Raise' component={BentOverLateralRaiseScreen}/>
        <Stack.Screen name='Dumbel Front Raises' component={DumbelFrontRaisesScreen}/>
        <Stack.Screen name='Face Pull' component={FacePullScreen}/>
        <Stack.Screen name='Front Raise' component={FrontRaiseScreen}/>
        <Stack.Screen name='Lateral Raise' component={LateralRaiseScreen}/>
        <Stack.Screen name='Overhead Press' component={OverheadPressScreen}/>
        <Stack.Screen name='Up Right Row' component={UpRightRowScreen}/>
        
        
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;