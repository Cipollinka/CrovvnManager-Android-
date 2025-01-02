import {WelcomeInGame} from './components/Welcome/Welcome';
import {UserProvider} from './components/Provider/UserProvider';
import {OnBoardGlob} from './components/OnBoard/OnBoard';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';

export default function GameComponent() {

  return (
    <UserProvider>
      <SafeAreaView>
        <View style={styles.bg_image}>
          <Image
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            source={require('./assets/loader2.png')}
            blurRadius={20}
          />
          <View style={{position:'absolute', width:'100%', height: '100%', backgroundColor:'black', opacity:0.7}}/>
          <OnBoardGlob />
        </View>
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
