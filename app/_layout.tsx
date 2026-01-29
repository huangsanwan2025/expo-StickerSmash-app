import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
  if (Platform.OS === 'android') {
    // Set the navigation bar style
    NavigationBar.setStyle('dark');
  }
}, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="img" options={{ title: 'Img' }} />
        <Stack.Screen name="image-pick" options={{ title: 'Image Pick' }} />
        <Stack.Screen name="dialog" options={{ presentation: 'modal', title: 'Dialog' }} />
        <Stack.Screen name="animation" options={{  title: 'animation' }} />
        <Stack.Screen name="screenshot" options={{  title: 'screenshot' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
