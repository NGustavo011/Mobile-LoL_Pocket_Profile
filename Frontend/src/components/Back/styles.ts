import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';

export const Wrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin-top: 5px;
    position: absolute;
    left: 0px;
    top: 0px;
`

export const ButtonBack = styled(TouchableOpacity)`
`


export const ImageBack = styled(Image)`
    margin-top: 30px;
    margin-left: 15px;
`