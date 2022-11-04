import React, {useState} from 'react';
import { Container, Header, FormTitle, Form, Name, Email, Password, FormButton, ButtonText, HeaderText, HeaderTitle, HeaderButton, InputView, IconEye } from './style';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';



export default function Register({navigation}) {

  const [review, setReview] = useState(true);
  /*const [name, setName] = useState('');*/
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  function handleRegister() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    alert("Usuário cadastrado com sucesso!!!", user);
    navigation.navigate('Login')
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
    alert(errorMessage);
    });
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container contentContainerStyle={{ flexGrow: 1 }}>
          <Form>
            <FormTitle>Cadastro de Usuário</FormTitle>
            
            <InputView>
            <FontAwesome name="envelope" size={20}/>
              <Email onChangeText={setEmail} value={email} keyboardType="email-address" placeholder="Email"/>
            </InputView>

            <InputView>
              <FontAwesome5 name="lock" size={20}/>
              <Password onChangeText={setPassword} value={password} secureTextEntry={review} placeholder="Senha"/>

              <IconEye onPress={() => setReview(!review)}>
                {review ? <FontAwesome5 name="eye-slash" size={20}/> : <FontAwesome5 name="eye" size={20}/>}
              </IconEye>
            </InputView>

            <FormButton>
              <ButtonText onPress={handleRegister}>Cadastrar</ButtonText>
            </FormButton>
          </Form>

          <Header>
            <HeaderTitle>Já possui uma conta ?</HeaderTitle>

            <HeaderText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</HeaderText>
            
            <HeaderButton onPress={() => navigation.navigate('Login')} >
              <ButtonText>Entrar</ButtonText>
            </HeaderButton>
          </Header>
        </Container>
      </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
  );
}