import React, { useState } from "react";
import { Radio, Stack } from "native-base";
import {
  ButtonArea,
  ButtonText,
  Container,
  CheckText,
  Next,
  Previous,
  Questions,
  QuestionText,
  QuizArea,
  Title,
} from "./style";

export default function FirstQuiz({ navigation }) {
  return (
    <Container>
      <QuizArea>
        <Title>Quiz de Perfil</Title>
        <Questions>
          <QuestionText>
            1 - Você está confortável com seu nível de didática em sala de aula?
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
            2 - O seu bem estar está impactando diretamente o seu desempenho no
            trabalho?
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
            3 - Na sua área de atuação existe a demanda de uso de tecnologia do
            cunho da TI?
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
            4 - Seu nível de aptidão com tecnologias é bom?
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
          <Next onPress={() => navigation.navigate("SecondQuiz")}>
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
