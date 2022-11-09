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
import { collection, addDoc, database } from "../../firebase";

export default function FirstQuiz({ navigation }) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const pontos = value1 + value2 + value3 + value4;

  async function handleSubmit() {
    try {
      const docRef = await addDoc(collection(database, "result_quiz"), {
        categoria: "Produção/Ensino",
        pontos: pontos,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
                value={0}
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
            2 - Em algum nível a locomoção de sua residência a seu local de
            trabalho impacta seu desempenho?
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
                value={0}
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
            3 - Você apresenta constante demanda sobre produção de materiais
            para a atuação de suas atividades?
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
                value={0}
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
            4 - Você consegue atender as duas demandas de trabalho atuais de
            forma eficaz?
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
                value={0}
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
