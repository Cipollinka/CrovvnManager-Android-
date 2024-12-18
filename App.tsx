import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {WelcomeInGame} from './src/components/Welcome/Welcome.tsx';
import React, {useEffect, useState} from 'react';
import {OnBoardGlob} from './src/components/OnBoard/OnBoard.tsx';
import {UserProvider} from './src/components/Provider/UserProvider.tsx';

function App(): React.JSX.Element {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const welcome = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
    return () => clearTimeout(welcome);
  }, []);

  if (isSplashVisible) {
    return (
      <SafeAreaView>
        <WelcomeInGame />
      </SafeAreaView>
    );
  }

  return (
    <UserProvider>
      <SafeAreaView>
        <ImageBackground
          source={require('./src/assets/image/bg_image.png')}
          style={styles.bg_image}>
          <OnBoardGlob />
        </ImageBackground>
      </SafeAreaView>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  bg_image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;
