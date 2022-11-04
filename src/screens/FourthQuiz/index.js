import React from "react";
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

export default function Quiz({ navigation }) {
  return (
    <Container>
      <QuizArea>
        <Texto>Quiz de Perfil</Texto>
        <Questions>
          <QuestionText>
            13 - Em relação ao seu desempenho físico você está satisfeito com a
            situação atual?
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
            14 - Os conteúdos estudos por você estão presentes em outro idioma?
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
            15 - Você apresenta constante demanda sobre produção de materiais
            para a atuação de suas atividades?
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
            16 - Você consegue atender as duas demandas de trabalho atuais de
            forma eficaz?
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
          <Next>
            <ButtonText>Próximo</ButtonText>
          </Next>
        </ButtonArea>
      </QuizArea>
    </Container>
  );
}
