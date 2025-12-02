const recipes = [
  {
    id: 1,
    title: "Revani",
    image: require('../assets/revani.jpg'),
    servings: 8,
    cookTime: "45 min",
    ingredients: [
      "Yumurta",
      "Şeker",
      "Un",
      "İrmik",
      "Süt",
      "Kabartma tozu",
      "Limon suyu",
      "Su (şerbet için)"
    ],
    description:
      "İrmikli klasik bir Türk tatlısı. Kek piştikten sonra üzerine ılık şerbet dökülerek yumuşak, hafif ve şerbetli bir lezzet elde edilir."
  },
  {
    id: 2,
    title: "Hünkar Beğendi",
    image: require('../assets/hunkar-begendi.jpg'),
    servings: 4,
    cookTime: "60 min",
    ingredients: [
      "Kuzu eti",
      "Tereyağı",
      "Soğan",
      "Domates",
      "Biber",
      "Patlıcan (közlenmiş)",
      "Un",
      "Süt",
      "Tuz",
      "Karabiber"
    ],
    description:
      "Közlenmiş patlıcan beşamelinin üzerine kuzu etiyle hazırlanan tarihi Osmanlı mutfağına ait nefis bir ana yemektir."
  },
  {
    id: 3,
    title: "İçli Köfte",
    image: require('../assets/icli-kofte.jpg'),
    servings: 6,
    cookTime: "40 min",
    ingredients: [
      "İnce bulgur",
      "Un veya irmik",
      "Kıyma",
      "Soğan",
      "Ceviz",
      "Salça",
      "Baharatlar",
      "Tereyağı"
    ],
    description:
      "Dışı bulgurlu hamurdan, içi ise kıyma-soğanlı harçtan oluşan, haşlanarak veya kızartılarak yapılan geleneksel bir köfte türüdür."
  },
  {
    id: 4,
    title: "Tiramisu",
    image: require('../assets/tiramisu.jpg'),
    servings: 6,
    cookTime: "30 min",
    ingredients: [
      "Kedi dili bisküvi",
      "Mascarpone peyniri",
      "Yumurta",
      "Şeker",
      "Kahve",
      "Kakao",
      "Süt"
    ],
    description:
      "İtalyan mutfağının ünlü tatlısı. Kahveyle ıslatılmış bisküviler ve kremamsı mascarpone karışımı kat kat dizilerek hazırlanır."
  },
  {
    id: 5,
    title: "Yaprak Sarma",
    image: require('../assets/sarma.jpg'),
    servings: 6,
    cookTime: "70 min",
    ingredients: [
      "Asma yaprağı",
      "Pirinç",
      "Soğan",
      "Zeytinyağı",
      "Nane",
      "Maydanoz",
      "Karabiber",
      "Limon"
    ],
    description:
      "Pirinç, baharat ve yeşilliklerle hazırlanan iç harcın asma yaprağına sarılmasıyla yapılan hafif ve aromatik bir zeytinyağlı yemektir."
  },
  {
    id: 6,
    title: "Enginar Dolma",
    image: require('../assets/enginar-dolmasi.jpg'),
    servings: 4,
    cookTime: "50 min",
    ingredients: [
      "Enginar",
      "Pirinç",
      "Soğan",
      "Zeytinyağı",
      "Dereotu",
      "Limon",
      "Tuz",
      "Karabiber"
    ],
    description:
      "Taze enginarların içinin zeytinyağlı pirinçli harçla doldurulmasıyla yapılan hafif, ferah ve mevsimsel bir Ege yemeğidir."
  }
];

export default recipes;
