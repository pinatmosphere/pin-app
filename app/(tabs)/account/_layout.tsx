import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { View, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import NotSignedIn from '@/views/NotSignedIn';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from '@/components/ThemedText';
import { Stack, Slot } from 'expo-router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemedView style={{ height: '100%', paddingTop: StatusBar.currentHeight }}>
      <Slot />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default Layout;
