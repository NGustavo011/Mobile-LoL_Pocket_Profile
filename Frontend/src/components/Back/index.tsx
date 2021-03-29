import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import { LinearGradient } from 'expo-linear-gradient';



// import { Container } from './styles';

import * as styles from './styles';

import backButton from '../../assets/BackButton.png';

import AsyncStorage from '@react-native-community/async-storage';

interface BackProps {
    isHomePage?: boolean;
    inProfile?: boolean;
}



const Back = ({ isHomePage, inProfile }: BackProps) => {
  const navigation = useNavigation();
  const {summonerName, changeSummonerName, newSearch, changeNewSearch} = useSearchProfile();

  const isFocused = useIsFocused();

  // useEffect(()=>{
  //   navigation.addListener('beforeRemove', (e) => {
  //     // Prevent default behavior of going back
  //     e.preventDefault();  
  //     console.log("TESTE");
        
  //     if (e.data.action.type === 'GO_BACK') {
  //         e.preventDefault();
  //         console.log(e);
  //         //console.log(e);     
  //         if(e.target?.includes("Profile")) {
  //           console.log(e.target);
  //           verifyFavoriteUser();
  //         } 
  //         else{
  //           navigation.goBack();
  //         }
  //       }
  //   });
  // }, [isFocused])

  const handleNavigateBack = async () => {

    let isFavorite = false;

    try {
      const favoriteSummoner = await AsyncStorage.getItem('favorite');
      if (favoriteSummoner !== null) {
        // We have data!!
        if(favoriteSummoner == summonerName)
          isFavorite = true;
      }
      } catch (error) {
        // Error retrieving data
      }

      if(isHomePage){
        Alert.alert(
          "SAIR",
          "Deseja sair do aplicativo?",
          [
            {
              text: "Não",
              style: "cancel"
            },
            {
              text: "Sim",
              onPress: async() => {
                BackHandler.exitApp();
              }
            },
          ]
        );
      }
      else{
          navigation.goBack();
      }
  }

  BackHandler.addEventListener('hardwareBackPress', function() {
    handleNavigateBack();
    return true;
  });

  return (
    <>
    
        <styles.Wrapper>
            <styles.ButtonBack onPress={handleNavigateBack}>
                <styles.ImageBack source={
                    backButton
                } style={{width: 31.5, height: 30.5}} ></styles.ImageBack>
            </styles.ButtonBack> 
        </styles.Wrapper>

    </>
  );
}

export default Back;