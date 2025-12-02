import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Recipe App</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={require('../assets/hero.jpg')} style={styles.hero} />
      <View style={styles.backgroundFilter}></View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    flexShrink: 1,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  titleWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#f8f8f8ff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#15151566',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'rgba(118, 117, 117, 0.88)',
    borderWidth: 1,
  },
  buttonText: {
    color: '#f8f8f8ff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    resizeMode: 'cover',
    zIndex: -1,
  },
  backgroundFilter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#2626267a',
    zIndex: -1,
  },
});
