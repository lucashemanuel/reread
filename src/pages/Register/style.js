import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Form = styled.View`
  flex: 2;
  background-color: #ffffff;
  padding-left: 8%;
  padding-top: 20%;
`;

export const FormTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 5%;
`;

export const Name = styled.TextInput`
  margin-left: 5%;
  height: 50px;
  width: 280px;
`;

export const Email = styled.TextInput`
  margin-left: 5%;
  height: 50px;
  width: 280px;
`;

export const Password = styled.TextInput`
  margin-left: 5%;
  height: 50px;
  width: 240px;
`;

export const FormButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #3a86ff;
  color: #ffffff;
  border-radius: 25px;
  width: 120px;
  height: 40px;
  margin-left: 23%;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 7%;
  padding-right: 7%;
  background-color: #3a86ff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 2%;
`;

export const HeaderText = styled.Text`
  color: #ffffff;
  margin-bottom: 3%;
`;

export const HeaderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-color: #ffffff;
  border-width: 3px;
  border-radius: 15px;
  width: 90px;
  height: 30px;
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
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