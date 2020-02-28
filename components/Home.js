import React, {useEffect} from 'react';
import {
  Body,
  Button, Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
  View
} from "native-base";
import * as Font from 'expo-font';
import {Ionicons} from "@expo/vector-icons";

const Home = ({navigation}) => {



  return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Partituras</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <List>
            <ListItem noIndent button={true} onPress={() => navigation.navigate('PDF')}>
              <Left>
                <Text>Himnos Cena del Señor</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem noIndent button={true} onPress={() => navigation.navigate('PDFMenores')}>
              <Left>
                <Text>Coros Jovenes Menores</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
            <ListItem noIndent button={true} onPress={() => navigation.navigate('PDFGloria')}>
              <Left>
                <Text>Himnario Celebremos su Gloria</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="navigate"/>
              <Text>PDF's</Text>
            </Button>
            <Button vertical>
              <Icon name="person"/>
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
  )
}

export default Home;