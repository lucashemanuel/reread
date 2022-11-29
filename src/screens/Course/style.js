import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #9d61f0;
  align-items: center;
  justify-content: center;
`;
export const Navigator = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
`;

export const Nav = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const Back = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: "Poppins";
  margin-left: 7%;
`;
export const Skip = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: "Poppins";
  margin-right: 7%;
`;

export const Area = styled.View`
  flex-direction: row;
  width: 90%;
  height: 16%;
  background-color: #ffffff;
  border-radius: 25px;
  margin-top: 4%;
`;

export const Intro = styled.View`
  padding: 5%;
  height: 100%;
  width: 30%;
  background-color: #360b72;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;
export const Info = styled.View`
  padding: 4%;
  width: 70%;
  height: 100%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const Title = styled.Text`
  font-family: "Poppins-Bold";
  color: #ae9dc6;
  text-transform: uppercase;
`;

export const Texto = styled.Text`
  color: #ffffff;
  font-family: "Poppins-Bold";
`;

export const InfoTitle = styled.Text`
  color: #656565;
  font-family: "Poppins-Bold";
  text-transform: uppercase;
`;
export const Description = styled.Text`
  font-family: "Poppins-Bold";
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15%;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 27%;
  background-color: #360b72;
  border-radius: 25px;
`;
