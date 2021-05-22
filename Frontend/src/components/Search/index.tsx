import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'


// import { Container } from './styles';

import * as styles from './styles';

const Search: React.FC = () => {
  const navigation = useNavigation();
  const [summonerNameAux, setSummonerNameAux] = useState('');
  const {summonerName, changeSummonerName, newSearch, changeNewSearch, keyBoardShow, changeKeyBoardShow} = useSearchProfile();
  
  const handleNavigateToProfile = () => {
    
    changeSummonerName(summonerNameAux);
    setSummonerNameAux("");
    //navigation.navigate('Init');
    _keyboardDidHide();
    navigation.navigate('Profile');
    
    if(newSearch)
      changeNewSearch(false);
    else 
      changeNewSearch(true);
  }

    useEffect(() => {
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
      //alert("Keyboard Shown");
    };

    const _keyboardDidHide = () => {
      changeKeyBoardShow(false);
      //alert("Keyboard Hidden");
    };
    
    return (
      <>
            <styles.SearchWrapper>
                <styles.Search>
                  <styles.SearchText>Digite o nome do invocador</styles.SearchText>
                  <styles.SearchInput value={summonerNameAux} onChangeText={(text) => setSummonerNameAux(text)} maxLength={16} onSubmitEditing={ Keyboard.dismiss } />
                  <styles.SearchButton onPress={handleNavigateToProfile}>
                    <styles.SearchButtonText>BUSCAR</styles.SearchButtonText>
                  </styles.SearchButton>
                </styles.Search>
            </styles.SearchWrapper>
      </>
    );
  }

export default Search;