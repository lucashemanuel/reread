import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #9d61f0;
`;

export const Texto = styled.Text`
  font-family: "Poppins-Bold";
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 5px;
`;

export const Texto2 = styled.Text`
  font-family: "Poppins";
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const Texto3 = styled.Text`
  font-family: "Poppins-Bold";
  text-transform: uppercase;
  color: #ffffff;
  font-size: 17px;
`;

export const HeaderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-color: #ffffff;
  border-width: 3px;
  border-radius: 15px;
  width: 150px;
`;

export const Form = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const FormTitle = styled.Text`
  font-family: "Poppins-Bold";
  font-size: 40px;
  margin-bottom: 15px;
`;

export const Email = styled.TextInput`
  font-family: "Poppins";
  margin-left: 5%;
  height: 50px;
  width: 280px;
`;

export const Password = styled.TextInput`
  font-family: "Poppins";
  margin-left: 5%;
  height: 50px;
  width: 240px;
`;

export const Forgot = styled.Text`
  font-family: "Poppins";
  color: #9e9e9e;
  margin-bottom: 15px;
`;

export const FormButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #9d61f0;
  color: #ffffff;
  border-radius: 25px;
  width: 120px;
  height: 40px;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  width: 330px;
  height: 50px;
  border-radius: 25px;
  padding: 15px;
  margin-bottom: 5%;
`;

export const IconEye = styled.TouchableOpacity`
  margin-left: 4%;
`;
