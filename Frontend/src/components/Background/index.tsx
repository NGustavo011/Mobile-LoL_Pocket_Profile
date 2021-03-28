import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  children: React.ReactElement;
}

export function Background({ children }: Props) {
  return (
    <LinearGradient
      colors={['#0F3548', '#5C8498']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{
        flex: 1,
      }}>
      {children}
    </LinearGradient>
  );
}

export default Background;