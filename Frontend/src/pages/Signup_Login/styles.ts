import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, Button, TouchableOpacityProps, TextProps} from 'react-native';

interface ButtonOptionsProps extends TouchableOpacityProps {
    isActive: boolean;
    option: 'Login' | 'SignUp';
}

interface ButtonTextOptionsProps extends TextProps {
    isActive: boolean;
    option: 'Login' | 'SignUp';
}

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

export const SignupLoginWrapper = styled(View)`
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const SignupLoginOptions = styled(View)`
    justify-content: center;
    flex-direction: row;
`

export const ButtonOptions = styled(TouchableOpacity)<ButtonOptionsProps>`
    width: 120px;
    height: 30px;
    background-color: #FECF66;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 20px;

    background-color: ${props => props.isActive ? '#FECF66;' : 'transparent'};
    border: ${props => props.isActive ? '0px' : '1px #FECF66'};
`

export const ButtonOptionsText = styled(Text)<ButtonTextOptionsProps>`
    font-size: 16px;
    align-items: center;
    text-align: center;
    width: 80px;

    color: ${props => props.isActive ? '#0F3548;' : '#FECF66'}; 
`

export const OptionContent = styled(View)`
    align-items: center;
    justify-content: center;
    height: 180px;
`

export const InfoInputView = styled(View)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const InfoInputText = styled(Text)`
    color: #FECF66;
    font-size: 16px;
    align-items: center;
    text-align: center;
    width: 80px;
    margin-top: 15px;
`

export const InfoInput = styled(TextInput)`
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 240px;
    height: 35px;
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 70px;
`;

export const ButtonSignUpLogin = styled(TouchableOpacity)`
    width: 120px;
    height: 60px;
    background-color: #FECF66;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 95px;
    margin-top: 20px;
`

export const ButtonSignUpLoginText = styled(Text)`
    color: #0F3548;
    font-size: 20px;
    align-items: center;
    text-align: center;
    width: 800px;
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