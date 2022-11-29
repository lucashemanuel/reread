import React, { useState } from "react";
import { Radio, Stack } from "native-base";
import {
  ButtonArea,
  ButtonText,
  Container,
  Next,
  Previous,
  Questions,
  QuestionText,
  QuizArea,
  CheckText,
  Texto,
} from "./style";
import { database, collection, addDoc, setDoc, doc } from "../../firebase";

export default function FourthQuiz({ navigation }) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const pontos = value1 + value2;
  const points = value3 + value4;

  async function handleSubmit() {
    try {
      await setDoc(doc(database, "result_quiz", "Línguas Estrangeiras"), {
        categoria: "Línguas Estrangeiras",
        pontos: pontos,
      });
      setDoc(doc(database, "result_quiz", "Tecnologias"), {
        categoria: "Tecnologias",
        pontos: points,
      });
      //console.log("Document written with ID: ", docRef.id);
      navigation.navigate("Choose");
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
            13 -Seu domínio de Línguas Estrangeiras impacta negativamente o seu
            desempenho?
          </QuestionText>
          <Radio.Group
            name="Línguas Estrangeiras"
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
            14 - Os conteúdos ministrados por você estão presentes em outro
            idioma?
          </QuestionText>
          <Radio.Group
            name="Línguas Estrangeiras"
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
            15 - Na sua área de atuação existe a demanda de uso de tecnologia do
            cunho da TI?
          </QuestionText>
          <Radio.Group
            name="Tecnologias"
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
            16 - Seu nível de aptidão com tecnologias é bom?
          </QuestionText>
          <Radio.Group
            name="Tecnologias"
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
          <Previous activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <ButtonText>Anterior</ButtonText>
          </Previous>
          <Next activeOpacity={0.8} onPress={handleSubmit}>
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
