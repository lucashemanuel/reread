import React, { useState } from "react";
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
import { database, collection, addDoc } from "../../firebase";

export default function ThirdQuiz({ navigation }) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const pontos = value1 + value2 + value3;

  async function handleSubmit() {
    try {
      const docRef = await addDoc(collection(database, "result_quiz"), {
        categoria: "Cinema/Cultura",
        pontos: pontos,
      });
      addDoc(collection(database, "result_quiz"), {
        categoria: "Leitura/Alfabetização",
        pontos: value4,
      });

      console.log("Document written with ID: ", docRef.id);
      navigation.navigate("FourthQuiz");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Container>
      <QuizArea>
        <Texto>Quiz de Perfil</Texto>
        <Questions>
          <QuestionText>
            9 - Você se sente alheio as demandas socioculturais atuais?
          </QuestionText>
          <Radio.Group
            name="Cinema/Cultura"
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
                <CheckText>Provavelmente</CheckText>
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
          <QuestionText>10 - Você atua geralmente com crianças?</QuestionText>
          <Radio.Group
            name="Cinema/Cultura"
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
                <CheckText>Provavelmente</CheckText>
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
            11 - Você apresenta constante demanda sobre conhecimentos
            cinegrafistas e derivados?
          </QuestionText>
          <Radio.Group
            name="Cinema/Cultura"
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
                <CheckText>Provavelmente</CheckText>
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
            12 - Você apresenta dificuldades na hora da leitura e escrita?
          </QuestionText>
          <Radio.Group
            name="Leitura/Alfabetização"
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
                <CheckText>Provavelmente</CheckText>
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
          <Previous onPress={() => navigation.goBack()}>
            <ButtonText>Anterior</ButtonText>
          </Previous>
          <Next onPress={handleSubmit}>
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
