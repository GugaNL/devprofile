import React from 'react';
import { TextInputProps } from 'react-native';
import { theme } from '../../../styles/theme';
import { Container } from './styles';

const Input: React.FunctionComponent<TextInputProps> = ({ ...otherProps }) => {
  return (
    <Container placeholderTextColor={theme.colors.black} {...otherProps} />
  );
};

export default Input;
