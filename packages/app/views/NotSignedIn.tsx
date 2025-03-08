import React from 'react';
import { ThemedButton } from '@/components/Button';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

const NotLoggedIn = () => {
  return (
    <ThemedView>
      <Link href="/account/signin">
        <ThemedButton title="Sign In" />
      </Link>
    </ThemedView>
  );
};

export default NotLoggedIn;
