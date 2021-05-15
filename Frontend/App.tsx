import React from 'react';
import { LogBox } from 'react-native';
import Routes from './src/routes';
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return <Routes/>;
}