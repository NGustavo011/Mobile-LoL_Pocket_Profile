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
    left: 85%;
    top: 0px;
`

export const ButtonLogout = styled(TouchableOpacity)`
`


export const ImageLogout = styled(Image)`
    margin-top: 30px;
`