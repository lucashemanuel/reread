import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import {
  Category,
  Container,
  Message,
  ChooseArea,
  Title,
  Touch,
  TextCategory,
} from "./style";
import {
  orderBy,
  query,
  limit,
  getDoc,
  database,
  doc,
  collection,
} from "../../firebase";
export default function Choose({ navigation }) {
  async function teste() {
    navigation.navigate("Course");
  }
  return (
    <Container>
      <ChooseArea>
        <Title>Escolha uma Categoria</Title>
        <Message>
          Com base no quiz que você acabou de responder, definimos algumas
          categorias que combinam com você. Escolha a categoria que você mais
          tem interesse em estudar no momento ou a que você têm maior afinidade.
        </Message>

        <Category onPress={teste} activeOpacity={0.8}>
          <TextCategory>teste1</TextCategory>
        </Category>

        <Category activeOpacity={0.8}>
          <TextCategory>teste</TextCategory>
        </Category>

        <Category activeOpacity={0.8}>
          <TextCategory>teste</TextCategory>
        </Category>
      </ChooseArea>
    </Container>
  );
}
