import React, { useState } from 'react';
import { Container, Header, Texto, Texto2, HeaderButton, Texto3, Form, FormTitle, Email, Password, Forgot, FormButton, InputView, IconEye } from './style';
import { TouchableOpacity } from 'react-native';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';

export default function Login({navigation}) {

  const [hidePass, setHidePass] = useState(true);


  return (
    <Container>
      <Header>
        <Texto>Novo aqui ?</Texto>
        <Texto2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</Texto2>
        <HeaderButton onPress={() => navigation.navigate('Register')}><Texto3>CADASTRE-SE</Texto3></HeaderButton>
      </Header>

      <Form>
        <FormTitle>Entrar</FormTitle>

        <InputView>
          <FontAwesome name="envelope" size={20}/>
          <Email placeholder="Email"/>
        </InputView>

        <InputView> 
          <FontAwesome5 name="lock" size={20}/>
          <Password placeholder="Senha" secureTextEntry={hidePass}/>

          <IconEye onPress={() => setHidePass(!hidePass)}>
            {hidePass ? <FontAwesome5 name="eye-slash" size={20}/> : <FontAwesome5 name="eye" size={20}/>}
          </IconEye>
        </InputView>

        <TouchableOpacity><Forgot>Esqueci minha senha</Forgot></TouchableOpacity>

        <FormButton><Texto3>ENTRAR</Texto3></FormButton>
      </Form>
    </Container>
  );
}
