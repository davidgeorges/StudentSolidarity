import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Pages/SplashScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChooseAccount from './Pages/ChooseAccount';
import DonorDescription from './Pages/DonorDescription';
import UploadCard from './Pages/UploadCard';
import SetLocation from './Pages/SetLocation';
import SuccessRegister from './Pages/SuccessRegister';
import FailedRegister from './Pages/FailedRegister';

const Stack = createNativeStackNavigator();

const AuthScreen = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
      <Stack.Screen name="DonorDescription" component={DonorDescription} />
      <Stack.Screen name="UploadCard" component={UploadCard} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="SuccessRegister" component={SuccessRegister} />
      <Stack.Screen name="FailedRegister" component={FailedRegister} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }} >
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};





export default App;
