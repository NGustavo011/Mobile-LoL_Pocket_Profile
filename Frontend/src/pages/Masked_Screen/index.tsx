import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import Background from '../../components/Background';
import Logo from '../../components/Logo';

import { AsyncStorage } from 'react-native';
import {firebaseFireStore} from '../../config/firebase'

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
          if(emailLogged!=null){
            console.log(emailLogged);
            const response = await firebaseFireStore.collection('favorites').where('email', '==', emailLogged).get();
            console.log(response.docs[0].data);
            const { favoriteSummoner } = response.docs[0].data();
            console.log(favoriteSummoner);

            if(favoriteSummoner)
            {
              changeSummonerName(favoriteSummoner);
              navigation.navigate("Profile");
            }
            else{
              navigation.navigate("Init");
            }   
          }else{
            navigation.navigate("Signup_Login");
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