import React from 'react';
import styled from 'styled-components/native';
import { View, ViewProps,Text, TouchableOpacity, Image, ScrollView, ImageBackground, Button} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

export const Wrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    position: relative;
    flex: 1;
`;
export const Container = styled(View)`
    align-items: center;
    justify-content: center;
    height: 100%;
    width:100%;
    max-width: 400px;
`;

export const ProfileWrapper = styled(View)`
    justify-content: center;
    flex: 1;
    
`

export const ProfileContent = styled(View)`
    align-items: center;
    justify-content: center;
`

export const TextName = styled(Text)`
    color: #FECF66;
    font-size: 24px;
    align-items: center;
    text-align: center;
    width: 800px;
    margin-top: 15px;
`

export const TextLevel = styled(Text)`
    color: #FECF66;
    font-size: 24px;
    align-items: center;
    text-align: center;
    width: 220px;
    margin-top: 15px;
`
export const ImagesWrapper = styled(View)`
    flex-direction: row;
`
export const ImageIcon = styled(Image)`
    margin-right: 15px;
`

export const ButtonFavorite = styled(TouchableOpacity)`
`

export const ImageFavorite = styled(Image)`
    margin-top: 30px;
    margin-left: 15px;
`

export const ButtonMastery = styled(TouchableOpacity)`
    width: 120px;
    height: 61px;
    background-color: #FECF66;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 95px;
    margin-top: 20px;
`

export const ButtonMasteryText = styled(Text)`
    color: #0F3548;
    font-size: 18px;
`

export const NotFoundContent = styled(View)`
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const ImageNotFound = styled(Image)`
`

export const TextNotFound = styled(Text)`
    color: #FECF66;
    font-size: 24px;
    align-items: center;
    text-align: center;
    width: 220px;
`

export const ScrollV = styled(ScrollView)`
    margin-top: 15px;
    margin-bottom: 15px;
    max-height: 300px;    
`