import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Profile2User, Timer1 } from 'iconsax-react-nativejs';

export default function RecipeCard({ recipe }) {
  const navigation = useNavigation();
  return (
    <View style={styles.cardWrapper}>
      <Pressable
        // * Şuan her bir kartımız tıkladığımızda bizi aynı sayfaya yönlendiriyor, fakat bizim o sayfada hangi ürüne tıkladıysak o ürünün detayına erişebilmemiz gerekiyor.

        // ^ Bunun için tıkladığımız her ürünü birbirinden ayırt edebileceğimiz bir bilgi göndermemiz gerekiyor.

        // * Sayfalar arası bilgi aktarımı parametre ile olur. React Navigation'da parametre vermek için navigation.navigate'den sonra bir nesne belirlenir ve içine parametre konur.

        //! Dikkat edilmesi gereken bir husus bu tarz veri alışverişi ile gönderilebilecek veri türleri sınırlıdır (mesela fonksiyon veya obje göndermek) genellikle tavsiye edilmez. Bunun yerine göndereceğiniz nesnenin IDsini göndermek ve sonra o sayfada nesneyi tekrardan çekmek daha mantıklıdır.

        onPress={() =>
          navigation.navigate('RecipeScreen', { recipeId: recipe.id })
        }
      >
        <Image source={recipe.image} style={styles.image} />
        <View style={styles.detailsWrapper}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>

          <View style={styles.recipeDetails}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
              <Profile2User size="20" color="#FF8A65" />
              <Text style={styles.recipeServings}>{recipe.servings}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
              <Timer1 size="20" color="#FF8A65" />
              <Text style={styles.recipeCookTime}>{recipe.cookTime}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    margin: 15,
  },

  image: {
    width: 300,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  recipeTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 5,
    paddingBottom: 3,
  },
  detailsWrapper: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  recipeDetails: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  recipeServings: {
    color: 'rgba(255, 255, 255, 0.63)',
  },
  recipeCookTime: {
    color: 'rgba(255, 255, 255, 0.63)',
  },
});
