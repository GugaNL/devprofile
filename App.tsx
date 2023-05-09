import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/styles/theme';
// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_700Bold,
// } from '@expo-google-fonts/roboto';
//import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';

const App = () => {
  // const [fontsLoader] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_700Bold,
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoader) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoader]);

  // if (!fontsLoader) {
  //   return null;
  // }

  // if (!fontsLoader) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
