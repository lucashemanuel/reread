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
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState(1);

  const result = value1 + value2 + value3 + value4;

  function handleSubmit() {
    console.log(result);
  }

  return (
    <Container>
      <QuizArea>
        <Title>Quiz de Perfil</Title>
        <Questions>
          <QuestionText>
            1 - Você está confortável com seu nível de didática em sala de aula?
          </QuestionText>
          <Radio.Group
            name="RadioGroup"
            value={value1}
            onChange={(nextValue) => {
              setValue1(nextValue);
            }}
          >
            <Stack direction={{ base: "row" }} space={5}>
              <Radio
                value={10}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue1}
              >
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio
                value={5}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue1}
              >
                <CheckText>Parcialmente</CheckText>
              </Radio>
              <Radio
                value={1}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue1}
              >
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

          <Radio.Group
            name="RadioGroup"
            value={value2}
            onChange={(nextValue) => {
              setValue2(nextValue);
            }}
          >
            <Stack direction={{ base: "row" }} space={5}>
              <Radio
                value={10}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue2}
              >
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio
                value={5}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue2}
              >
                <CheckText>Parcialmente</CheckText>
              </Radio>
              <Radio
                value={1}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue2}
              >
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

          <Radio.Group
            name="RadioGroup"
            value={value3}
            onChange={(nextValue) => {
              setValue3(nextValue);
            }}
          >
            <Stack direction={{ base: "row" }} space={5}>
              <Radio
                value={10}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue3}
              >
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio
                value={5}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue3}
              >
                <CheckText>Parcialmente</CheckText>
              </Radio>
              <Radio
                value={1}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue3}
              >
                <CheckText>Não</CheckText>
              </Radio>
            </Stack>
          </Radio.Group>
        </Questions>
        <Questions>
          <QuestionText>
            4 - Seu nível de aptidão com tecnologias é bom?
          </QuestionText>

          <Radio.Group
            name="RadioGroup"
            value={value4}
            onChange={(nextValue) => {
              setValue4(nextValue);
            }}
          >
            <Stack direction={{ base: "row" }} space={5}>
              <Radio
                value={10}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue4}
              >
                <CheckText>Sim</CheckText>
              </Radio>
              <Radio
                value={5}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue4}
              >
                <CheckText>Parcialmente</CheckText>
              </Radio>
              <Radio
                value={1}
                colorScheme="purple"
                size="sm"
                my={1}
                onChange={setValue4}
              >
                <CheckText>Não</CheckText>
              </Radio>
            </Stack>
          </Radio.Group>
        </Questions>
        <ButtonArea>
          <Previous onPress={handleSubmit}>
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
