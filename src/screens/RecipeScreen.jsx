import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipes from './../data/recipes';
import { Image } from 'react-native';
import { Add, ArrowSquareLeft, Bill, Profile2User, Timer1 } from 'iconsax-react-nativejs';

const RecipeScreen = ({ route, navigation }) => {
  const id = route.params.recipeId;
  //*diğer sayfalarda bize gönderilen parametrelere erişebilmek için "route" propunu kullanırız.

  const recipe = recipes.find(item => item.id === id);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.9)',
      }}
    >
      <View style={{ position: 'relative' }}>
        <Image source={recipe.image} style={styles.image} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowSquareLeft size="36" color="#ffffffff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.detailsWrapper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <Profile2User size="20" color="#FF8A65" />
          <Text style={{ color: 'rgba(148, 148, 148, 0.8)', fontSize: 20 }}>
            {recipe.servings}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <Timer1 size="20" color="#FF8A65" />
          <Text style={{ color: 'rgba(148, 148, 148, 0.8)', fontSize: 20 }}>
            {recipe.cookTime}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.ingredientsTitle}>
          
          Ingredients:
        </Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredientItem}>
            <Add size="16" color="#FF8A65" /> {ingredient}
          </Text>
        ))}
      </View>

      <View>
        <Text style={styles.ingredientsTitle}>
          Description:
        </Text>
        <Text style={styles.ingredientItem}>{recipe.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RecipeScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 210,
    borderRadius: 10,
    marginVertical: 10,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
  },
  detailsWrapper: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  ingredientsTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientItem: {
    color: 'rgba(148, 148, 148, 0.8)',
    fontSize: 16,
    marginLeft: 10,
  },
});
