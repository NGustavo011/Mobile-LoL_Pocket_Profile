import styled from 'styled-components/native';
import { View, Text } from 'react-native';


export const Wrapper = styled(View)`
    justify-content:center;
    align-items: center;
    flex-direction:column;
    position: relative;
    flex: 1;
`;

export const CenterText = styled(Text)`
    color: #FECF66;
    font-size: 24px;
    text-align: center;
    width: 220px;
`;