import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "home",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("assets/fonts/Oswald-VariableFont_wght.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="home"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="inputScreen"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
