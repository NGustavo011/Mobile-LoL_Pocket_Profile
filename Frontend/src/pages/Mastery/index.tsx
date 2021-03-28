//import React from 'react';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useSearchProfile} from '../../hooks/SearchProfile'
import {useMastery} from '../../hooks/Mastery'

import notFound from '../../assets/NotFound.png';

import Background from '../../components/Background';
import Back from '../../components/Back';
import Search from '../../components/Search';
import Logo from '../../components/Logo';

import api from '../../service/api'



// import { Container } from './styles';

import axios from 'axios';

import * as styles from './styles';

const Mastery: React.FC = () => {
  const [ champions, setChampions ] = useState([{}]);
  
  const { data } = require('../../assets/champs.json');

  const [loading, setLoading] = useState(true);

  const linkBaseChampionImage = "http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/";
  const [linkFinalChampionImage, setLinkFinalChampionImage] = useState('');

  const [errorSearch, setErrorSearch] = useState(false);

  const navigation = useNavigation();
  const {summonerID, changeSummonerID} = useMastery();
  const {summonerName, changeSummonerName, newSearch, changeNewSearch} = useSearchProfile();

  useEffect(() => {
    summonerInfos();
  }, [summonerID])

  const summonerInfos = () =>{
    setErrorSearch(false);
    setLoading(true);
    if(summonerID){
      const championsArray = Object.keys(data).map(champ => {
        return data[champ];
      });


      api.get(`mastery/${summonerID}`).then((response) =>{
        const aux = [{}];
        let cont = 0;
        if(response.data.count<10)
          cont = 9-response.data.count;
        response.data.forEach((e:any) => {
          if(cont > 9)
            return;
            
          const champion = championsArray.filter(champ => champ.key == e.championId);
          const championFormated = {
          "id": e.championId,
          "name": champion[0].name,
          "championLevel": e.championLevel,
          "championPoints": e.championPoints,
          "championImage": linkBaseChampionImage+ champion[0].id +".png"
        }
          cont++;
          aux.push(championFormated);
        });
        aux.splice(0, 1);
        console.log(aux);
        setChampions(aux);

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
          <Back />
          <styles.Container>
            <Logo />
            <styles.MasteryWrapper>
              
                  {loading&&(
                    <ActivityIndicator size="large" color="#FECF66" />
                  )}

                  {errorSearch &&(
                    <styles.NotFoundContent>
                      <styles.ImageNotFound source={
                        notFound
                      } style={{width: 150, height: 150}}></styles.ImageNotFound>
                      <styles.TextNotFound>PÁGINA NÃO CARREGADA COM SUCESSO.</styles.TextNotFound>
                    </styles.NotFoundContent>
                  )}

                  {!loading &&(
                    <styles.MasteryContent>
                      
                      <styles.TextMastery>CAMPEÕES COM MAIORES MAESTRIAS DE {summonerName}</styles.TextMastery>
                      
                      <styles.ScrollV>
                        
                      {champions.map((champ:any) => (
                        <styles.ViewChampions key={champ.name}>
                            <styles.ImageChampion source={
                              {uri: champ.championImage}
                            } style={{width: 100, height:100}} ></styles.ImageChampion>

                            <styles.ViewChampionsDetail>
                              <styles.TextName>Nome: {champ.name}</styles.TextName>
                              <styles.TextLevel>Maestria: {champ.championLevel}</styles.TextLevel>
                              <styles.TextPoints>Pontos: {champ.championPoints}</styles.TextPoints>
                            </styles.ViewChampionsDetail>
                          </styles.ViewChampions>
                      ))}
                        
                      </styles.ScrollV>
                      
                    </styles.MasteryContent>
                  )}
                  
            </styles.MasteryWrapper>
          </styles.Container>
          </styles.Wrapper>
        </Background>

    </>
  );
}

export default Mastery;