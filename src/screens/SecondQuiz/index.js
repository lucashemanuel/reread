import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Radio, Stack } from "native-base";
import {
  ButtonArea,
  ButtonText,
  Next,
  Previous,
  Container,
  Questions,
  QuestionText,
  QuizArea,
  CheckText,
  Texto,
} from "./style";

export default function SecondQuiz({ navigation }) {
  return (
    <Container>
      <QuizArea>
        <Texto>Quiz de Perfil</Texto>
        <Questions>
          <QuestionText>
            5 - Em algum nível a locomoção de sua residência a seu local de
            trabalho impacta seu desempenho?
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
            6 - Você se sente alheio as demandas socioculturais atuais?
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
            7 - Você se sente apto a conviver e interagir com pessoas com
            deficiências físicas e mentais?
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
            8 - Seu domínio de Línguas Estrangeiras impacto negativamente o seu
            desempenho?
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
          <Next onPress={() => navigation.navigate("ThirdQuiz")}>
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
