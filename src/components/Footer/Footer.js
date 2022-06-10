import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #0d0e43;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  color: #ffffff;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: #8a8fb9;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  margin-right: 330px;
  color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          The<strong style={{ color: "#8568FF" }}>Shop</strong>
        </Logo>
      </Left>
      <Center>
        <Title>Categories</Title>

        <List>
          <ListItem>Laptops & Computers</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Cameras & Photography</ListItem>
          <ListItem>Discount</ListItem>
          <ListItem>Smart Phones & Tablets</ListItem>
          <ListItem>Returns</ListItem>
          <ListItem>Video Games & Consoles</ListItem>
          <ListItem>Orders History</ListItem>
          <ListItem>Waterproof Headphones</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>
      <Right>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <BsFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiFillTwitterCircle />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
