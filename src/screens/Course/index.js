import React from "react";
import {
  Container,
  Nav,
  Navigator,
  Back,
  Skip,
  Area,
  Intro,
  Title,
  Texto,
  Info,
  InfoTitle,
  Description,
  Button,
} from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function Course({ navigation }) {
  return (
    <Container>
      <Navigator>
        <Nav activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <FontAwesome name="angle-left" size={20} color="#ffffff" />
          <Back>Voltar</Back>
        </Nav>
        <Nav activeOpacity={0.7} onPress={() => navigation.navigate("Home")}>
          <Skip>Pular</Skip>
          <FontAwesome name="angle-right" size={20} color="#ffffff" />
        </Nav>
      </Navigator>

      <Area>
        <Intro>
          <Title>Curso</Title>
          <Texto>Tema do respectivo curso</Texto>
        </Intro>
        <Info>
          <InfoTitle>Categoria do Curso</InfoTitle>
          <Description>Descrição do respectivo curso</Description>
          <Button activeOpacity={0.7}>
            <Texto>Inscrever</Texto>
          </Button>
        </Info>
      </Area>

      <Area>
        <Intro>
          <Title>Curso</Title>
          <Texto>Tema do respectivo curso</Texto>
        </Intro>
        <Info>
          <InfoTitle>Categoria do Curso</InfoTitle>
          <Description>Descrição do respectivo curso</Description>
          <Button activeOpacity={0.7}>
            <Texto>Inscrever</Texto>
          </Button>
        </Info>
      </Area>

      <Area>
        <Intro>
          <Title>Curso</Title>
          <Texto>Tema do respectivo curso</Texto>
        </Intro>
        <Info>
          <InfoTitle>Categoria do Curso</InfoTitle>
          <Description>Descrição do respectivo curso</Description>
          <Button activeOpacity={0.7}>
            <Texto>Inscrever</Texto>
          </Button>
        </Info>
      </Area>
    </Container>
  );
}
