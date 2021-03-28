//import React from 'react';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert,  } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'
import {useMastery} from '../../hooks/Mastery'

import favorite from '../../assets/Favorite.png';
import favoriteFilled from '../../assets/Favorite_Filled.png';
import notFound from '../../assets/NotFound.png';

import Background from '../../components/Background';
import Back from '../../components/Back';
import Search from '../../components/Search';
import Logo from '../../components/Logo';

import api from '../../service/api'

import AsyncStorage from '@react-native-community/async-storage';

import axios from 'axios';

import * as styles from './styles';

const Profile: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const isFocused = useIsFocused();

  const linkBaseIcon = "http://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/";
  const [linkFinalIcon, setLinkFinalIcon] = useState('');

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [icon, setIcon] = useState('');

  const [errorSearch, setErrorSearch] = useState(false);

  const navigation = useNavigation();
  const {summonerID, changeSummonerID} = useMastery();
  const {summonerName, changeSummonerName, newSearch, changeNewSearch, keyBoardShow, changeKeyBoardShow, favoriteSummoner, changeFavoriteSummoner } = useSearchProfile();
  
  const handleNavigateToMastery = () => {
    navigation.navigate('Mastery');
  }

  const handleNavigateMarkFavorite = async() =>{
   
  }

  useEffect(() => {
    setLinkFinalIcon("");
    summonerInfos();
    
  }, [newSearch, summonerName])

  const verifyIsFavorite = async(summonerNameAux:any) =>{
    setIsFavorite(false);

    try {
      const favoriteSummoner = await AsyncStorage.getItem('favorite');
      if (favoriteSummoner !== null) {
        // We have data!!
        console.log(favoriteSummoner + " " + summonerNameAux)
        if(favoriteSummoner == summonerNameAux)
          setIsFavorite(true);
      }
      } catch (error) {
        // Error retrieving data
      }
  }

  const summonerInfos = () =>{
    setLoading(true);
    setErrorSearch(false);
    
    if(summonerName === ""){
      setErrorSearch(true);
      setLoading(false);
      return;
    }

    if(summonerName){
      const summonerNameFormated = summonerName.toLowerCase().replace(" ", "");
      //axios.get(`http://localhost:3333/profile/${summonerName}`).then((response) =>{
      api.get(`profile/${summonerNameFormated}`).then((response) =>{  
        setName(response.data.name);
        changeSummonerName(response.data.name);
        setLevel(response.data.summonerLevel);
        setIcon(response.data.profileIconId);
        changeSummonerID(response.data.id);

        setLinkFinalIcon(linkBaseIcon+response.data.profileIconId+".png");

        verifyIsFavorite(response.data.name);
      }).catch((error) =>{
        setErrorSearch(true);
      }).finally(()=>{
        setLoading(false);
      });
    }
  }

  return (
    <>
      <Background>
        <styles.Wrapper>
          <Back isHomePage={isFavorite} inProfile={true}/>
          <styles.Container>
            {!keyBoardShow &&(
              <>
                <Logo />
                <styles.ProfileWrapper>
                  {loading&&(
                    <ActivityIndicator size="large" color="#FECF66" />
                  )}
                  {errorSearch &&(
                    <styles.NotFoundContent>
                      <styles.ImageNotFound source={
                        notFound
                      } style={{width: 150, height: 150}}></styles.ImageNotFound>
                      <styles.TextNotFound>INVOCADOR NÃO ENCONTRADO.</styles.TextNotFound>
                    </styles.NotFoundContent>
                  )}
                  {linkFinalIcon.length>0 &&(
                    <styles.ProfileContent>
                    <styles.ImagesWrapper>
                      <styles.ImageIcon source={
                        {uri: linkFinalIcon}
                      } style={{width: 100, height:100}}></styles.ImageIcon>
                    
                      {!isFavorite ?(
                        <>
                          <styles.ButtonFavorite onPress={handleNavigateMarkFavorite}>
                            <styles.ImageFavorite source={
                                favorite
                              } style={{width: 50, height: 50}} ></styles.ImageFavorite>
                          </styles.ButtonFavorite>
                        </>
                      ):
                        <>
                          <styles.ButtonFavorite onPress={handleNavigateMarkFavorite}>
                            <styles.ImageFavorite source={
                                favoriteFilled
                              } style={{width: 50, height: 50}} ></styles.ImageFavorite>
                          </styles.ButtonFavorite>
                        </>
                      }
                      
                      
                    </styles.ImagesWrapper>
                    <styles.TextName>Nome: {name}</styles.TextName>
                    <styles.TextLevel>Level: {level}</styles.TextLevel>
                    <styles.ButtonMastery onPress={handleNavigateToMastery}>
                
                    <styles.ButtonMasteryText>MAESTRIAS</styles.ButtonMasteryText>
                    </styles.ButtonMastery>
                    </styles.ProfileContent>
                  )}
                </styles.ProfileWrapper>
              </>
            )}

              {(linkFinalIcon.length>0 || errorSearch === true) &&(
                  <Search />
              )}               
            </styles.Container>
          </styles.Wrapper>
        </Background>
    </>
  );
}

export default Profile;