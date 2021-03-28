

import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'

import { LinearGradient } from 'expo-linear-gradient';


// import { Container } from './styles';

import * as styles from './styles';

import logo from '../../assets/Logo.png';

const Logo: React.FC = () => {
  const navigation = useNavigation();
  const {summonerName, changeSummonerName} = useSearchProfile();
  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  }

  return (
    <>
    
        <styles.Wrapper>
        <styles.Logo source={
              logo
            } style={{width: 179, height:154}}
            ></styles.Logo>
        </styles.Wrapper>

    </>
  );
}

export default Logo;