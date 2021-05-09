import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as styles from './styles';

import backButton from '../../assets/BackButton.png';

import AsyncStorage from '@react-native-community/async-storage';
const LogOut: React.FC = () => {
// const LogOut = () => {
  const navigation = useNavigation();

  const handleNavigateLogOut = () => {
    Alert.alert(
      "DESLOGAR",
      "Deseja deslogar?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: async() => {
            logOut();
          }
        },
      ]
    );
  }

  const logOut = async() =>{
    try {
      await AsyncStorage.removeItem(
        'email'
      );

      console.log("Deslogado com sucesso");
      navigation.navigate("Signup_Login");

    } catch (error) {
      // Error saving data
      console.log("Erro ao deslogar");
    }
  }

  return (
    <>
        <styles.Wrapper>
            <styles.ButtonLogout onPress={handleNavigateLogOut}>
                <styles.ImageLogout source={
                    backButton
                } style={{width: 31.5, height: 30.5}} ></styles.ImageLogout>
            </styles.ButtonLogout> 
        </styles.Wrapper>
    </>
  );
}

export default LogOut;