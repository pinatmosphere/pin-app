import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/Button';
import TextInput from '@/components/TextInput';

const SignInForm = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <TextInput />
    </ThemedView>
  );
};

export default SignInForm;
