import React from 'react';
import { Container, Header, Texto, Texto2, HeaderButton, Texto3, Form, FormTitle, Email, Password, Forgot, FormButton, InputView } from './style';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';

export default function Login({navigation}) {

  const [fonts] = useFonts({
    'Poppins': require('../../fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../fonts/Poppins-Bold.ttf'),
  });
  if (!fonts) {
    return null;
  }



  return (
    <Container>
      <Header>
        <Texto style={{fontFamily:'Poppins-Bold'}}>Novo aqui ?</Texto>
        <Texto2 style={{fontFamily:'Poppins'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</Texto2>
        <HeaderButton onPress={() => navigation.navigate('Register')}><Texto3 style={{fontFamily: 'Poppins-Bold'}}>CADASTRE-SE</Texto3></HeaderButton>
      </Header>

      <Form>
        <FormTitle style={{fontFamily: 'Poppins-Bold'}}>Entrar</FormTitle>

        <InputView>
          <FontAwesome name="envelope" size={20}/>
          <Email style={{fontFamily: 'Poppins'}} placeholder="Email"/>
        </InputView>

        <InputView> 
          <FontAwesome5 name="lock" size={20}/>
          <Password style={{fontFamily: 'Poppins'}} placeholder="Senha" secureTextEntry={true}/>
        </InputView>

        <TouchableOpacity><Forgot style={{fontFamily: 'Poppins'}}>Esqueci minha senha</Forgot></TouchableOpacity>

        <FormButton><Texto3>ENTRAR</Texto3></FormButton>
      </Form>
    </Container>
  );
}
