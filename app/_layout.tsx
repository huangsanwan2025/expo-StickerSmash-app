import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="img" options={{ title: 'Img' }} />
        <Stack.Screen name="image-pick" options={{ title: 'Image Pick' }} />
        <Stack.Screen name="dialog" options={{ presentation: 'modal', title: 'Dialog' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
