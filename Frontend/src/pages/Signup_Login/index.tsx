//import React from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import AsyncStorage from '@react-native-community/async-storage';
import {firebaseFireStore} from '../../config/firebase';

import Background from '../../components/Background';
import Back from '../../components/Back';

import Logo from '../../components/Logo';

import {firebaseAuth} from '../../config/firebase';

import api from '../../service/api'



// import { Container } from './styles';

import axios from 'axios';

import * as styles from './styles';

const Signup_Login: React.FC = () => {

  const {keyBoardShow, changeKeyBoardShow, summonerName, changeSummonerName} = useSearchProfile()

  const [option, setOption] = useState('Login');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [secondPass, setSecondPass] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    //verifyLogin();
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
        Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };

  }, []);

  const _keyboardDidShow = () => {
    changeKeyBoardShow(true);
  };

  const _keyboardDidHide = () => {
    changeKeyBoardShow(false);
  };

  const handleNavigateSelectOption = (newOption:string) =>{
    if(newOption != option){
        setEmail("");
        setPass("");
        setSecondPass("");
    }
    setOption(newOption);
  }

  const tryLogin = () =>{
    firebaseAuth.signInWithEmailAndPassword(email, pass).then(userCredential =>{
        const user = userCredential.user;
        console.log("Logado com sucesso");
        setEmail("");
        setPass("");
        setSecondPass("");
        setLogin();

        Alert.alert(
            "SUCESSO",
            "Logado com sucesso",
            [
              {
                text: "OK",
                style: "cancel"
              },
            ]
        );

        verifyInitialScreen();
    }).catch(error =>{
        const errorCode = error.code;
        const errorMessage = error.message;

        Alert.alert(
            "ERRO",
            errorMessage,
            [
              {
                text: "OK",
                style: "cancel"
              },
            ]
          );
    })
  }

  const verifyInitialScreen = async() =>{
    try {
      const response = await firebaseFireStore.collection('favorites').where('email', '==', email.trim()).get();
      const { favoriteSummoner } = response.docs[0].data();
      console.log(favoriteSummoner);  
      if(favoriteSummoner)
      {
        changeSummonerName(favoriteSummoner);
        navigation.navigate("Profile");
        console.log("ENTROU PERFIL");
      }
      else{
        navigation.navigate("Init");
        console.log("ENTROU INIT");
      } 
    } catch (error) {
      // Error retrieving data
      console.log("ERRO: " + error);
    }
} 

  const setLogin = async() =>{
    try {
        
        await AsyncStorage.setItem(
          'email', 
          email
        );
        console.log(`${email} marcado para login automático`);
        //changeFavoriteSummoner(summonerName);
      } catch (error) {
        // Error saving data
        console.log(error);
        console.log("Erro ao marcar usuário como favorito");
      }
  }

  const trySignUp = async() =>{
    
    firebaseAuth.createUserWithEmailAndPassword(email, pass).then(userCredential =>{
        const user = userCredential.user;
        setEmail("");
        setPass("");
        setSecondPass("");

        const response = firebaseFireStore.collection('favorites').add({
          email: email,
          favoriteSummoner: ""
        });
        console.log("Registro adicionado");

        Alert.alert(
            "SUCESSO",
            "Conta criada com sucesso",
            [
              {
                text: "OK",
                style: "cancel"
              },
            ]
        );
    }).catch(error =>{
        const errorMessage = error.message;
        
        Alert.alert(
            "ERRO",
            errorMessage,
            [
              {
                text: "OK",
                style: "cancel"
              },
            ]
          );
          return;
    })
  }

  return (
    <>
      <Background>
        <styles.Wrapper>
        <Back isHomePage={true}/>
          <styles.Container>
          {!keyBoardShow &&( 
            <Logo />
          )}
            <styles.SignupLoginWrapper>
                     
                <styles.SignupLoginOptions>
                    <styles.ButtonOptions onPress={()=> handleNavigateSelectOption("Login")} isActive={option==="Login"? true:false} option="Login">
                        <styles.ButtonOptionsText isActive={option==="Login"? true:false} option="Login">LOGIN</styles.ButtonOptionsText>
                    </styles.ButtonOptions>

                    <styles.ButtonOptions onPress={()=> handleNavigateSelectOption("SignUp")} isActive={option==="SignUp"? true:false} option="SignUp">
                        <styles.ButtonOptionsText isActive={option==="SignUp"? true:false} option="SignUp">SIGN UP</styles.ButtonOptionsText>
                    </styles.ButtonOptions>

                </styles.SignupLoginOptions>
                   
                <styles.OptionContent>
                    {option==="Login"?(
                        <>
                            <styles.InfoInputView>
                                <styles.InfoInputText>Email</styles.InfoInputText>
                                <styles.InfoInput value={email} onChangeText={(text) => setEmail(text)} maxLength={30} onSubmitEditing={ Keyboard.dismiss } />
                            </styles.InfoInputView>

                            <styles.InfoInputView>
                                <styles.InfoInputText>Senha</styles.InfoInputText>
                                <styles.InfoInput value={pass} onChangeText={(text) => setPass(text)} maxLength={16} onSubmitEditing={ Keyboard.dismiss } secureTextEntry={true}/>
                            </styles.InfoInputView>
                        </>
                    ):(
                        <>
                            <styles.InfoInputView>
                                <styles.InfoInputText>Email</styles.InfoInputText>
                                <styles.InfoInput value={email} onChangeText={(text) => setEmail(text)} maxLength={30} onSubmitEditing={ Keyboard.dismiss } />
                            </styles.InfoInputView>

                            <styles.InfoInputView>
                                <styles.InfoInputText>Senha</styles.InfoInputText>
                                <styles.InfoInput value={pass} onChangeText={(text) => setPass(text)} maxLength={16} onSubmitEditing={ Keyboard.dismiss } secureTextEntry={true}/>
                            </styles.InfoInputView>

                            <styles.InfoInputView>
                                <styles.InfoInputText>Confirmar Senha</styles.InfoInputText>
                                <styles.InfoInput value={secondPass} onChangeText={(text) => setSecondPass(text)} maxLength={16} onSubmitEditing={ Keyboard.dismiss } secureTextEntry={true}/>
                            </styles.InfoInputView>

                        </>
                    )}
                </styles.OptionContent> 
               
                {!keyBoardShow &&(
                    <>
                        {option==="Login"?(
                            <>
                                <styles.ButtonSignUpLogin>
                                        <styles.ButtonSignUpLoginText onPress={tryLogin}>LOGIN</styles.ButtonSignUpLoginText>
                                </styles.ButtonSignUpLogin>
                            </>
                        ):(<>
                                <styles.ButtonSignUpLogin>
                                        <styles.ButtonSignUpLoginText onPress={trySignUp}>SIGN UP</styles.ButtonSignUpLoginText>
                                </styles.ButtonSignUpLogin>
                        </>)}
                    </>
                )}

            </styles.SignupLoginWrapper>
          </styles.Container>
          </styles.Wrapper>
        </Background>

    </>
  );
}

export default Signup_Login;