import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Pages from '../pages';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? `#aaaaaa` : `#ffffff`,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={
          styles.MainWithoutNotch
        }>
        <Pages.Index />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainWithoutNotch: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

export default App;
