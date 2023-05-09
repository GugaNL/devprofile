import React from 'react';
import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserAvatarButton,
  UserGreetings,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';
import avatarDefault from '../../assets/imgs/avatar.png';

const Home = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Gustavo</UserName>
            </UserInfoDetail>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Home;
