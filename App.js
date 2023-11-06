/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

function App() {
  useEffect(() => {
    checkPreviousSession();
  }, []);

  const checkPreviousSession = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      // console.log('REPORT COMING 22222222');
    }
  };

  const doSum = async () => {
    console.log('DO SUYM');
    console.log('DO SUYM22');
    await Analytics.trackEvent('SMD-----', {
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
        style={{backgroundColor: 'red', padding: 30}}>
        <Text style={{color: 'black', fontSize: 56}}>PRESS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  player: {
    backgroundColor: 'white',
    width: '100%',
    height: '30%',
  },
});

export default App;
