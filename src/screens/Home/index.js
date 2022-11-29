import React from "react";
import { FlatList } from "native-base";
import { Container, Header, Texto, Title } from "./style";
import Category from "../../components/Category";

export default function Home() {
  const category = [
    { name: "categoria1" },
    { name: "categoria2" },
    { name: "categoria3" },
    { name: "categoria4" },
    { name: "categoria5" },
    { name: "categoria6" },
    { name: "categoria7" },
    { name: "categoria8" },
    { name: "categoria9" },
  ];
  return (
    <Container>
      <Header>
        <Title>ReRead App</Title>
      </Header>
      <Title>Home</Title>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={category}
        renderItem={({ item }) => <Category data={item} />}
      />

      <Header>
        <Texto>Meus cursos</Texto>
      </Header>
    </Container>
  );
}
