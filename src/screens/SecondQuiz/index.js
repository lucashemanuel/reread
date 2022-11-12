import React, { useState } from "react";
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
import { database, collection, setDoc, doc, addDoc } from "../../firebase";

export default function SecondQuiz({ navigation }) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const pontos = value1 + value2 + value3;

  async function handleSubmit() {
    try {
      const docRef = await addDoc(collection(database, "result_quiz"), {
        categoria: "Bem-estar",
        pontos: pontos,
      });
      addDoc(collection(database, "result_quiz"), {
        categoria: "Deficiências",
        pontos: value4,
      });

      console.log("Document written with ID: ", docRef.id);
      navigation.navigate("ThirdQuiz");
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
            5 - O seu bem estar está impactando diretamente o seu desempenho no
            trabalho?
          </QuestionText>
          <Radio.Group
            name="Bem-estar"
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
          <QuestionText>
            6 - Você se sente confortável com sua rotina atual?
          </QuestionText>
          <Radio.Group
            name="Bem-estar"
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
            7 - Em relação ao seu desempenho físico você está satisfeito com a
            situação atual?
          </QuestionText>
          <Radio.Group
            name="Bem-estar"
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
            8 - Você se sente apto a conviver e interagir com pessoas com
            deficiências físicas e mentais?
          </QuestionText>
          <Radio.Group
            name="Deficiências"
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
