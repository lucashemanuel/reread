import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const image = <FontAwesome name="image" size={50} />;
const microchip = <FontAwesome name="microchip" size={50} />;
const graduation = <FontAwesome name="graduation-cap" size={50} />;
const wheelchair = <FontAwesome5 name="wheelchair" size={50} />;
const book = <FontAwesome5 name="book-reader" size={50} />;
const bem = <FontAwesome5 name="hand-holding-heart" size={50} />;
const lingua = <FontAwesome5 name="globe" size={50} />;

export const category = [
  { name: "categoria 1", image: image },
  { name: "categoria 2", image: microchip },
  { name: "categoria 3", image: graduation },
  { name: "categoria 4", image: wheelchair },
  { name: "categoria 5", image: book },
  { name: "categoria 6", image: bem },
  { name: "categoria 7", image: lingua },
];
