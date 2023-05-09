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
  Icon,
  Logo,
  Title,
} from './styles';
import { ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import Button from '../../components/Form/Button';
import logo from '../../assets/imgs/logo.png';
import InputControl from '../../components/Form/InputControl';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInput {
  // email: string;
  // password: string;
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const SignUp: React.FunctionComponent = () => {
  const { goBack } = useNavigation<ScreenNavigationProp>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignUp = (form: IFormInput) => {
    const data = {
      name: form.name,
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
            <Title>Crie sua conta</Title>
            <InputControl
              autoCapitalize="characters"
              autoCorrect={false}
              control={control}
              name="name"
              placeholder="Nome completo"
              error={errors.name && (errors.name?.message as string)}
            />
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
            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => goBack()}>
        <Icon name="arrow-left" />
        <CreateAccountTitle>Voltar para login</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
