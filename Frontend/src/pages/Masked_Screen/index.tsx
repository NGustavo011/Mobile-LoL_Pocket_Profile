import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import Background from '../../components/Background';
import Logo from '../../components/Logo';

import { AsyncStorage } from 'react-native';
import {firebaseFireStore} from '../../config/firebase'

import * as Notifications from 'expo-notifications';

import * as styles from './styles';
  


const Masked_Screen = () => {
  const navigation = useNavigation();
  const {summonerName, changeSummonerName} = useSearchProfile();

  useEffect(() => {
    verifyInitialScreen();
  }, []);

  const verifyNotification = () =>{
    Notifications.setNotificationHandler({
      handleNotification: async() =>({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
      })
    })
  }

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
              notification("Como vai o progresso?", `É sempre bom verificar como os invocadores estão se saindo. Fique de olho em ${favoriteSummoner} e outros jogadores do servidor.`);
              changeSummonerName(favoriteSummoner);
              navigation.navigate("Profile");
            }
            else{
              notification("Nenhum invocador favorito ainda?", `Selecione um invocador como favorito através do botão de estrela e acompanhe seu progresso de nível e de maestria.`);
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
  
  const notification = async(title:string, body:string) => {
    verifyNotification();
    await Notifications.cancelAllScheduledNotificationsAsync();
    const notificationId = await Notifications.scheduleNotificationAsync(
      {
        content: {
          title: title,
          body: body,
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
        },
        trigger: {
          seconds: 30
        }
      }
    )
    console.log(notificationId);
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