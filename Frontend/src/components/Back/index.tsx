import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  //const isFocused = useIsFocused();

  useEffect(()=>{
    const backHandler = BackHandler.addEventListener('hardwareBackPress', function() {
      handleNavigateBack();
      return true;
    });

    
    return ()=>backHandler.remove();

  },[BackHandler, isHomePage])

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
      console.log(isHomePage);
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
        if(inProfile)
          verifyFavoriteUser();
        else
          navigation.goBack();
      }
  }

  const verifyFavoriteUser = async() =>{
    let isFavorite = false;

    try {
      const favoriteSummoner = await AsyncStorage.getItem('favorite');
        if (favoriteSummoner !== null) {
          // We have data!!
          console.log("ENTROU TOTAL");
          changeSummonerName(favoriteSummoner);
          //navigation.navigate('Profile');
        }else{
          navigation.goBack();
        }
      } catch (error) {
        // Error retrieving data
      }
      
  }

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