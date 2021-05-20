import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

export const SearchWrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin-bottom: 10%;  
    /* margin-bottom: 25px; */
`

export const Search = styled(View)`
    align-items: center;
    justify-content: center;
    
`

export const SearchText = styled(Text)`
    color: #FCE8BB;
    font-size: 18px;
    text-align: center;
    justify-content: center;
    width: 400px;
    position: absolute;
    top: -10px;
    
`

export const SearchInput = styled(TextInput)`
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 35px;
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 70px;
`;

export const SearchButton = styled(TouchableOpacity)`
    background: #FECF66;
    border-radius: 70px;
    padding: 5.5px;
    justify-content:center;
    align-items:center;
    flex-direction: row;
    margin: 0px;
    background: #FECF66;
    position: absolute;
    top: 20px;
    left: 165px;
    
`

export const SearchButtonText = styled(Text)`
    color: #000000;
    font-size: 18px;
    text-align: center;
    align-items: center;
    padding: 0;
    margin:0;
`