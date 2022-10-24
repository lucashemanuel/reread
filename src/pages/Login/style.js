import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #3a86ff;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const Texto = styled.Text`
  color: #ffffff;
  font-size: 25px;
  margin-bottom: 5px;
`;

export const Texto2 = styled.Text`
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 15px;
`;

export const Texto3 = styled.Text`
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
`;

export const FormTitle = styled.Text`
  font-size: 40px;
  margin-bottom: 15px;
`;

export const Email = styled.TextInput`
  background-color: #f0f0f0;
  width: 330px;
  height: 50px;
  border-radius: 25px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Password = styled.TextInput`
background-color: #f0f0f0;
  width: 330px;
  height: 50px;
  border-radius: 25px;
  padding: 15px;
  margin-bottom: 25px;
`;

export const Forgot = styled.Text`
  color: #9e9e9e;
  margin-bottom: 15px;
`;

export const FormButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #3a86ff;
  color: #ffffff;
  border-radius: 25px;
  width: 120px;
  height: 40px;
`;