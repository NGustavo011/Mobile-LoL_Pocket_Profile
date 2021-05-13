import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import Background from '../../components/Background';
import Logo from '../../components/Logo';

import AsyncStorage from '@react-native-community/async-storage';

import * as styles from './styles';
  


const Masked_Screen = () => {
  const navigation = useNavigation();
  const {summonerName, changeSummonerName} = useSearchProfile();

  useEffect(() => {
    verifyInitialScreen();
  }, []);


  const verifyInitialScreen = async() =>{
      try {
        const emailLogged = await AsyncStorage.getItem('email');

        try {
          const favoriteSummoner = await AsyncStorage.getItem('favorite');
          if(emailLogged!=null){
            if(favoriteSummoner!=null)
            {
              changeSummonerName(favoriteSummoner);
              navigation.navigate("Profile");
              console.log("ENTROU PERFIL");
            }
            else{
              navigation.navigate("Init");
              console.log("ENTROU INIT");
            }
              
          }else{
            navigation.navigate("Signup_Login");
            console.log("ENTROU EMAIL");
          }
  
        } catch (error) {
          // Error saving data
        }  
      } catch (error) {
        // Error retrieving data
      }
  } 
  

  return (
    <>
      <Background>
        <styles.Wrapper>
          <Logo />
        </styles.Wrapper>
      </Background>
    </>
  );
}

export default Masked_Screen;