import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';

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
`;

export const TextWrapper = styled(View)`
    justify-content: center;
    flex: 1;
`

export const CenterText = styled(Text)`
    color: #FECF66;
    font-size: 24px;
    text-align: center;
    width: 220px;
`


