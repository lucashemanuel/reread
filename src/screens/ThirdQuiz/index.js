import React from "react";
import { Radio, Stack } from "native-base";
import {
  ButtonArea,
  ButtonText,
  CheckText,
  Previous,
  Next,
  Container,
  Questions,
  QuestionText,
  QuizArea,
  Texto,
} from "./style";

export default function ThirdQuiz({ navigation }) {
  return (
    <Container>
      <QuizArea>
        <Texto>Quiz de Perfil</Texto>
        <Questions>
          <QuestionText>9 - Você atua geralmente com crianças? </QuestionText>
          <Radio.Group name="RadioGroup" defaultValue="3">
            <Stack direction={{ base: "row" }} space={5}>
              <Radio value="1" colorScheme="purple" size="sm" my={1}>
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio value="2" colorScheme="purple" size="sm" my={1}>
                <CheckText>Provavelmente</CheckText>
              </Radio>
              <Radio value="3" colorScheme="purple" size="sm" my={1}>
                <CheckText>Não</CheckText>
              </Radio>
            </Stack>
          </Radio.Group>
        </Questions>
        <Questions>
          <QuestionText>
            10 - Você apresenta dificuldades na hora da leitura e escrita?
          </QuestionText>
          <Radio.Group name="RadioGroup" defaultValue="3">
            <Stack direction={{ base: "row" }} space={5}>
              <Radio value="1" colorScheme="purple" size="sm" my={1}>
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio value="2" colorScheme="purple" size="sm" my={1}>
                <CheckText>Provavelmente</CheckText>
              </Radio>
              <Radio value="3" colorScheme="purple" size="sm" my={1}>
                <CheckText>Não</CheckText>
              </Radio>
            </Stack>
          </Radio.Group>
        </Questions>
        <Questions>
          <QuestionText>
            11 - Você apresenta constante demanda sobre conhecimentos
            cinegrafistas e derivados?
          </QuestionText>
          <Radio.Group name="RadioGroup" defaultValue="3">
            <Stack direction={{ base: "row" }} space={5}>
              <Radio value="1" colorScheme="purple" size="sm" my={1}>
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio value="2" colorScheme="purple" size="sm" my={1}>
                <CheckText>Provavelmente</CheckText>
              </Radio>
              <Radio value="3" colorScheme="purple" size="sm" my={1}>
                <CheckText>Não</CheckText>
              </Radio>
            </Stack>
          </Radio.Group>
        </Questions>
        <Questions>
          <QuestionText>
            12 - Você se sente confortável com seu rotina atual?
          </QuestionText>
          <Radio.Group name="RadioGroup" defaultValue="3">
            <Stack direction={{ base: "row" }} space={5}>
              <Radio value="1" colorScheme="purple" size="sm" my={1}>
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio value="2" colorScheme="purple" size="sm" my={1}>
                <CheckText>Provavelmente</CheckText>
              </Radio>
              <Radio value="3" colorScheme="purple" size="sm" my={1}>
                <CheckText>Não</CheckText>
              </Radio>
            </Stack>
          </Radio.Group>
        </Questions>
        <ButtonArea>
          <Previous onPress={() => navigation.goBack()}>
            <ButtonText>Anterior</ButtonText>
          </Previous>
          <Next onPress={() => navigation.navigate("FourthQuiz")}>
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
