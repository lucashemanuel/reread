import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  ButtonArea,
  ButtonText,
  Container,
  Imagem,
  Next,
  Previous,
  Questions,
  QuestionText,
  QuizArea,
  ScrollContainer,
  Title,
} from "./style";

export default function Quiz({ navigation }) {
  return (
    <Container>
      <QuizArea>
        <Title>Quiz de Perfil</Title>
        <Imagem
          source={require("../../assets/bird.png")}
          resizeMode="contain"
        />
        <QuestionText>
          Bem vindo(a), Fulano! Agora que você realizou o cadastro no nosso app,
          responda todas as perguntas do nosso quiz para entendermos melhor o
          seu tipo de perfil.
        </QuestionText>
        <ButtonArea>
          <Previous activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <ButtonText>Anterior</ButtonText>
          </Previous>
          <Next
            activeOpacity={0.8}
            onPress={() => navigation.navigate("FirstQuiz")}
          >
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
