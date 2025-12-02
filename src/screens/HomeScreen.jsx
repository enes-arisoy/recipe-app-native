import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import recipes from '../data/recipes';
import RecipeCard from './../components/RecipeCard';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <ScrollView>
        <View>
          <Text style={styles.title}>Today's Recipes</Text>
        </View>

        {recipes.map((recipe, index) => (
          <View key={recipe.id}>
           <RecipeCard recipe={recipe} navigation={navigation} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
  },
 
});
