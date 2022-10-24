import React from 'react';
import { Container, Header, FormTitle, Form, Name, Email, Password, FormButton, ButtonText, HeaderText, HeaderTitle, HeaderButton, InputView } from './style';
import { useFonts } from 'expo-font';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';

export default function Register({navigation}) {
  const [fonts] = useFonts({
    'Poppins': require('../../fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../fonts/Poppins-Bold.ttf'),
  });
  if (!fonts) {
    return null;
  }

  return (
   <Container>
    <Form>
      <FormTitle style={{fontFamily:'Poppins-Bold'}}>Cadastro de Usuário</FormTitle>

      <InputView>
        <FontAwesome5 name="user-alt" size={20}/>
        <Name style={{fontFamily:'Poppins'}} placeholder="Nome"/>
      </InputView>
      
      <InputView>
      <FontAwesome name="envelope" size={20}/>
        <Email keyboardType="email-address" style={{fontFamily:'Poppins'}} placeholder="Email"/>
      </InputView>

      <InputView>
        <FontAwesome5 name="lock" size={20}/>
        <Password style={{fontFamily:'Poppins'}} secureTextEntry={true} placeholder="Senha"/>
      </InputView>

      <FormButton><ButtonText style={{fontFamily:'Poppins-Bold'}}>CADASTRAR</ButtonText></FormButton>
    </Form>
    <Header>
      <HeaderTitle style={{fontFamily:'Poppins-Bold'}}>Já possui uma conta ?</HeaderTitle>

      <HeaderText style={{fontFamily:'Poppins'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</HeaderText>

      <HeaderButton onPress={() => navigation.navigate('Login')} ><ButtonText style={{fontFamily:'Poppins-Bold'}}>ENTRAR</ButtonText></HeaderButton>
      
    </Header>
   </Container>
  );
}