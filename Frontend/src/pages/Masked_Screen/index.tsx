import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import * as styles from './styles';
  


const Masked_Screen = () => {
  const navigation = useNavigation();
  const [logged, setLogged] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    verifyInitialScreen();
  }, []);


  const verifyInitialScreen = async() =>{
      try {
        const emailLogged = await AsyncStorage.getItem('email');
        console.log(`${emailLogged} já logado`);
        setLogged(true);

        try {
          const favoriteSummoner = await AsyncStorage.getItem('favorite');
          console.log(`${favoriteSummoner} já definido como favorito`);
          setFavorite(true);
          } catch (error) {
          // Error retrieving data
        }

        if(emailLogged!=null){
          if(favorite!=null)
          {
            navigation.navigate("Profile");
            console.log("ENTROU PERFIL");
          }
          else{
            navigation.navigate("Init");
            console.log("ENTROU INIT");
          }
            
        }else{
          navigation.navigate("Signup_Login");
          console.log("ENTROU EMAIL")
        }

        } catch (error) {
        // Error saving data
        console.log("Nenhuma pessoa logada");
      }  
  } 
  

  return (
    <>
      <styles.Wrapper>
      </styles.Wrapper>
    </>
  );
}

export default Masked_Screen;