import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import AsyncStorage from '@react-native-community/async-storage';

import { LinearGradient } from 'expo-linear-gradient';

//import background from '../../assets/Background.png';

import Background from '../../components/Background';
import Back from '../../components/Back';
import Search from '../../components/Search';
import Logo from '../../components/Logo';
// import { Container } from './styles';

import * as styles from './styles';
import axios from 'axios';

const Init = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { keyBoardShow, changeKeyBoardShow } = useSearchProfile();  

  return (
    <>
      <Background>
        <styles.Wrapper>
          <Back isHomePage={true}/>
          <styles.Container>
          {!keyBoardShow &&(
              <>
                
                <Logo />
                <styles.TextWrapper>
                  <styles.CenterText>NÃO EXISTE PERFIL DESIGNADO COMO FAVORITO EM SEU APARELHO.</styles.CenterText>
                </styles.TextWrapper>
              </>  
            )}
            <Search />
          </styles.Container> 
          </styles.Wrapper>
        </Background>

    </>
  );
}

export default Init;