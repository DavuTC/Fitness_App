import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import GogusScreen from './Screens/GogusScreen';
import SirtKanatScreen from './Screens/SirtKanatScreen';
import OnKolScreen from './Screens/IcKolScreen';
import ArkaKolScreen from './Screens/ArkaKolScreen';
import OmuzScreen from './Screens/OmuzScreen';
import KarinScreen from './Screens/KarinScreen';
import BacakScreen from './Screens/BacakScreen';
import KalcaScreen from './Screens/KalcaScreen';
import CardioScreen from './Screens/CardioScreen';

// Arka Kol Egzersizleri
import DiamondPushUpScreen from './Screens/ExercisesScreen/ArkaKolExercises/DiamondPushUpScreen'; 
import CableTricepsPushDownScreen from './Screens/ExercisesScreen/ArkaKolExercises/CableTricepsPushDownScreen';
import CloseGripBenchPressScreen from './Screens/ExercisesScreen/ArkaKolExercises/CloseGripBenchPressScreen';
import ReverseGripPushDownScreen from './Screens/ExercisesScreen/ArkaKolExercises/ReverseGripPushDownScreen';
import DumbbellTricepsKickbackScreen from './Screens/ExercisesScreen/ArkaKolExercises/DumbbellTricepsKickbackScreen';
import LyingTricepsExtensionScreen from './Screens/ExercisesScreen/ArkaKolExercises/LyingTricepsExtensionScreen';
import OverheadTricepsExtensionScreen from './Screens/ExercisesScreen/ArkaKolExercises/OverheadTricepsExtensionScreen';
import TricepsRopePushdownScreen from './Screens/ExercisesScreen/ArkaKolExercises/TricepsRopePushdownScreen';

// Göğüs Egzersizleri
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

// Omuz Egzersizleri
import ArnoldPressScreen from './Screens/ExercisesScreen/OmuzExercises/ArnoldPressScreen';
import BackPressScreen from './Screens/ExercisesScreen/OmuzExercises/BackPressScreen';
import BentOverLateralRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/BentOverLateralRaiseScreen';
import CableBentOverLateralRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/CableBentOverLateralRaiseScreen';
import DumbelFrontRaisesScreen from './Screens/ExercisesScreen/OmuzExercises/DumbelFrontRaisesScreen';
import FacePullScreen from './Screens/ExercisesScreen/OmuzExercises/FacePullScreen';
import LateralRaiseScreen from './Screens/ExercisesScreen/OmuzExercises/LateralRaiseScreen';
import OverheadPressScreen from './Screens/ExercisesScreen/OmuzExercises/OverheadPressScreen';
import UpRightRowScreen from './Screens/ExercisesScreen/OmuzExercises/UpRightRowScreen';

// Bacak Egzersizleri
import JumpSquatScreen from './Screens/ExercisesScreen/BacakExercises/JumpSquatScreen';
import LyingCurlScreen from './Screens/ExercisesScreen/BacakExercises/LyingCurlScreen';
import StandingCalfRaiseScreen from './Screens/ExercisesScreen/BacakExercises/StandingCalfRaiseScreen';
import SumosquatScreen from './Screens/ExercisesScreen/BacakExercises/SumosquatScreen';
import ThighAdductorScreen from './Screens/ExercisesScreen/BacakExercises/ThighAdductorScreen';

// Kalça Egzersizleri
import CableGluteKickBackScreen from './Screens/ExercisesScreen/KalcaExercises/CableGluteKickBackScreen';
import DeadLiftScreen from './Screens/ExercisesScreen/KalcaExercises/DeadLiftScreen';
import FrogPumpScreen from './Screens/ExercisesScreen/KalcaExercises/FrogPumpScreen';
import HighStepUpScreen from './Screens/ExercisesScreen/KalcaExercises/HighStepUpScreen';
import WalkingLungeScreen from './Screens/ExercisesScreen/KalcaExercises/WalkingLungeScreen';

// İç Kol Egzersizleri
import BarbellBicepsCurlScreen from './Screens/ExercisesScreen/IckolExercises/BarbellBicepsCurlScreen';
import DumbbellConcentrationCurlScreen from './Screens/ExercisesScreen/IckolExercises/DumbbellConcentrationCurlScreen';
import DumbbellHammerCurlScreen from './Screens/ExercisesScreen/IckolExercises/DumbbellHammerCurlScreen';
import DumbbellPreacherCurlScreen from './Screens/ExercisesScreen/IckolExercises/DumbbellPreacherCurlScreen';

// Sırt-Kanat Egzersizleri
import CablePullDownsScreen from './Screens/ExercisesScreen/SirtKanatExercises/CablePullDownsScreen';
import DumbbellPulloverScreen from './Screens/ExercisesScreen/SirtKanatExercises/DumbbellPulloverScreen';
import LatPullDownScreen from './Screens/ExercisesScreen/SirtKanatExercises/LatPullDownScreen';
import PullUpsScreen from './Screens/ExercisesScreen/SirtKanatExercises/PullUpsScreen';

// Karın Egzersizleri
import HangingLegRaiseScreen from './Screens/ExercisesScreen/KarinExercises/HangingLegRaiseScreen';
import PlankScreen from './Screens/ExercisesScreen/KarinExercises/PlankScreen';
import SidePlankScreen from './Screens/ExercisesScreen/KarinExercises/SidePlankScreen';
import WeighedCrunchScreen from './Screens/ExercisesScreen/KarinExercises/WeighedCrunchScreen';

// Kardio Egzersizleri 
import BurpeesScreen from './Screens/ExercisesScreen/CardioExercises/BurpeesScreen';
import JumpingScreen from './Screens/ExercisesScreen/CardioExercises/JumpingScreen';
import JumpingRopeScreen from './Screens/ExercisesScreen/CardioExercises/JumpingRopeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Ana Sayfa' component={HomeScreen} />
          <Stack.Screen name='Göğüs' component={GogusScreen} />
          <Stack.Screen name='Sırt Kanat' component={SirtKanatScreen} />
          <Stack.Screen name='İç Kol' component={OnKolScreen} />
          <Stack.Screen name='Arka Kol' component={ArkaKolScreen} />
          <Stack.Screen name='Omuz' component={OmuzScreen} />
          <Stack.Screen name='Karın' component={KarinScreen} />
          <Stack.Screen name='Bacak' component={BacakScreen} />
          <Stack.Screen name='Kalça' component={KalcaScreen} />
          <Stack.Screen name='Kardio' component={CardioScreen} />
          {/* Arka Kol Egzersizleri */}
          <Stack.Screen name='Diamond Push Up' component={DiamondPushUpScreen} />
          <Stack.Screen name='Cable Triceps Push Down' component={CableTricepsPushDownScreen} />
          <Stack.Screen name='Close Grip Bench Press' component={CloseGripBenchPressScreen} />
          <Stack.Screen name='Reverse Grip Push Down' component={ReverseGripPushDownScreen} />
          <Stack.Screen name='Dumbbell Triceps Kickback' component={DumbbellTricepsKickbackScreen} />
          <Stack.Screen name='Lying Triceps Extension' component={LyingTricepsExtensionScreen} />
          <Stack.Screen name='Overhead Triceps Extension' component={OverheadTricepsExtensionScreen} />
          <Stack.Screen name='Triceps Rope Pushdown' component={TricepsRopePushdownScreen} />
          {/* Göğüs Egzersizleri */}
          <Stack.Screen name='Bench Press' component={BenchPressScreen} />
          <Stack.Screen name='Cable Cross Over' component={CableCrossoverScreen} />
          <Stack.Screen name='Decline Bench Press' component={DeclineBenchPressScreen} />
          <Stack.Screen name='Dumbell Fly' component={DumbellFlyScreen} />
          <Stack.Screen name='Dumbell Press' component={DumbellPressScreen} />
          <Stack.Screen name='Dumbell Pull Over' component={DumbellPullOverScreen} />
          <Stack.Screen name='İncline Bench Press' component={İnclineBenchPressScreen} />
          <Stack.Screen name='Incline Dumbell Press' component={InclineDumbellPressScreen} />
          <Stack.Screen name='Lover Pec Dec Fly' component={LoverPecDecFlyScreen} />
          <Stack.Screen name='Pec Fly Machine' component={PecFlyMachineScreen} />
          {/* Omuz Egzersizleri */}
          <Stack.Screen name='Arnold Press' component={ArnoldPressScreen} />
          <Stack.Screen name='Back Press' component={BackPressScreen} />
          <Stack.Screen name='Cable Bent Over Lateral Raise' component={CableBentOverLateralRaiseScreen} />
          <Stack.Screen name='Bent Over Lateral Raise' component={BentOverLateralRaiseScreen} />
          <Stack.Screen name='Dumbel Front Raises' component={DumbelFrontRaisesScreen} />
          <Stack.Screen name='Face Pull' component={FacePullScreen} />
          <Stack.Screen name='Up Right Row' component={UpRightRowScreen} />
          <Stack.Screen name='Lateral Raise' component={LateralRaiseScreen} />
          <Stack.Screen name='Overhead Press' component={OverheadPressScreen} />
          {/* Bacak Egzersizleri */}
          <Stack.Screen name='Jump Squat' component={JumpSquatScreen} />
          <Stack.Screen name='Lying Curl' component={LyingCurlScreen} />
          <Stack.Screen name='Standing Calf Raise' component={StandingCalfRaiseScreen} />
          <Stack.Screen name='Sumo Squat' component={SumosquatScreen} />
          <Stack.Screen name='Thigh Adductor' component={ThighAdductorScreen} />
          {/* Kalça Egzersizleri */}
          <Stack.Screen name='Cable Glute KickBack' component={CableGluteKickBackScreen} />
          <Stack.Screen name='Dead Lift' component={DeadLiftScreen} />
          <Stack.Screen name='Frog Pump' component={FrogPumpScreen} />
          <Stack.Screen name='High Step Up' component={HighStepUpScreen} />
          <Stack.Screen name='Walking Lunge' component={WalkingLungeScreen} />
          {/* İç Kol Egzersizleri */}
          <Stack.Screen name='Barbell Biceps Curl' component={BarbellBicepsCurlScreen} />
          <Stack.Screen name='Dumbbell Concentration Curl' component={DumbbellConcentrationCurlScreen} />
          <Stack.Screen name='Dumbbell Hammer Curl' component={DumbbellHammerCurlScreen} />
          <Stack.Screen name='Dumbbell Preacher Curl' component={DumbbellPreacherCurlScreen} />
          {/* Sırt-Kanat Egzersizleri */}
          <Stack.Screen name='Cable Pull Downs' component={CablePullDownsScreen} />
          <Stack.Screen name='Dumbbell Pullover' component={DumbbellPulloverScreen} />
          <Stack.Screen name='Lat Pull Down' component={LatPullDownScreen} />
          <Stack.Screen name='Pull Ups' component={PullUpsScreen} />
          {/* Karın Egzersizleri */}
          <Stack.Screen name='Hanging Leg Raise' component={HangingLegRaiseScreen} />
          <Stack.Screen name='Plank' component={PlankScreen} />
          <Stack.Screen name='Side Plank' component={SidePlankScreen} />
          <Stack.Screen name='Weighed Crunch' component={WeighedCrunchScreen} />
          {/* Kardio Egzersizleri */}
          <Stack.Screen name='Burpees' component={BurpeesScreen} />
          <Stack.Screen name='Jumping' component={JumpingScreen} />
          <Stack.Screen name='Jumping Rope' component={JumpingRopeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}

export default App;
