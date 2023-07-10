/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import codePush from 'react-native-code-push';

function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    checkPreviousSession();
  }, []);

  const checkPreviousSession = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      console.log('REPORT COMING 22222222');
    }
  };

  const doSum = async () => {
    console.log('DO SUYM');
    console.log('DO SUYM22');
    await Analytics.trackEvent('SMD@', {
      Internet: 'Data',
      mobileName: 'Sa,sung',
      product: 'DOne',
      name: 'Done',
      byEndOf6mpnths: 'Done',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={doSum}
        activeOpacity={0.7}
        style={{backgroundColor: '#32a852', padding: 30}}>
        <Text style={{color: 'white', fontSize: 29}}>Press to track</Text>
      </TouchableOpacity>
      <Text style={{color: 'black', fontSize: 16}}>Second OTA UPDATE</Text>
      <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
        Ammar nigga
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    height: '100%',
  },
  player: {
    backgroundColor: 'white',
    width: '100%',
    height: '30%',
  },
});

export default codePush(App);
