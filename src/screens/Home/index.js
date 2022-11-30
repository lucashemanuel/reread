import React from "react";
import { FlatList } from "native-base";
import { Container, Header, Texto, Title } from "./style";
import Category from "../../components/Category";
import { category } from "../../data/category";

export default function Home() {
  return (
    <Container>
      <Header>
        <Title>ReRead App</Title>
      </Header>
      <Title>Home</Title>

      <FlatList
        maxHeight={200}
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
