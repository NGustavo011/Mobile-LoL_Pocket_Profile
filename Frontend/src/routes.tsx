import React, {useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup_Login from './pages/Signup_Login';
import Init from './pages/Init';
import Profile from './pages/Profile';
import Mastery from './pages/Mastery';
import Masked_Screen from './pages/Masked_Screen';

import {useSearchProfile} from './hooks/SearchProfile'

import { SearchProfileProvider } from './hooks/SearchProfile'
import { MasteryProvider } from './hooks/Mastery'

const { Navigator, Screen } = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';

const Routes: React.FC = () => {

  const { favoriteSummoner, changeFavoriteSummoner } = useSearchProfile();

  const [favoriteExist, setFavoriteExist] = useState(false);
  // const [initialPage, setInitialPage] = useState('');
  
//   useEffect(()=>{
//     verifyInitialScreen();
//   }, []);

//   const verifyInitialScreen = async() =>{
//     try {
//       const emailLogged = await AsyncStorage.getItem('email');

//       try {
//         const favoriteSummoner = await AsyncStorage.getItem('favorite');
//         } catch (error) {
//         // Error retrieving data
//       }

//       if(emailLogged!=null){
//         if(favoriteSummoner!=null){
//           console.log("ENTROU PERFIL");
//           setInitialPage("Profile");
//         }
//         else{
//           console.log("ENTROU INIT");
//           setInitialPage("Init");
//         }
          
//       }else{
//         console.log("ENTROU EMAIL");
//         setInitialPage("Signup_Login");
//       }

//       } catch (error) {
//       // Error saving data
//       console.log("Nenhuma pessoa logada");
//     }  
// } 

  return (
    <MasteryProvider>
      <SearchProfileProvider>
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown : false }}>
            <Screen name = "Masked_Screen" component = {Masked_Screen} />
            <Screen name = "Signup_Login" component = {Signup_Login} />
            <Screen name="Init" component={ Init } />
            <Screen name="Profile" component={ Profile } />
            <Screen name="Mastery" component={ Mastery } />
          </Navigator>
        </NavigationContainer>
      </SearchProfileProvider>
    </MasteryProvider>
  );
}

export default Routes;