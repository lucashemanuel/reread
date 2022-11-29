import React, { useState } from "react";
import {
  Container,
  Header,
  Texto,
  Texto2,
  HeaderButton,
  Texto3,
  Form,
  FormTitle,
  Email,
  Password,
  Forgot,
  FormButton,
  InputView,
  IconEye,
} from "./style";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "../../firebase";

export default function Login({ navigation }) {
  const [review, setReview] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Quiz");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container contentContainerStyle={{ flexGrow: 1 }}>
          <Header>
            <Texto>Novo aqui ?</Texto>
            <Texto2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </Texto2>
            <HeaderButton
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Register")}
            >
              <Texto3>Cadastre-se</Texto3>
            </HeaderButton>
          </Header>

          <Form>
            <FormTitle>Entrar</FormTitle>

            <InputView>
              <FontAwesome name="envelope" size={20} />
              <Email
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
              />
            </InputView>

            <InputView>
              <FontAwesome5 name="lock" size={20} />
              <Password
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
                secureTextEntry={review}
              />

              <IconEye onPress={() => setReview(!review)}>
                {review ? (
                  <FontAwesome5 name="eye-slash" size={20} />
                ) : (
                  <FontAwesome5 name="eye" size={20} />
                )}
              </IconEye>
            </InputView>

            <TouchableOpacity activeOpacity={0.6}>
              <Forgot>Esqueci minha senha</Forgot>
            </TouchableOpacity>

            <FormButton activeOpacity={0.8} onPress={handleLogin}>
              <Texto3>Entrar</Texto3>
            </FormButton>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
