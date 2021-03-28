import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar} from 'react-native';

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
    width: 85%;
    max-width: 300px;
`;

export const MasteryWrapper = styled(View)`
    justify-content: center;
    flex: 1;
`

export const ScrollV = styled(ScrollView)`
    margin-top: 15px;
    margin-bottom: 15px;
    max-height: 300px;
`

export const MasteryContent = styled(View)`
    align-items: center;
    justify-content: center;
`

export const TextMastery = styled(Text)`
    color: #FECF66;
    font-size: 16px;
    align-items: center;
    text-align: center;
    width: 300px;
    margin-top: 15px;
    margin-bottom: 20px;
`

export const ViewChampions = styled(View)`
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
`

export const ImageChampion = styled(Image)`
    margin-top:20px;
`

export const ViewChampionsDetail = styled(View)`
    align-items: center;
    width: 175px;
`

export const TextName = styled(Text)`
    color: #FECF66;
    font-size: 16px;
    align-items: center;
    text-align: center;
    width: 800px;
    margin-top: 15px;
`

export const TextLevel = styled(Text)`
    color: #FECF66;
    font-size: 16px;
    align-items: center;
    text-align: center;
    width: 220px;
    margin-top: 15px;
`

export const TextPoints = styled(Text)`
    color: #FECF66;
    font-size: 16px;
    align-items: center;
    text-align: center;
    width: 220px;
    margin-top: 15px;
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