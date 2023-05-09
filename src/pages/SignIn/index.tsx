import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountTitle,
  ForgorPasswordButton,
  ForgotPasswordText,
  Icon,
  Logo,
  Title,
} from './styles';
import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import Button from '../../components/Form/Button';
import logo from '../../assets/imgs/logo.png';
import InputControl from '../../components/Form/InputControl';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInput {
  // email: string;
  // password: string;
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const SignIn: React.FunctionComponent = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignIn = (form: IFormInput) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Faça seu login</Title>
            </View>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              control={control}
              name="email"
              placeholder="Email"
              error={errors.email && (errors.email?.message as string)}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              control={control}
              name="password"
              placeholder="Senha"
              error={errors.password && (errors.password?.message as string)}
            />
            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

            <ForgorPasswordButton>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgorPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
