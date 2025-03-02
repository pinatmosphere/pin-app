import React from 'react';
import { Button, ButtonProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedButtonProps = ButtonProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export const ThemedButton = (props: ButtonProps) => {
  return <Button {...props} />;
};
